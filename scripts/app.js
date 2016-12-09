(function(){
	'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope,$filter){
	var comma = ',';
	$scope.checkItems=function(){
		var lunchItemsStr=$scope.lunchItems;
		var lunchItemslength;
		if(lunchItemsStr!=undefined &&lunchItemsStr!=""){
			lunchItemslength=splitString(lunchItemsStr,comma);
			if (lunchItemslength>3) {
				$scope.alertMessage="Too much!";
			}else{
				$scope.alertMessage="Enjoy!";
			}	
		}else{
			$scope.alertMessage="Please enter data first";
		}
	};
}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings.length;
}

})();