//"use strict";
var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
	return document.getElementById(id);
}

//Display sales by quarter on click
var sales_quarter_click = function (){	
	textDisplay="";	
	var quarterSales = 0;
	var tmpQuarter;
	textDisplay += "Sales by Quarter\n";
	//calculate and print Sales By Quarter
	for(var quarter=0; quarter<r1.length; quarter++){
		tmpQuarter = quarter+1;//to fix 0 index
		quarterSales = r1[quarter] + r2[quarter] + r3[quarter] + r4[quarter] + r5[quarter];
		textDisplay += "Q" + tmpQuarter + ": " + quarterSales + "\n";
	}
	$("results").value = textDisplay;
}

//Display sales by region on click
var sales_region_click = function (){
	textDisplay="";
	var regionSales=0;
	var tmpRegion;
	textDisplay += "Sales by Region\n";
	//calculate and print sales by regionSales
	for (var region=0; region<5; region++){
		regionSales=0;
		tmpRegion= region+1;
		textDisplay += "Region " + tmpRegion +": ";
		//nest for loop for quarter
		for (var quarter=0; quarter<4; quarter++){
			if(region==0){
				regionSales = parseFloat(regionSales)+ parseFloat(r1[quarter]);
			}
			if(region==1){
				regionSales = parseFloat(regionSales) + parseFloat(r2[quarter]);
			}
			if(region==2){
				regionSales = parseFloat(regionSales) + parseFloat(r3[quarter]);
			}
			if(region==3){
				regionSales = parseFloat(regionSales) + parseFloat(r4[quarter]);
			}
			if(region==4){
				regionSales = parseFloat(regionSales) + parseFloat(r5[quarter]);
			}
		}
		textDisplay += regionSales + "\n";
	}
	$("results").value = textDisplay;
}

//Display Total Sales on click
var sales_Total = function ()
{
	var total = 0;
	textDisplay="Total sales: ";
	for (var region=0; region<5; region++){
		//nest for loop for quarter
		for (var quarter=0; quarter<4; quarter++){
			if(region==0){
				total += r1[quarter];
			}
			if(region==1){
				total += r2[quarter];
			}
			if(region==2){
				total += r3[quarter];
			}
			if(region==3){
				total += r4[quarter];
			}
			if(region==4){
				total += r5[quarter];
			}
		}		
	}
	textDisplay += total;
	$("results").value = textDisplay;
}

window.onload = function () {
	$("show_quarter").onclick = sales_quarter_click;
	$("show_region").onclick = sales_region_click;	
	$("show_total").onclick = sales_Total;
}



