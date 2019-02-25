function UserService($http) {

	let url = 'http://0.0.0.0:8882/rest/user'

	this.getUser = () => $http.get(url);

	this.updateUser = attribute => $http.post(url, attribute);

}

angular
	.module('app')
	.service('UserService', UserService);
