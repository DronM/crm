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

function UpdProgram_Controller(app,options){
	options = options || {};
	options.listModelId = "UpdProgramList_Model";
	options.objModelId = "UpdProgram_Model";
	UpdProgram_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(UpdProgram_Controller,ControllerDb);

			UpdProgram_Controller.prototype.addInsert = function(){
	UpdProgram_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.alias = "Код";options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Наименование";
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Описание";
	var field = new FieldText("descr_full",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			UpdProgram_Controller.prototype.addUpdate = function(){
	UpdProgram_Controller.superclass.addUpdate.call(this);
	var field;
	var options;	
	var pm = this.getUpdate();
	options = {};
	options.alias = "Код";options.primaryKey = true;options.autoInc = true;options.required = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	
	field = new FieldInt("old_id",{});
	pm.addField(field);
	
	options = {};
	options.alias = "Наименование";
	var field = new FieldString("descr",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Описание";
	var field = new FieldText("descr_full",options);
	
	pm.addField(field);
	
	
	
}

			UpdProgram_Controller.prototype.addDelete = function(){
	UpdProgram_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			UpdProgram_Controller.prototype.addGetList = function(){
	UpdProgram_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("descr",options));
}

			UpdProgram_Controller.prototype.addGetObject = function(){
	UpdProgram_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		