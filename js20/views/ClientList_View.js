/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function ClientList_View(id,options){	

	ClientList_View.superclass.constructor.call(this,id,options);
	
	var model = new ClientList_Model({"data":options.modelDataStr});
	var contr = new Client_Controller(options.app);
	
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":false,
		"editWinClass":Client_Form,
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
						new GridCellHead(id+":grid:head:inn",{
							"columns":[
								new GridColumn({"field":model.getField("inn")})
							]
						}),											
						new GridCellHead(id+":grid:head:order_email",{
							"columns":[
								new GridColumn({"field":model.getField("order_email")})
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
extend(ClientList_View,ViewAjx);
