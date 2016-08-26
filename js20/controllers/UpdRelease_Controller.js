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

function UpdRelease_Controller(app,options){
	options = options || {};
	options.listModelId = "UpdReleaseList_Model";
	options.objModelId = "UpdRelease_Model";
	UpdRelease_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addInsert();
	this.addUpdate();
	this.addDelete();
	this.addGetList();
	this.addGetObject();
		
}
extend(UpdRelease_Controller,ControllerDb);

			UpdRelease_Controller.prototype.addInsert = function(){
	UpdRelease_Controller.superclass.addInsert.call(this);
	var field;
	var options;
	
	var pm = this.getInsert();
	options = {};
	options.alias = "Код";options.primaryKey = true;options.autoInc = true;
	var field = new FieldInt("id",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Код программы";options.required = true;
	var field = new FieldInt("prog_id",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Релиз";
	var field = new FieldString("release",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Описание";
	var field = new FieldText("descr",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Имя файла";
	var field = new FieldString("file_name",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Хэш файла";
	var field = new FieldString("file_hash",options);
	
	pm.addField(field);
	
	options = {};
	options.alias = "Размер файла";
	var field = new FieldInt("file_size",options);
	
	pm.addField(field);
	
	pm.addField(new FieldInt("ret_id",{}));
	
	
}

			UpdRelease_Controller.prototype.addUpdate = function(){
	UpdRelease_Controller.superclass.addUpdate.call(this);
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
	options.alias = "Код программы";options.required = true;
	var field = new FieldInt("prog_id",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Релиз";
	var field = new FieldString("release",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Описание";
	var field = new FieldText("descr",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Имя файла";
	var field = new FieldString("file_name",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Хэш файла";
	var field = new FieldString("file_hash",options);
	
	pm.addField(field);
	
	
	options = {};
	options.alias = "Размер файла";
	var field = new FieldInt("file_size",options);
	
	pm.addField(field);
	
	
	
}

			UpdRelease_Controller.prototype.addDelete = function(){
	UpdRelease_Controller.superclass.addDelete.call(this);
	var options = {"required":true};
	
	var pm = this.getDelete();
	pm.addField(new FieldInt("id",options));
}

			UpdRelease_Controller.prototype.addGetList = function(){
	UpdRelease_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldInt("prog_id",options));
	pm.addField(new FieldString("release",options));
}

			UpdRelease_Controller.prototype.addGetObject = function(){
	UpdRelease_Controller.superclass.addGetObject.call(this);
	var options = {};
	
	var pm = this.getGetObject();
	pm.addField(new FieldInt("id",options));
}

		