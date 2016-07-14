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

function MailForSending_Controller(app,options){
	options = options || {};
	options.listModelId = "MailForSendingList_Model";
	MailForSending_Controller.superclass.constructor.call(this,app,options);	
	
	//methods
	this.addGetList();
		
}
extend(MailForSending_Controller,ControllerDb);

			MailForSending_Controller.prototype.addGetList = function(){
	MailForSending_Controller.superclass.addGetList.call(this);
	var options = {};
	
	var pm = this.getGetList();
	pm.addField(new FieldInt("id",options));
	pm.addField(new FieldDateTime("date_time",options));
	pm.addField(new FieldString("from_addr",options));
	pm.addField(new FieldString("from_name",options));
	pm.addField(new FieldString("to_addr",options));
	pm.addField(new FieldString("to_name",options));
	pm.addField(new FieldString("reply_addr",options));
	pm.addField(new FieldString("reply_name",options));
	pm.addField(new FieldText("body",options));
	pm.addField(new FieldString("sender_addr",options));
	pm.addField(new FieldString("subject",options));
	pm.addField(new FieldBool("sent",options));
	pm.addField(new FieldDateTime("sent_date_time",options));
	pm.addField(new FieldEnum("email_type",options));
}

		