sap.ui.define([
	"sap/ui/core/mvc/XMLView"
],

function (XMLView)
 {
	"use strict";

	//putting text and placing it into html
	XMLView.create({
		viewName: "Quickstart.view.App"
	}).then(function (oView){
		oView.placeAt("content");
	});
}
);