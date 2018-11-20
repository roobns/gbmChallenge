'use strict';

angular.module('app').controller('LoginCtrl', function($http, $filter, $firebaseObject, $state){
	var loginvm = this;
	

    loginvm.login = function() {
		firebase.auth().signInWithEmailAndPassword(loginvm.email, loginvm.password)
		.then(function(){
			$state.go('main');
		})
		.catch(function(error) {
			if(localStorage.getItem('tryout')){
				var a = Number(localStorage.getItem('tryout'));
				if(a == 3){
					alert('se ha equivocado más de 3 veces')
					//Aqui se puede mandar llamar un servicio de mensajeria para el administrador.
				} else {
					a += 1;
					localStorage.setItem('tryout', a)
				}
			} else {
				localStorage.setItem('tryout', 1)
			}
		  });
	};

	loginvm.checkuser = function(){
		var user = firebase.auth().currentUser;
		console.log(user)
			if(user){
				$state.go('main');
			}
	};
	loginvm.checkuser();
  
});