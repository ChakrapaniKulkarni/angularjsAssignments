(function(){
	'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject=["ShoppingListCheckOffService","$scope"];
function ToBuyController(ShoppingListCheckOffService,$scope){
	var itemsAdder=this;

	itemsAdder.itemsToBuy=ShoppingListCheckOffService.getItemsToBuy();
	$scope.showMessageToBuy=ShoppingListCheckOffService.getMessageForToBuy();
	itemsAdder.buy=function(itemIndex){
		ShoppingListCheckOffService.buyItem(itemIndex);
		$scope.showMessageToBuy=ShoppingListCheckOffService.getMessageForToBuy();
	};
}


AlreadyBoughtController.$inject=["ShoppingListCheckOffService","$scope"]	;
function AlreadyBoughtController(ShoppingListCheckOffService,$scope){

	var alreadyBought=this;

	alreadyBought.alreadyBoughtItems=ShoppingListCheckOffService.getAlreadyBoughtitems();
	$scope.showMessageAlreadyBought=ShoppingListCheckOffService.getMessageForAlreadyBought();
	
}

function ShoppingListCheckOffService(){
	var service=this;
	
	var itemsToBuyList=[{ name: "cookies", quantity: 10 },{ name: "Lays chips", quantity: 5 }
			,{ name: "crackers", quantity: 6 },{ name: "Parle-G", quantity: 10 }
			,{ name: "Kurkure", quantity: 10 }];
	//get All items
	var alreadyBoughtList=[];
	var messageFlag=false;
	service.getItemsToBuy=function(){
		return itemsToBuyList;
	};

	service.buyItem=function(itemIndex){
		alreadyBoughtList.push(itemsToBuyList[itemIndex]);
		itemsToBuyList.splice(itemIndex,1);
	}

	service.getAlreadyBoughtitems=function(){
		return alreadyBoughtList;
	};

	service.getMessageForToBuy=function(){
		if(itemsToBuyList.length===0){
			return true;
		}
	}
	service.getMessageForAlreadyBought=function(){
		if(alreadyBoughtList.length===0){
			return true;
		}
	};
}

})();