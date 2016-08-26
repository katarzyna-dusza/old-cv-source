function showElement() {
    $('.hide-element').each(function(i) {
        var bottomOfElement = $(this).offset().top + $(this).outerHeight();
        var bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > bottomOfElement) {
            $(this).animate({'opacity':'1'}, 500);
        }
    });
}

function showTopScroll() {
    var bottomOfAboutMeElement = $('.about-me').offset().top + $('.about-me').outerHeight();
    var bottomOfWindow = $(window).scrollTop() + $(window).height();

    if (bottomOfWindow > bottomOfAboutMeElement) {
        return $('.scroll').css("visibility", "visible");
    }

    return $('.scroll').css("visibility", "hidden");

}

function goToAbout() {
    var aboutElement = $('.about');
    scrollToElement(aboutElement);
}

function goToSkills() {
    var skillsElement = $('.skills');
    scrollToElement(skillsElement);
}

function goToExperience() {
    var workElement = $('.work');
    scrollToElement(workElement);
}

function goToTop() {
    var top = $('body');
    scrollToElement(top);
}

function scrollToElement(element) {
    $('html, body').animate({
        scrollTop: element.offset().top
    }, 1000);
}

$(document).ready(function() {
    $(window).on('scroll', function() {
        showElement();
        showTopScroll();
    });
});