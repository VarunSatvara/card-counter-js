var count = 0;

function addcard() {
    count++;
    var mydiv = document.getElementById("content");
    mydiv.insertAdjacentHTML("beforeend", '<div class="col s12 m4" id="item' + count + '"><div class="card" > <div class="card-image"> <img src="images/sample-1 (1).jpg"> <span class="card-title">Card Title</span> </div><div class="card-content"> <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p></div><div class="card-action"> <a href="#" onclick="removecard(' + count + ')" class="grey darken-4 btn-remove">Delete' + count + '</a> </div></div></div>');
    console.log(mydiv);
}

function removecard(index) {
    var getItem = document.getElementById("item" + index);
    getItem.remove();
}