var React = require('react');
var Router = require('react-router')
var Home = require('../Components/Home');
//db requests
var helpers = require('../Utilites/helpers');

var HomeContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	getInitialState() {
		return {
			email: '',
			password: '',
		};
	},

	// Pull login data
	// updateInputs: function(event) {
	// 	this.setState({[event.target.id]: event.target.value});
    //
	// },

	signupUser: function(event){
		event.preventDefault();

		helpers.signupUser(this.state.email, this.state.password);

		this.context.router.push({

			pathname:'/login',
			state:{
				email: this.state.email,
				password: this.state.password,
			},

		});

	},

	// link: function (){
	// 	this.context.router.push({
	// 		pathname: '/Login'
	// 	})
	// },

	// render: function() {
	// 	//console.log(this)
	// 	return (
	// 		<Home
	// 			updateInputs={this.updateInputs}
	// 			signupUser={this.signupUser}
	// 			link = {this.link}/>
	// 	)
	// }
});

module.exports = HomeContainer;
