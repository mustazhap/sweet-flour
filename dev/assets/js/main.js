// Get the modal
var modal = document.getElementsByClassName('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

function cuurentBlock(n){
    show(indexC = n);
}

function show(indexC){
    modal[indexC].style.display = "flex";

    span[indexC].onclick = function() {
        modal[indexC].style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal[indexC]) {
            modal[indexC].style.display = "none";
        }
    };
}

var blockIndex = 1;
showClock(blockIndex);


function currentClock(n){
    showClock(blockIndex = n);
}

function showClock(n){
    var r;
    var texts = document.getElementsByClassName("bupp");

    var buttons = document.getElementsByClassName("butt");


    if(n > buttons.length){
        blockIndex = 1;
    }
    if(n < 1){
        blockIndex = buttons.length;
    }

    for(r=0; r < buttons.length; r++){
        texts[r].style.display = "none";
    }

    for(r=0; r < buttons.length; r++){
        buttons[r].className = buttons[r].className.replace("nav-active","");
    }

    texts[blockIndex-1].style.display = "flex";
    buttons[blockIndex-1].className+= " nav-active";


}



$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
