/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires 
 * @requires core/extend.js
 * @requires core/extend.js     
*/

/* constructor
@param string id
@param object options{
	@param Grid grid
}
*/
function ConfigTypeGridEditInline_View(id,options){
	options = options || {};	
	
	options.tagName = options.tagName || this.DEF_TAG_NAME;
	options.cmdSave = false;
	options.commandContainer = new ControlContainer(id+":cmd-cont","td")
	
	ConfigTypeGridEditInline_View.superclass.constructor.call(this,id,options);
	
	this.addControls();		
}
extend(ConfigTypeGridEditInline_View,ViewGridEditInlineAjx);
/*
ConfigTypeGridEditInline.prototype.addControls = function(){
}
*/
