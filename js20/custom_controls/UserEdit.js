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
	
	UserEdit.superclass.constructor.call(this,id,options);
}
extend(UserEdit,EditRef);

/* Constants */


/* private members */

/* protected*/


/* public methods */

