function dropdown(x) {
    document.getElementById(x).classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Jquery ver. 마우스 오버 효과가 묶여서 나타남
// mouseover --> arrow on
// $('.trend-card a').mouseenter(function() {
//     $('.trend-card .arrow').text(' >');
// });
// // mouseleave --> arrow off
// $('.trend-card a').mouseleave(function() {
//     $('.trend-card .arrow').text('');
// });

// vanilaJS ver. 마우스 오버 효과가 묶여서 나타남
// var link = document.getElementsByClassName('trend-card-link');
// function arrowOn() {
//     for (var i=0; i<link.length; i++) {
//         link[i].innerHTML = "read more >";
//     }
// }

function arrowOn(event) {
    event.target.innerHTML = "read more ⇢";
}

function arrowOff(event) {
    event.target.innerHTML = "read more";
}