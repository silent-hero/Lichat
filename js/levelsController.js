app.controller("levelsController",["$scope", "userService", function($scope, userService)
{
    $scope.showLevels = false;
    
    $scope.checkIfAdmin = function()
    {
        if(userService.userLevel == 3)
        {
            $scope.showLevels = true;
        }
    };
    
    $scope.checkIfAdmin();
    
}]);