angular.module("authModule").component("logout", {
	templateUrl : 'app/authModule/logout/logout.component.html',
	controller : function(authService, $location, $cookies) {
		var vm = this;
//		vm.showButton = $cookies.get('id');
//		var showLogoutButton = function() {
//			vm.showButton = $cookies.get('id');
//		};
		
		vm.hideNavbar = function(){
			if(authService.getToken().id){
				return false;
			}
			else{
				return false;
			}
		}
		
		vm.logout = function() {
			authService.logout().then(function(res) {
				vm.hideNavbar();
				$location.path('/')

			})

		}
	},
	controllerAs : 'vm'
});