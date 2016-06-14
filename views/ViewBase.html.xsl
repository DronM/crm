<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="index.html.xsl"/>
			
<xsl:template match="/">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
		<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		<title>Катрэн+, личный кабинет</title>
		<script>
			var App;
			
			function pageLoad(){				
				<xsl:call-template name="initApp"/>
				
				App.setBsCol(("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-"));
				App.setWinClass(WindowFormDD);//ChildForm
				App.readConstants();
				
				<xsl:call-template name="initMainMenu"/>
			}
		</script>
	</head>
	<body onload="pageLoad();" class="layout_2_1 blue3">
		<div class="page-header">
			<img id="logo" src="{$BASE_PATH}img/logo.png"/>
		</div>		
		<ul id="mainMenu" class="nav nav-tabs">		
		</ul>
		<div id="content" class="panel-group">
		</div>
		<div id="footer">
		</div>
		
		<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>

<xsl:template name="initJS">
	<!-- bootstrap resolution-->
	<div id="users-device-size">
	  <div id="xs" class="visible-xs"></div>
	  <div id="sm" class="visible-sm"></div>
	  <div id="md" class="visible-md"></div>
	  <div id="lg" class="visible-lg"></div>
	</div>

	<!--waiting  -->
	<div id="waiting">
		<div>Ждите</div>
		<img src="{$BASE_PATH}img/loading.gif"/>
	</div>
	
	<!--ALL js modules -->
	<xsl:apply-templates select="/document/model[@id='ModelJavaScript']/row"/>
	
	<script>
		var dv = document.getElementById("waiting");
		if (dv!==null){
			dv.parentNode.removeChild(dv);
		}
	</script>
</xsl:template>


<xsl:template name="initApp">
	var App = new AppCRM({
		host:'<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>',
		servVars:{
			"version":'<xsl:value-of select="/document/model[@id='ModelVars']/row/scriptId"/>',
			"roleId":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_id"/>',
			"roleDescr":'<xsl:value-of select="/document/model[@id='ModelVars']/row/role_descr"/>',
			"userId":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_id"/>',
			"userName":'<xsl:value-of select="/document/model[@id='ModelVars']/row/user_name"/>'				
		}				
	});
</xsl:template>

<xsl:template name="initMainMenu">
	App.setOnViewClose(function(res){					
		if (MainView!=undefined){
			MainView.removeDOM();
			delete MainView;
		}
	});
	
	<xsl:apply-templates select="/document/model[@id='MainMenu_Model']"/>					
</xsl:template>

</xsl:stylesheet>
