function generate_iframe() {    
    var p = document.createElement('p');
    p.innerHTML="YOU JUST GOT RICKROLLED! hAHAHAHAHa";
    document.getElementById("div1").appendChild(p);
    var div = document.createElement('div');
    div.innerHTML="<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?t=42&autoplay=1'> </iframe>"
    document.getElementById("div1").appendChild(div);
    document.getElementById("text").innerHTML = "This section will continue to go into detail about the psychological basis of Enneagram tests specifically in relation to Enneagram Type 6 individuals. In Enneagram theory, which is considered by many to have <span class='b'>never</span> been a wholly scientifically-based theory, Type 6 individuals are those who are <span class='b'>gonna give</span> their all no matter what <span class='b'>you</span> or anyone say. In corporate situations, they climb <span class='b'>up</span> the ladder by being loyal to their friends and their colleagues. Those people are characterized by how they <span class='b'>never gonna let</span> everyone, including <span class='b'>you</span>, be attacked or put <span class='b'>down</span>. However, they can be very obstinate, <span class='b'>never</span> changing their mind once they have decided on something. They are <span class='b'>gonna</span> keep going even if everyone else decides to <span class='b'>turn around</span>, which means that they may not always be logical <span class='b'>and</span> calm. However, they will never <span class='b'>desert you</span>. Please scroll down for an example of the characterization of Enneagram Type 6."
    window.scrollBy(0, 400);
}

// Detect if safari, if not, will break. Source: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

if(isSafari === false){
    document.body.innerHTML = "";
    document.open();
    document.write("Only Safari is supported for now. Sorry for the inconvenience!");
    document.close();
}
else{
    // make sure that everything is loaded (only when everything is loaded, run the code)
    window.addEventListener('load', (event) => {
        var videoPlayButtons = document.querySelectorAll("button")
        for (var i=0; i<videoPlayButtons.length; i++){
            videoPlayButtons[i].addEventListener('click', generate_iframe);
        }
    });
}
