<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<xsl:template match="/document">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="model[@id='ModelVars']"/>
		<xsl:apply-templates select="model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		<script>
		
			var application;
			
			function pageLoad(){
			
				<xsl:call-template name="initApp"/>
				
				var view = new Prototype_View("unique-id",{app:application});				
				view.toDOM();
			}
		</script>		
		<title>Прототипы контролов</title>
	</head>
	<body onload="pageLoad();">
		<xsl:apply-templates select="model[@id='ModelServResponse']/row"/>		

		    <div id="unique-id" class="container">
		    	<div class="panel col-lg-4">
		    		<div class="panel panel-header">Simple controls</div>
			    	<div id="unique-id:string"/>
			    	<div id="unique-id:pwd"/>		    	
			    	<div id="unique-id:int_constr"/>
			    	<div id="unique-id:float"/>
			    	<div id="unique-id:date"/>
			    	<div id="unique-id:date-time"/>
			    	<div id="unique-id:time"/>
			    	<div id="unique-id:phone"/>
			    	<div id="unique-id:checkbox"/>
			    	<div id="unique-id:select"/>
			    	<div id="unique-id:radio"/>
			</div>		    	
		    	<div class="panel col-lg-4">
		    		<div class="panel-header">Modal dialogs</div>
			    	<div id="unique-id:btn-modal-ok" caption="OK"/>
			    	<div id="unique-id:btn-modal-error" caption="Error"/>
			    	<div id="unique-id:btn-modal-warn" caption="Warning"/>
			    	<div id="unique-id:btn-modal-note" caption="Note"/>
		    	</div>
		    </div>
		
		<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
