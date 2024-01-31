/*---------------------------
:: Navbar on Scroll
-----------------------------*/
var scrollTop = 0;

window.addEventListener(
    "scroll",
    function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > scrollTop) {

            document.getElementById("navbar").classList.add("fixed-top", "scrolled");
        } else {

            document.getElementById("navbar").classList.remove("fixed-top", "scrolled");
        }
    },
    false
);



AOS.init();