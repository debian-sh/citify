var EventEmitter = require('event-emitter');
var Amygdala = require('amygdala');
var $ = require('jquery');

var store = new Amygdala({
    'config': {
        'apiUrl': 'http://localhost/api/v1',//url to API
        'idAttribute': 'url',
        'localStorage': true
    },
    'schema': {
        'articles': {
            'url': '', //to articles
            idAttribute: "id"
        }
    }
});

var Articles = new function() {

    var ee = new EventEmitter();
    this.on = ee.on.bind(ee);

    this.updateArticle = function(article_id, article_data) {
        $.ajax({
            method: "PATCH",
            url: '/api/' //url to api
            data: article_data
        }).success(function (){
            ee.emit('change');
        });
    };

    this.addArticle = function(article_data){
        var req = new XMLHttpRequest();
            req.onreadystatechange=function() {
                if (req.readyState===4 && req.status===201) {
                    ee.emit('change');
                } else {

                }
            };
            req.open("POST", "/api/", true);
            req.send(article_data);
    };

    this.getAricles = function(){
        return store.get('aritcles');
    };

    this.getAricleById = function(article_id){
        return store.find('aritcles', {'id': article_id});
    };

    this.deleteArticle = function(article_id){
        return store.remove('aritcles', {'id': "/"+article_id}).done(function(){
            ee.emit('change');
        });
    };

    this.articleCheck = function(some_value){
        ee.emit('new_emit', some_value);
    };
};

module.exports = Aritcles;