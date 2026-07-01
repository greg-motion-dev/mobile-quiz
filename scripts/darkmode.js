 const themeToggle = document.getElementById("light-mode-toggle");
 const lightdarkmode = document.querySelector('[data-js="light-dark-mode"]');
 

    themeToggle.addEventListener("change", (event)=>{

     const isEnabled = event.target.checked;
        if (isEnabled) {
     console.log("Lightmode is enabled")
     document.body.classList.add("light-mode");
     lightdarkmode.textContent = "Dark Mode";

    } else { 
     console.log("Lightmode is disabled");
        document.body.classList.remove("light-mode");
        lightdarkmode.textContent = "Light Mode";
    }
});    
