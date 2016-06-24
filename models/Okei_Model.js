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

function Okei_Model(options){
	id = 'Okei_Model';
	options = options || {};
	
	options.fields = {};
	
			
				
					
			
					
			
			
		
	
	superclass.constructor.call(this,id,options);
}
extend(Okei_Model,ModelXML);

