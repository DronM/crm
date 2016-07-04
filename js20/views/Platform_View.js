/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function Platform_View(id,options){	

	Platform_View.superclass.constructor.call(this,id,options);
	
	var model = new Platform_Model({"data":options.modelDataStr});
	var contr = new Platform_Controller(options.app);
	
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":contr,
		"editInline":true,
		"commands":new GridCommandsAjx(),
		"head":new GridHead(id+"-grid:head",{
			"elements":[
				new GridRow(id+":grid:head:row0",{
					"elements":[
						new GridCellHead(id+":grid:head:id",{
							"columns":[
								new GridColumn({"field":model.getField("id")})
							],
							"sortable":true,
							"sort":"asc"							
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
extend(Platform_View,ViewAjx);
