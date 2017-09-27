angular.module('app').service('articleSrv', function() {
    let recentStory = [
        {
            "id": 0,
            "title": "ARTICLE TITLE",
            "author": "Author Name",
            "picture": "../img/profile_pic.png",
            "date": "Date Posted",
            "intro": "You may be receiving questions from your patients and colleagues about the ZIKA virus and the use of ultrasound. To help support you, please find below links to a few associations and webinars that provide information and guidance to Healthcare Professionals about ZIKA and ultrasound.",
            "p1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            "middle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor consequat. Duis aute irure dolor in.",
            "still": "../img/zika.png",
            "p2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
            "facebook": "#",
            "linkedin": "#",
            "twitter": "#",
            "email": "#",
            "more": "#"
        }
    ]

    let recentArticles = [
        {
            "id": 1,
            "image": "../img/article_4.png",
            "title": "RECENT ARTICLE TITLE",
            "synopsis": "You may be receiving questions from your patients and colleagues"
        },
        {
            "id": 2,
            "image": "../img/article_4.png",
            "title": "RECENT ARTICLE TITLE",
            "synopsis": "You may be receiving questions from your patients and colleagues"
        },
        {
            "id": 3,
            "image": "../img/article_4.png",
            "title": "RECENT ARTICLE TITLE",
            "synopsis": "You may be receiving questions from your patients and colleagues"
        },
    ]

    this.getStory = () => {
        return recentStory[recentStory.length-1]
    }

    this.getRecentArticles = () => {
        return recentArticles
    }

})