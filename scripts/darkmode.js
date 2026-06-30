 const themeToggle = document.getElementById("light-mode-toggle");

    themeToggle.addEventListener("change", (event)=>{

     const isEnabled = event.target.checked;
        if (isEnabled) {
     console.log("Lightmode is enabled")
     document.body.classList.add("light-mode");

    } else { 
     console.log("Lightmode is disabled");
        document.body.classList.remove("light-mode");
    }
});    
