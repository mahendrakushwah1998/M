    const iconToggle=document.querySelector('.toggle_icon');
const navbarMenu=document.querySelector('.menu');
const menuLinks=document.querySelectorAll('.menu_link');
const iconClose=document.querySelector('.close_icon');

iconToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
})

iconClose.addEventListener('click',()=>{
    navbarMenu.classList.remove('active');
})

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click',()=>{
        navbarMenu.classList.remove('active');
    })
})

// change bachground header//

function scrollHeader() {
    const header=document.getElementById('header');
    this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll',scrollHeader);

//hero type effect//

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>FrontEnd Developer</strong>')
    .pauseFor(2500)
    .start();



    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrolly = window.pageYOffset;

        sections.forEach(section =>{
            const sectionHeight = section.offsetTop - 50;

            let sectionTop=section.getAttribute('id');

            if(scrolly > sectionTop && scrollY <= sectionTop +sectionHeight){
                document.querySelector('.menu a[href *='+ sectionTop +']').classList.add('active-link');
            }else{
                document.querySelector('.menu a[href *='+ sectionTop +']').classList.remove('active-link');
            }
        })
    }
    window.addEventListener('scroll',scrollActive);

    const pages=document.querySelectorAll('.page');
    const resume=document.querySelectorAll('.resume');

    function resumeActive(){
        const scrollY= window.pageYOffset;

        pages.forEach(page =>{
            const sectionHeight =page.offsetHeight;
            const sectionTop = page.offsetTop;

            let sectionId = page.getAttribute('id');
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.resume_tabs a[href *=' + sectionId +']').classList.add('current');
            }else{
                document.querySelector('.resume_tabs a[href *=' + sectionId +']').classList.remove('current');

            }
        })
    }
    window.addEventListener('scroll',resumeActive);


    let modelBtns=document.querySelectorAll('.services_button'),
    modelViews = document.querySelectorAll(".services_model"),
    modelClose=document.querySelectorAll('.model_close_icon');


    let model =function(modelClick){
        modelViews[modelClick].classList.add('active-model');
    }

    modelBtns.forEach((modelBtn,i)=>{
        modelBtn.addEventListener('click',()=>{
            model(i)
        })
    })

    modelClose.forEach((el =>{
        el.addEventListener('click',()=>{
            modelViews.forEach(modelViews =>{
                modelViews.classList.remove('active-model')
            })
        })
    }))





    const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}
