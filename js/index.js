$(document).ready(function () {





    $(window).resize(function(){
        $(".slider .owl-carousel").height($(document).width());
        // $(".slider .owl-stage-outer").height($(document).width());
        // $(".slider .owl-stage").height($(document).width());
    });




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


    if ($(".container > div").is("#quastions")) {
        var limitPerPage = 7;
    }
    if ($(".container > div").is("#blog")) {
        var limitPerPage = 10;
    }
    if ($(".container > div").is("#projects")) {
        var limitPerPage = 5;
    }
    var numberOfItems = $('#quastions .list-group, #blog .list-group, #projects .list-group').length; // Get total number of the items that should be paginated
    // var limitPerPage = 7; // Limit of items per each page
    $('#quastions .list-group:gt(' + (limitPerPage - 1) + ')').fadeOut(); // fadeOut all items over page limits (e.g., 5th item, 6th item, etc.)
    $('#blog .list-group:gt(' + (limitPerPage - 1) + ')').fadeOut(); // fadeOut all items over page limits (e.g., 5th item, 6th item, etc.)
    $('#projects .list-group:gt(' + (limitPerPage - 1) + ')').fadeOut(); // fadeOut all items over page limits (e.g., 5th item, 6th item, etc.)
    var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
    $(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

    // Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
    for (var i = 2; i <= totalPages; i++) {
        $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
    }

    // Add next button after all the page numbers  
    $(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true><svg><use href='../icons.svg#left-arrow'></use></svg></span></a></li>");

    $(".loadingio-spinner-ellipsis-pnn9yxltcdm").css("display", "block");
    setTimeout(function () {
        $('.loadingio-spinner-ellipsis-pnn9yxltcdm').fadeOut();
    }, 2000);
    setTimeout(function () {
        $('.blog-con').fadeIn();
        $('.quastions-con').fadeIn();
        $('.projects-con').fadeIn();
    }, 2500);

    // Function that displays new items based on page number that was clicked
    $(".pagination li.current-page").on("click", function () {
        $('.blog-con').fadeOut();
        $('.quastions-con').fadeOut();
        $('.projects-con').fadeOut();
        $(".loadingio-spinner-ellipsis-pnn9yxltcdm").css("display", "block");
        setTimeout(function () {
            $('.loadingio-spinner-ellipsis-pnn9yxltcdm').fadeOut();
        }, 2000);
        setTimeout(function () {
            $('.blog-con').fadeIn();
            $('.quastions-con').fadeIn();
            $('.projects-con').fadeIn();
        }, 2500);
        // Check if page number that was clicked on is the current page that is being displayed
        if ($(this).hasClass('active')) {
            return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
        } else {
            var currentPage = $(this).index(); // Get the current page number
            $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
            $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
            $("#quastions .list-group").fadeOut(); // fadeOut all items in loop, this case, all the list groups
            $("#blog .list-group").fadeOut(); // fadeOut all items in loop, this case, all the list groups
            $("#projects .list-group").fadeOut(); // fadeOut all items in loop, this case, all the list groups
            var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

            // Loop through total items, selecting a new set of items based on page number
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#quastions .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#blog .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#projects .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
            }
        }
    });
    // Function to navigate to the next page when users click on the next-page id (next page button)
    $("#next-page").on("click", function () {
        $('.blog-con').fadeOut();
        $('.quastions-con').fadeOut();
        $('.projects-con').fadeOut();

        $(".loadingio-spinner-ellipsis-pnn9yxltcdm").css("display", "block");
        setTimeout(function () {
            $('.loadingio-spinner-ellipsis-pnn9yxltcdm').fadeOut();
        }, 2000);

        setTimeout(function () {
            $('.blog-con').fadeIn();
            $('.quastions-con').fadeIn();
            $('.projects-con').fadeIn();
        }, 2500);

        var currentPage = $(".pagination li.active").index(); // Identify the current active page
        // Check to make sure that navigating to the next page will not exceed the total number of pages
        if (currentPage === totalPages) {
            return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
        } else {
            currentPage++; // Increment the page by one
            $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
            $("#quastions .list-group").fadeOut(); // fadeOut all items in the pagination loop
            $("#blog .list-group").fadeOut(); // fadeOut all items in the pagination loop
            $("#projects .list-group").fadeOut(); // fadeOut all items in the pagination loop
            var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

            // Loop through total items, selecting a new set of items based on page number
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#quastions .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#blog .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#projects .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
            }

            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
        }
    });

    // Function to navigate to the previous page when users click on the previous-page id (previous page button)
    $("#previous-page").on("click", function () {
        $('.blog-con').fadeOut();
        $('.quastions-con').fadeOut();
        $('.projects-con').fadeOut();


        $(".loadingio-spinner-ellipsis-pnn9yxltcdm").css("display", "block");
        setTimeout(function () {
            $('.loadingio-spinner-ellipsis-pnn9yxltcdm').fadeOut();
        }, 2000);
        setTimeout(function () {
            $('.blog-con').fadeIn();
            $('.quastions-con').fadeIn();
            $('.projects-con').fadeIn();
        }, 2500);
        var currentPage = $(".pagination li.active").index(); // Identify the current active page
        // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
        if (currentPage === 1) {
            return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
        } else {
            currentPage--; // Decrement page by one
            $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
            $("#quastions .list-group").fadeOut(); // fadeOut all items in the pagination loop
            $("#blog .list-group").fadeOut(); // fadeOut all items in the pagination loop
            $("#projects .list-group").fadeOut(); // fadeOut all items in the pagination loop
            var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

            // Loop through total items, selecting a new set of items based on page number
            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#quastions .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#blog .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
                $("#projects .list-group:eq(" + i + ")").fadeIn(); // fadeIn items from the new page that was selected
            }

            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
        }
    });



    var maxField = 10; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = `<div class="d-flex justify-content-center align-items-center mb-3">
    <select class="form-select select-1"
        >
        <option selected>عرض الخدمات</option>
        <option value="1">دورة مياه</option>
        <option value="2">كنب</option>
        <option value="3">ستائر</option>
    </select>
    <span>55 ر.س</span>
    <select class="form-select select-2"
        aria-label="Default select">
        <option selected>عدد</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
</div>`; //New input field html 
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function () {
        //Check maximum number of input fields
        if (x < maxField) {
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });

    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function (e) {
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });


    $('.order-box [data-toggle="pill"]').on('click', function () {
        $(this).removeClass('active')
    })


    // $('.message-btn').click(function () {
    //     $('.success-submit').fadeIn();
    //     setTimeout(function () {
    //         $('.success-submit').fadeOut();
    //     }, 2000);
    //     $('.btn-spinner').fadeIn().css("display", "flex");
    //     setTimeout(function () {
    //         $('.spinner-border').fadeOut();
    //     }, 2000);

    // })

    // $(".message-form").validate();

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='./images/arrow-up.png'>", "<img src='./images/arrow-up.png'>"],
        rtl: true,
        items: 1
    })
    // $('.packages .owl-carousel').owlCarousel({
    //     nav: true,
    //     navText: ["<img src='../../images/arrow-up.png'>", "<img src='../../images/arrow-up.png'>"],
    //     rtl: true,
    //     // items:2,
    //     margin: 10,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //         },
    //         600: {
    //             items: 2,
    //             nav: false
    //         },
    //         1000: {
    //             items: 4,
    //             nav: true,
    //             loop: false
    //         }
    //     }
    // })
    AOS.init({
        duration: 1500,
        once: true,
    });
})

