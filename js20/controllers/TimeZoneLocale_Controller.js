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

function TimeZoneLocale_Controller(app,options){
	options = options || {};
	options.listModelId = "TimeZoneLocale_Model";
	TimeZoneLocale_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addGetList();
		
}
extend(TimeZoneLocale_Controller,ControllerDb);

			TimeZoneLocale_Controller.prototype.addGetList = function(){
	TimeZoneLocale_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldString("descr",options));
	pm.addField(new FieldString("name",options));
	pm.addField(new FieldInt("hour_dif",options));
}

		