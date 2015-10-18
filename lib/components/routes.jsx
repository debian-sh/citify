var Citify = require("./app.jsx");
var React = require("react");
var Router = require("react-router");

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
	<Route path="/" handler={Citify.App}>
		<DefaultRoute name="article-list" handler={Citify.ArticleList}/>
		<Route path="/latest" name="articles-latest" handler={Citify.ArticleList}/>
		<Route path="/top" name="articles-top" handler={Citify.ArticleListTop}/>
		<Route path="/article/:id" name="article-view" handler={Citify.ArticleView}/>
	</Route>
);

module.exports = routes;