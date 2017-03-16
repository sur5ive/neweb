Template.index.helpers({
    newsData: function() {
        var news = News.find({}).fetch();

        if (news.length > 0) {
            var i = 0;
            news.forEach(function(n) {
                news[i].subtitle = "Alampeakiri siia";
                news[i].intro = n.content.split(".")[0];
                news[i].likes = 45;
                i++;
            });
        }
        
        return news;
    },
});

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
        console.log(slickOptions);
        $('#club_news').slick(slickOptions);
    }
}