var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;



//Components
//basic structure to add components
//var Add = require('../Components/Add');

//Containers
//basic structure to add containers
//var AddContainer = require('../Containers/AddContainer');

var Routes = React.createClass({

	 render: function() {

	 	return (
			<Router history={hashHistory}>
				//<Route path= "/" component={HomeContainer}/>
                //^^Basic Routing^^

			</Router>
		)

	}

});

module.exports = Routes;
