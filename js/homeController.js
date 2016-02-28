app.controller("homeController", function($scope, $location, $http)
{
    
    var token = JSON.parse(localStorage["token"]); //Reikia padaryt kad token butu bendras ir is visur pasiekiamas
    
    $scope.logout = function()
    {
        var data =
        {
            token: token        
        };
        
        $http.post("server/logout.php", data)
        .success(function(response)
        {
            console.log(response);
            localStorage.clear();
            $location.path("/login");
        })
        .error(function(error)
        {
            console.error(error);
        });
    };
    
});

