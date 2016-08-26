var app = angular.module("myApp", []);

// 首页信息
app.controller("myOne", function($scope, $http) {
    $http.get("json/list.json").success(
        function(response) {
            $scope.info = response.info;
        }
    );
});

// 联系人信息
app.controller("contacts", function($scope, $http) {
    $http.get("json/names.json").success(
        function(response) {
            $scope.names = response.names;
        }
    )
});