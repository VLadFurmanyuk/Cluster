$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive:[
            {
                breakpoint: 1025,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
                // breakpoint: 576,
                // settings:{
                //     rows: 2,
                //     slidesToShow: 1,
                //     slidesToScroll: 1,
                //
                // },
            }
        ]
    });
});
$(document).ready(function (){
    $('.slider-partners').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
                },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            }
        ]
    });
});
$(document).ready(function (){
    $('.single-item').slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 11000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
});

$(document).ready(function (){
    $('.mobile-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        rows: 2,
        // slidesPerRow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});