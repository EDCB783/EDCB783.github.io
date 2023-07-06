window.onload = () => {
  document.getElementById("loader").style.visibility = "Hidden";
};

let currentAnimation = ""; //vista actual
let previousAnimation = ""; //vista anterior

const views = {
  HOME: "HOME",
  SKILLS: "SKILLS",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT",
};

const CTRL_ANIMATION = (newView = "") => {
  if (newView != currentAnimation) {
    previousAnimation = currentAnimation;
    currentAnimation = newView;
  } else {
    return;
  }

  const moveLeft = () => {
    let blockView = document.getElementById(currentAnimation);
    blockView.style.left = 0;
    blockView.style.zIndex = 100;
  };

  const moveRight = () => {
    if (previousAnimation == "") {
      return;
    }
    let blockView = document.getElementById(previousAnimation);
    blockView.style.left = "100vw";
    blockView.style.zIndex = 0;
  };

  moveLeft();
  moveRight();
};

document.getElementById("btn-home").addEventListener("click", () => {
  CTRL_ANIMATION(views.HOME);
});

document.getElementById("btn-skills").addEventListener("click", () => {
  CTRL_ANIMATION(views.SKILLS);
});

document.getElementById("btn-projects").addEventListener("click", () => {
  CTRL_ANIMATION(views.PROJECTS);
});

document.getElementById("btn-contact").addEventListener("click", () => {
  CTRL_ANIMATION(views.CONTACT);
});

CTRL_ANIMATION(views.HOME);

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let btnSubmiter = e.submitter.id;
  let $ = e.target;
  if (btnSubmiter == "btn-submit") {
    let name = $.querySelector("#input-name").value;
    let email = $.querySelector("#input-email").value;
    let description = $.querySelector("#input-description").value;

    fetch("./config/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&description=${encodeURIComponent(description)}`
      })
        .then(function (response) {
          alert("Correo enviado con exito")
        })
        .catch(function (error) {
            console.log(error)
        });

    $.reset();
  }
  if (btnSubmiter == "btn-download") {
    fetch("../CV_Elmer_Cedillos.pdf")
      .then(function (response) {
        return response.blob();
      })
      .then(function (blob) {
        // Crear un enlace de descarga
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "CV Elmer Cedillos.pdf";
        a.click();
      });
  }
});
