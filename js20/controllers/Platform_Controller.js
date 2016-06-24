/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires core/ControllerDb.js
*/

/* constructor
@param string id
@param object options{

}
*/

function Platform_Controller(app,options){
	options = options || {};
	options.listModelId = "Platform_Model";
	options.objModelId = "Platform_Model";
	Platform_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(Platform_Controller,ControllerDb);

			Platform_Controller.prototype.addInsert = function(){
	Platform_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	var pm = this.getInsert();
	options = {};
	options.alias = "Идентификатор";
	var field = new FieldString("id",options);
	
	pm.addField(field);
	
	
}

			Platform_Controller.prototype.addUpdate = function(){
	Platform_Controller.superclass.addUpdate.call(this);
	var field;
	var options;	
	var pm = this.getUpdate();
	options = {};
	options.alias = "Идентификатор";
	var field = new FieldString("id",options);
	
	pm.addField(field);
	
	
	field = new FieldString("old_id",{});
	pm.addField(field);
	
	
}

			Platform_Controller.prototype.addDelete = function(){
	Platform_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldString("id",options));
}

			Platform_Controller.prototype.addGetList = function(){
	Platform_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldString("id",options));
}

			Platform_Controller.prototype.addGetObject = function(){
	Platform_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldString("id",options));
}

		