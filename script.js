window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sticky-navbar").style.padding = "10px 10px";
    } else {
        document.getElementById("sticky-navbar").style.padding = "20px 10px";
    }
}

$(document).ready(function() {
    
    // Functionality for the navbar links
    $("#sticky-navbar a.nav-link").click(function(event) {
        
        // Prevent the default action (i.e., jumping to the section)
        event.preventDefault();
        
        // Smoothly scroll to the top
        $("html, body").animate({ scrollTop: 0 }, "slow");

        // Hide all sections
        $("section").hide();

        // Show the targeted section
        $($(this).attr("href")).show();
    });

    // Functionality for the next section buttons
    $(".btn-next-section").click(function(event) {
        
        // Prevent the default action (i.e., jumping to the section)
        event.preventDefault();
        
        // Smoothly scroll to the top
        $("html, body").animate({ scrollTop: 0 }, "slow");

        // Hide all sections
        $("section").hide();

        // Show the targeted section
        $($(this).attr("href")).show();
    });

     // Collapse navbar when a link is clicked
     $("#sticky-navbar a.nav-link").on("click", function() {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-toggler').trigger('click');
        }
    });

    // Collapse navbar when clicking outside of it
    $(document).on('click', function(event){
        var $navbar = $("#sticky-navbar");
        
        // Check if click was triggered on or within #navbar
        if(!$(event.target).closest($navbar).length) {
            // Check if navbar is expanded
            if($navbar.find('.navbar-collapse').hasClass('show')) {
                $navbar.find('.navbar-toggler').trigger('click');
            }
        }
    });
});
