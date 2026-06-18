 const themeToggle = document.getElementById("dark-mode-toggle");

    themeToggle.addEventListener("change", (event)=>{

     const isEnabled = event.target.checked;
        if (isEnabled) {
     console.log("Darkmode is enabled")
     document.body.classList.add("dark-mode");

    } else { 
     console.log("Lightmode is enabled");
        document.body.classList.remove("dark-mode");
    }
});    
