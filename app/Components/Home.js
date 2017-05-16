var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home(props) {

	console.log(props.getInitialState);



    return (

    	<div id = "Home">
            <h1>Turtle</h1>
        </div>

    	)
	};

module.exports = Home;
