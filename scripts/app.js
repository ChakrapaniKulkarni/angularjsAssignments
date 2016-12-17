(function(){
	'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject=["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
	var itemsAdder=this;
	itemsAdder.itemsToBuy=ShoppingListCheckOffService.getItemsToBuy();	
	itemsAdder.buy=function(itemIndex){
		ShoppingListCheckOffService.buyItem(itemIndex);
	};
}


AlreadyBoughtController.$inject=["ShoppingListCheckOffService"]	;
function AlreadyBoughtController(ShoppingListCheckOffService){

	var alreadyBought=this;
	alreadyBought.alreadyBoughtItems=ShoppingListCheckOffService.getAlreadyBoughtitems();
}

function ShoppingListCheckOffService(){
	var service=this;
	
	var itemsToBuyList=[{ name: "cookies", quantity: 10 },{ name: "Lays chips", quantity: 5 }
			,{ name: "crackers", quantity: 6 },{ name: "Parle-G", quantity: 10 }
			,{ name: "Kurkure", quantity: 10 }];
	//get All items
	var alreadyBoughtList=[];
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
}

})();