document.getElementById("monBoutton").addEventListener('click', () => {
    let features = "menubar=nà, scrollbar=yes, width=500, height=500, status=no, toolbar=no"
   let myWindow = window.open('https://www.youtube.com/','', features);
    myWindow.resizeTo(800, 400);
    myWindow.moveTo(500,500);

    document.getElementById('close').addEventListener('click', () => myWindow.close())
})

