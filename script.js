window.onscroll = function () {
    handleScroll();
};

function handleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sticky-navbar").style.padding = "10px 10px";
    } else {
        document.getElementById("sticky-navbar").style.padding = "20px 10px";
    }
}

$(document).ready(function () {



    // Functionality for the next section buttons
    $(".btn-next-section").click(function (event) {

        // Prevent the default action (i.e., jumping to the section)
        event.preventDefault();

        // Smoothly scroll to the top
        $("html, body").animate({
            scrollTop: 0
        }, "slow");

        // Hide all sections
        $("section").hide();

        // Show the targeted section
        $($(this).attr("href")).show();
    });

    // Collapse navbar when a link is clicked
    $("#sticky-navbar a.nav-link").on("click", function () {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-toggler').trigger('click');
        }
    });

    // Collapse navbar when clicking outside of it
    $(document).on('click', function (event) {
        var $navbar = $("#sticky-navbar");

        // Check if click was triggered on or within #navbar
        if (!$(event.target).closest($navbar).length) {
            // Check if navbar is expanded
            if ($navbar.find('.navbar-collapse').hasClass('show')) {
                $navbar.find('.navbar-toggler').trigger('click');
            }
        }
    });
});

$(document).ready(function() {
    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('nav-item-active');
        $(this).addClass('nav-item-active');
    });
});



// jQuery example for toggling content
$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(this).siblings(".project-details").toggleClass("hidden");
        const arrow = $(this).find(".arrow");
        if (arrow.text() === "▼") {
            arrow.text("▲");
        } else {
            arrow.text("▼");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const collToggleButtons = document.querySelectorAll('.collapsible-toggle');

    collToggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.innerHTML = '&#9660;'; // Downward arrow when content is hidden
            } else {
                content.style.display = 'block';
                arrow.innerHTML = '&#9650;'; // Upward arrow when content is shown
            }
        });
    });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Calculate offset top including margin (in this example, 50px for the navbar)
            var targetOffsetTop = $(hash).offset().top;  // Adjust this value as needed

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: targetOffsetTop
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
