/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function UserList_View(id,options){	

	UserList_View.superclass.constructor.call(this,id,options);
	
	var model = new UserList_Model({"data":options.modelDataStr});
	var contr = new User_Controller(options.app);
	
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":false,
		"editWinClass":User_Form,
		"commands":new GridCommandsAjx(),
		"head":new GridHead(id+"-grid:head",{
			"elements":[
				new GridRow(id+":grid:head:row0",{
					"elements":[
						new GridCellHead(id+":grid:head:id",{
							"columns":[
								new GridColumn({"field":model.getField("id")})
							],
							"sortable":true
						}),
						new GridCellHead(id+":grid:head:name",{
							"columns":[
								new GridColumn({"field":model.getField("name")})
							],
							"sortable":true,
							"sort":"asc"							
						}),
						new GridCellHead(id+":grid:head:email",{
							"columns":[
								new GridColumn({"field":model.getField("email")})
							]
						}),											
						new GridCellHead(id+":grid:head:phone_cel",{
							"columns":[
								new GridColumn({"field":model.getField("phone_cel"),"mask":this.getApp().getPhoneEditMask()})
							],
							"sortable":true
						})						
					]
				})
			]
		}),
		"autoRefresh":false,
		"focus":true,
		"app":options.app
	}));	
	


}
extend(UserList_View,ViewAjx);
