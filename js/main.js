window.onload = () =>{
    document.getElementById('loader').style.visibility = 'Hidden'

}

let currentAnimation = ''; //vista actual
let previousAnimation = ''; //vista anterior 

const views = {
    HOME: 'HOME', 
    SKILLS:'SKILLS', 
    PROJECTS:'PROJECTS', 
    CONTACT:'CONTACT'
};

const CTRL_ANIMATION = (newView = '') =>  { 

    if(newView != currentAnimation){ 
        previousAnimation = currentAnimation;
        currentAnimation = newView;
    }
    else{
        return
    }

    const moveLeft = () => {
        let blockView =  document.getElementById(currentAnimation);
        blockView.style.left = 0;
        blockView.style.zIndex = 100
    }

    const moveRight = () => {
        if(previousAnimation == ''){
            return
        }
        let blockView =  document.getElementById(previousAnimation);
        blockView.style.left = "100vw";
        blockView.style.zIndex = 0;
    }

    moveLeft();
    moveRight();
};

document.getElementById('btn-home').addEventListener('click', ()=>{
    CTRL_ANIMATION(views.HOME);
});

document.getElementById('btn-skills').addEventListener('click', ()=>{
    CTRL_ANIMATION(views.SKILLS);
});

document.getElementById('btn-projects').addEventListener('click', ()=>{
    CTRL_ANIMATION(views.PROJECTS);
});

document.getElementById('btn-contact').addEventListener('click', ()=>{
    CTRL_ANIMATION(views.CONTACT);
});

CTRL_ANIMATION(views.CONTACT);

