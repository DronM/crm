/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
/** Requirements
*/

/* constructor */
function PlatformList(id,options){	

	PlatformList.superclass.constructor.call(this,id,options);
	
	var model = new Platform_Model({"data":options.gridDataStr});
	
	this.addElement(new GridAjx(id+":grid",{
		"model":model,
		"controller":new Platform_Controller(options.app),
		"editInline":true,
		"commands":new GridCommandsAjx(),
		"head":new GridHead(id+"-grid:head",{
			"elements":[
				new GridRow(id+":grid:head:row0",{
					"elements":[
						new GridCellHead(id+":grid:head:id",{
							"columns":[
								{"field":model.getField("id"),
								"format":null
								}
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
extend(PlatformList,View);
