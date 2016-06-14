<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="ViewBase.html.xsl"/>

<xsl:template match="/">
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<xsl:apply-templates select="/document/model[@id='ModelVars']"/>
		<xsl:apply-templates select="/document/model[@id='ModelStyleSheet']/row"/>
		<link rel="icon" type="image/png" href="{$BASE_PATH}img/favicon.png"/>
		<script>
		
			var App;
			
			function pageLoad(){
			
				<xsl:call-template name="initApp"/>
				
				var view = new Login_View("Login",{
					host:App.getHost(),
					bsCol:App.getBsCol()
				});
			}
		</script>		
		<title>Катрэн+ CRM,авторизация</title>
	</head>
	<body onload="pageLoad();">
		<xsl:apply-templates select="/document/model[@id='ModelServResponse']/row"/>		

		    <div class="container">
			<div class="row">
			    <div class="col-md-4 col-md-offset-4">
				<div class="login-panel panel panel-default">
				    <div class="panel-heading">
				        <h3 class="panel-title">Личный кабинет</h3>
				    </div>
				    <div class="panel-body">
				    	<div id="error"></div>
				        <form role="form">
						<fieldset>
							<div id="user"/>
							<div id="pwd"/>
					                <div id="submit_login" class="btn btn-lg btn-success btn-block"/>
						</fieldset>
				        </form>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		
	<script>
			var n = document.getElementById("user");
			if (n){
				if (document.activeElement.id!="pwd"){
					n.focus();
				}
			}
	</script>
		
		<xsl:call-template name="initJS"/>
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
