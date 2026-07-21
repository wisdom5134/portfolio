function changeText() {

    let button = document.getElementById("myButton");

    if (button.innerHTML === "Learn more about me") {

        document.getElementById("welcomeText").innerHTML =
        "Hi, I'm Wisdom 👋<br>Welcome to my Front-End Developer Portfolio!";

        document.getElementById("paragraph").innerHTML =
        "Thank you for taking the time to visit my portfolio. I hope you enjoy exploring my work.";

        button.innerHTML = "Thanks for visiting! 😊";

    } else {

        document.getElementById("welcomeText").innerHTML =
        "Welcome to My Website";

        document.getElementById("paragraph").innerHTML =
        "My name is Wisdom. I am learning web development and building my skills in HTML and CSS. My goal is to become a professional web developer and create amazing websites.";

        button.innerHTML = "Learn more about me";
    }
}

document.getElementById("date").innerHTML =
new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

function updateClock() {
    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


function changeTheme() {

    document.body.classList.toggle("light-mode");

}


function toggleAbout() {

    let about = document.getElementById("about");
    let button = document.getElementById("aboutButton");

    if (about.style.display === "none") {

        about.style.display = "block";
        button.innerHTML = "Hide About Me";

    } else {

        about.style.display = "none";
        button.innerHTML = "Show About Me";

    }

}
function toggleProjects() {

    let projects = document.getElementById("projects");
    let button = document.getElementById("projectsButton");

    if (projects.style.display === "none") {

        projects.style.display = "block";
        button.innerHTML = "Hide Projects";

    } else {

        projects.style.display = "none";
        button.innerHTML = "Show Projects";

    }

}


function toggleContact () {
    let contacts = document.getElementById("contact")
    let button =  document.getElementById("contactButton") 

    if  (contact.style.display === "none")  {
       
        contact.style.display  ="block";
        button.innerHTML  = "Hide Contact";
    }  else {

        contact.style.display ="none";
        button.innerHTML = "Show Contact"
    }
}