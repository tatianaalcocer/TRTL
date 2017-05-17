var axios = require('axios');
var UserModel = require('../../models/User')

var helpers = {

    //functions to call databases and minupulate data

	signupUser: function (email, password) {

		var user = new UserModel(email, password)

			return axios.post('/Signup', user)
				.then(function(response) {

					var email = response.data.email;
					var password = response.data.password;

			}.bind(this));

	},

	loginUser: function (email, password) {

		return new Promise(function(resolve,reject){
			var user = {
				email: email,
				password: password
			};

			return axios.post('/login', user)
				.then(function(response){

					//console.log('helpers line 33: ' + JSON.stringify(response));
					if(response.data.login === true){
						localStorage.setItem('_id', response.data._id);
						resolve("Storage Is Set");
					}else{
						resolve("User is null No User by that email");
						console.warn("No user or email")
					}

			}.bind(this))


		});
	},

	isAuthenticated: false

}

module.exports = helpers;
