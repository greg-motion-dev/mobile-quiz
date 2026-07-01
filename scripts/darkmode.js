 const themeToggle = document.getElementById("light-mode-toggle");
 const darkLightModeSwitch = document.querySelector('[data-js="dark-light-switch"]'); 
 
    themeToggle.addEventListener("change", (event)=>{

     const isEnabled = event.target.checked;
        if (isEnabled) {
     console.log("Lightmode is enabled")
     document.body.classList.add("light-mode");
     darkLightModeSwitch.textContent = "Dark Mode";

    } else { 
     console.log("Lightmode is disabled");
        document.body.classList.remove("light-mode");
        darkLightModeSwitch.textContent = "Light Mode";
    }
});    
