/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function ConfigTypeList_View(id,options){	

	ConfigTypeList_View.superclass.constructor.call(this,id,options);
	
	var self = this;
	
	//this.addControl(new ErrorControl(id+":error",{"app":options.app}));
	


	//Error Control
	//this.setErrorControl(this.getControl("error"));		
}
extend(ConfigTypeList_View,ViewAjx);
