


app.controller("myctrl",function($scope){
	
	$scope.clr = "red";
	
	$scope.clickme = function()
	{
		$scope.clr = "blue";
		
		localStorage.setItem("title",$scope.clr);
		
	}
	
});



app.controller("myctrl2",function($scope){
	
	$scope.clr = localStorage.getItem("title");
	
	
	$scope.clickme = function()
	{
		
		$scope.clr = localStorage.getItem("title");
		
	}
	
});