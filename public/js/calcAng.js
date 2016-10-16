var calc = angular.module('calc', []);

calc.controllers


calc.controller('calc', function($scope, $http) {
	$scope.calculate = function() {
		//var inp1 = $scope.inp1;
		//var inp2 = $scope.inp2;
		var eq =  $('#calc-screen').val();
		
		var regex = new RegExp("^(\\d+[\\+\\-\\*\\/]{1})+\\d+$");//new RegExp('^[\d\.]{0,1}+[\+\-\*\/]{1}+\d') ;"^[0-9]+[.]?[0-9]{0,1}$"
		//alert(regex.test(eq));
		//var eq =  $scope.result;
		if(eq== undefined){
		}
		else if(regex.test(eq))
		{
		$http({
			method : "POST",
			url : '/calculateIt',
			data : {
				"eq" : eq
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
			}
			else
				{
				var result = data.res;
				if(result == null)
				{
					$scope.result = 'NA';
				}
				else $scope.result = data.res;
		}
	});
	}
		else{
			
			alert("Invalid calculation string");
			
		}
		}
	})