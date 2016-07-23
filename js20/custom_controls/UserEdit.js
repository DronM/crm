/* Copyright (c) 2016 
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
 * @requires 
 * @requires core/extend.js  
*/

/* constructor
@param string id
@param object options{

}
*/
function UserEdit(id,options){
	options = options || {};	
	
	options.winOptions = {"URLParams":"c=User_Controller&f=get_list&t=UserList&v=Child"};
	
	var contr = new User_Controller(options.app);	
	
	//autocomplete
	options.acMinLengthForQuery = 1;
	options.acModel = new UserList_Model();
	options.acPublicMethod = contr.getPublicMethod("complete");
	options.acPublicMethod.getField("ic").setValue("1");
	options.acLookupFields = [options.acModel.getField("id")];
	options.acResultFields = [options.acModel.getField("name")];
	
	UserEdit.superclass.constructor.call(this,id,options);
}
extend(UserEdit,EditRef);

/* Constants */


/* private members */

/* protected*/


/* public methods */

