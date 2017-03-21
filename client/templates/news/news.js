Template.index.helpers({
    newsData: function() {
        news = News.find({}, {sort: {updated: -1}}).fetch();

        if (news.length > 0) {
            var i = 0;
            var ts = "";

            news.forEach(function(n) {
                if (i % 2 === 0) {
                    news[i].img = "images/news/w_news_01.jpg";
                } else {
                    news[i].img = "images/news/c_news_01.jpg";
                };

                // Use first sentence of the content as Intro
                news[i].intro = n.content.substring(0,128) + "...";
                // Convert updated date into human readable format using moments.js
                news[i].date = moment(news[i].updated).format('DD MMM YYYY HH:mm');

                if (news[i].likes < 0 || news[i].likes === undefined) {
                    news[i].likes = 0;
                }

                i++;
            });
        }
        
        return news;
    },
});


Template.news.events({
   'click .like' : function(event) {
        var id = $(event.currentTarget).data( 'id' );
     
        //Increment likes count for the selected id
        News.update( { _id: id },  { $inc: { likes: 1 } });
    
  }
});