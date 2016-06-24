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

function Platform_Model(options){
	id = 'Platform_Model';
	options = options || {};
	
	options.fields = {};
	
			
		
	
	superclass.constructor.call(this,id,options);
}
extend(Platform_Model,ModelXML);

