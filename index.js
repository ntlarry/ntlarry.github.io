function generate_iframe() {    
    var p = document.createElement('p');
    p.innerHTML="YOU JUST GOT RICKROLLED!";
    document.getElementById("div1").appendChild(p);
    var div = document.createElement('div');
    div.innerHTML="<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?t=42&autoplay=1'> </iframe>"
    document.getElementById("div1").appendChild(div);
}

// make sure that everything is loaded (only when everything is loaded, run the code)
window.addEventListener('load', (event) => {
    var videoPlayButtons = document.querySelectorAll("button")
    for (var i=0; i<videoPlayButtons.length; i++){
        videoPlayButtons[i].addEventListener('click', generate_iframe);
    }
});
