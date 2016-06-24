/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires core/extend.js
 * @requires core/ModelXML.js
*/

/* constructor
@param string id
@param object options{

}
*/

function SMSTemplateList_Model(options){
	id = 'SMSTemplateList_Model';
	options = options || {};
	
	options.fields = {};
	
			
			
			
			
			
		
	
	superclass.constructor.call(this,id,options);
}
extend(SMSTemplateList_Model,ModelXML);

