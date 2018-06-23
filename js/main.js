$(document).ready(function() {
    $('.Date-picker').datepicker({
    });
    $('.Time-picker').mdtimepicker();
    $('body').on('click', '.Client-profile-nav-col-toggle', function(event) {
        event.preventDefault();
        /* Act on the event */
        var target = $('.Client-profile-nav-col');
        if(target.hasClass('active')) {
            target.removeClass('active');
        } else {
            target.addClass('active');
        }
    });
    $('#topNavbar > .navbar-nav > li').hover(function (event) {
        event.preventDefault();
        $(this).find('.Hover-home-menu').stop(true, true).delay(100).fadeIn(400);
    }, function () {
        $(this).find('.Hover-home-menu').stop(true, true).delay(100).fadeOut(400);
    });
});
window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("active");
}
window.toggleOverlay = function() {
    var toggler = document.getElementById('Overlay-menu-toggler');
    var topNavbar = document.getElementById('topNavbar');
    toggler.classList.toggle('open');
    topNavbar.classList.toggle('closed');
    $('.Overlay-menu').toggleClass('active');
}
