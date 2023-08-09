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
        
        // Hide all sections
        $("section").hide();

        // Show the targeted section
        $($(this).attr("href")).show();
    });

    // Functionality for the next section buttons
    $(".btn-next-section").click(function(event) {
        // Prevent the default action (i.e., jumping to the section)
        event.preventDefault();
        
        // Hide all sections
        $("section").hide();

        // Show the targeted section
        $($(this).attr("href")).show();
    });
});
