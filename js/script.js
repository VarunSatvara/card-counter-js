function add() {
    var rdiv = document.createElement('div');
    rdiv.className = "row";

    var sdiv = document.createElement('div');
    sdiv.classList.add("col", "s4")
    rdiv.appendChild(sdiv);

    var mydiv = document.createElement('div');
    mydiv.classList.add("card", "larger");
    mydiv.setAttribute("id", "cardadd")
    sdiv.appendChild(mydiv);


    var mydiv1 = document.createElement('div');
    mydiv.appendChild(mydiv1);
    mydiv1.classList.add("card-image", "waves-effect", "waves-block", "waves-light");

    mydiv1.innerHTML = '<img class="activator" src="images/sample-1 (1).jpg">';

    var mydiv2 = document.createElement('div');
    mydiv2.classList.add("card-content");
    mydiv2.setAttribute("id", "mydiv");
    mydiv.appendChild(mydiv2);

    var myp = document.createTextNode('le I am a very simple card. I am good at containing small bits of information. I am convenient because I require little. Although humans are part of nature, human activity is often understood as a separate category from other natural.');
    mydiv2.appendChild(myp);

    var mydiv3 = document.createElement('div');
    mydiv3.classList.add("card-action");
    mydiv.appendChild(mydiv3);
    mydiv3.innerHTML = '<a class="waves-effect waves-light btn" onclick="remove()">DELETE</a>';
    document.getElementsByClassName('row')[0].appendChild(sdiv);
    console.log(rdiv);
}

function remove() {
    var elem = document.getElementById("mydiv");
    elem.parentNode.removeChild(elem);
}