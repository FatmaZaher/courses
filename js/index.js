$(document).ready(function () {


    $('.navbar .menu-icon').click(function () {
        $('.body-overlay').fadeIn();
        $('.mobile-navbar').animate({
            left: '0'
        }, 800)
        $('.body-overlay').animate({
            opacity: '1',
        }, 800)
    })
    $('.mobile-head .close-icon, .body-overlay, .menu-list .menu-item').click(function () {
        $('.mobile-navbar').animate({
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


    $('.lectures .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        rtl: true,
        outplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            }

        }
    })

    AOS.init({
        duration: 1500,
        once: true,
    });
})

// document.addEventListener('DOMContentLoaded', function () {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth'
//     });
//     calendar.render();
// });
// $(function () {

//     $('#calendar').fullCalendar({
//         lang: 'ar'
//     });

// });
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2022-04-07',
        direction: 'rtl',
        locale: 'ar',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'All Day Event',
                start: '2022-04-01'
            },
            {
                title: 'Long Event',
                start: '2022-04-07',
                end: '2022-04-10'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2022-04-09T16:00:00'
            },
            {
                groupId: '999',
                title: 'Repeating Event',
                start: '2022-04-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2022-04-11',
                end: '2022-04-13'
            },
            {
                title: 'Meeting',
                start: '2022-04-12T10:30:00',
                end: '2022-04-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2022-04-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2022-04-12T14:30:00'
            },
            {
                title: 'Birthday Party',
                start: '2022-04-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2022-04-28'
            }
        ]
    });

    calendar.render();
});