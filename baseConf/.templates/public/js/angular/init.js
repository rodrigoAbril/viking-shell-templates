${projectName}App = angular.module('${projectName}App', []);

var htmlBody = document.getElementsByTagName("body")[0]

if (htmlBody.getAttribute("ng-app") == null) {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['${projectName}App']);
	});
};