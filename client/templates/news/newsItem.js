Template.newsItem.rendered = function () {
    /* ------------- News  -------------*/

    var slickOptions = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: '.club_prev',
        nextArrow: '.club_next',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite:true
                }
            },
            {
                breakpoint:600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                },  
            },
            {
                breakpoint:480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                },
            }
        ]
    };

    if (('#club_news').length){
        $('#club_news').slick(slickOptions);
    }

}
