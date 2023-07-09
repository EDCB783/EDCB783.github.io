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


document.getElementById('pokedex').addEventListener('click', () =>{
  window.open('https://github.com/EDCB783/pokedex', '_blank');
})

document.getElementById('asuna').addEventListener('click', () =>{
  window.open('https://github.com/EDCB783/asuna-project', '_blank');
})

document.getElementById('dajji').addEventListener('click', () =>{
  window.open('https://github.com/EDCB783/dajji', '_blank');
})

document.getElementById('ags').addEventListener('click', () =>{
  window.open('https://www.agsauditores.com', '_blank');
})

document.getElementById('tic-tac-toe').addEventListener('click', () =>{
  window.open('https://github.com/EDCB783/3-en-raya', '_blank');
})


var form = document.getElementById("my-form");

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let btnSubmiter = e.submitter.id;
  let $ = e.target;
  if (btnSubmiter == "btn-submit") {
    let name = $.querySelector("#input-name").value;
    let email = $.querySelector("#input-email").value;
    let description = $.querySelector("#input-description").value;

    if(name != "" && email != "" && description != ""){
      document.getElementById("mf-name").value = name;
      document.getElementById("mf-email").value = email;
      document.getElementById("mf-msg").value = description;
      form.submit();
      $.reset();
    }
    else{
      alert("llene todos los campos")
    }
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




function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  var xhr = new XMLHttpRequest();
  xhr.open(form.method, event.target.action);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        var responseData = JSON.parse(xhr.responseText);
        if (responseData.hasOwnProperty('errors')) {
          status.innerHTML = responseData.errors.map(error => error.message).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      }
    }
  };

  xhr.onerror = function () {
    status.innerHTML = "Oops! There was a problem submitting your form";
  };

  xhr.send(data);
}

form.addEventListener("submit", handleSubmit);