$(document).ready(function () {





    $('.navbar .menu div').click(function () {
        $('.body-overlay').fadeIn();
        $('.mobile').animate({
            left: '0'
        }, 800)
        $('.body-overlay').animate({
            opacity: '1',
        }, 800)
    })
    $('.mobile-off > div, .body-overlay').click(function () {
        $('.mobile').animate({
            left: '-100%'
        }, 800)

        $('.body-overlay').animate({
            opacity: '0',
        })
        $('.body-overlay').fadeOut(800);
    })

    $('.mobile-menu .services-plus .btn-link').on('click', function () {
        $('.mobile-menu .btn-link i').not('.services-plus .btn-link i').removeClass('fas fa-minus').addClass('fas fa-plus', 1000);
        $('.services-plus .btn-link i').toggleClass('fas fa-minus').toggleClass('fas fa-plus', 1000);
    })

    $(".input-image input").on("change", function (event) {
        $(this).parent().parent().addClass("uploadded");
    
        const output = $(this).siblings(".preview-image");
        const result = URL.createObjectURL(event.target.files[0]);
        output.attr("src", result);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
      });
    AOS.init({
        duration: 1500,
        once: true,
    });
})

