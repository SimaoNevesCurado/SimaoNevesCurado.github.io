const hamburger =document.querySelector('.hamburger');
const navList =document.querySelector('nav ul');

hamburger.addEventListener('click', () =>{

    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

//dark - light modes

    const darkModeButton = document.getElementById('darkModeButton');
    const body= document.body;
    const enableDarkMode= ( )=> {
        body.classList.add('dark-mode');

    }

    const disableDarkMode= ()=> {
        body.classList.remove('dark-mode');

    }
    darkModeButton.addEventListener('change',()=>{

        if(darkModeButton.checked){
            disableDarkMode()
        }else{
            enableDarkMode();
        }

    });

    //multiple text

    const typed = new Typed('.multiple',{

        strings:['Simão Curado','Ana Alves'],
        typeSpeed: 100,
        backSpeed:100,
        backDelay:1000,
        loop:true

    });
