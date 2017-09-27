angular.module('app').service('homeSrv', function() {
    let article = [
        {
            "id": 0,
            "title": "ARTICLE TITLE",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": '../img/article_1@2x.png'
        },
        {
            "id": 1,
            "title": "ARTICLE TITLE",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "../img/article_2@2x.png"
        },
        {
            "id": 2,
            "title": "ARTICLE TITLE",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "../img/article_3@2x.png"
        },
        {
            "id": 3,
            "title": "ARTICLE TITLE",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "image": "../img/article_4@2x.png"
        }
    ]

    this.getArticles = () => {
        return article
    }

})