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
			var HOST_NAME = '<xsl:value-of select="/document/model[@id='ModelVars']/row/basePath"/>';
			
			function setError(errStr){
				var n = nd("errorReporter");
				n.innerHTML=errStr;
				DOMHandler.addClass(n,"alert alert-danger");
				
				DOMHandler.removeClass(nd("submit_login"),"disabled");
			}
			
			//<![CDATA[
			function pageLoad(){
				DOMHandler.removeClass(nd("submit_login"),"disabled");
				nd("submit_login").onclick = function(e){
					var er_ctrl = nd("errorReporter");
					DOMHandler.removeClass(er_ctrl,"alert alert-danger");
					er_ctrl.innerHTML = "";
				
					e = EventHandler.fixMouseEvent(e);
					DOMHandler.addClass(e.target,"disabled");
					
					var user = nd("Logger_user").value;
					var pwd = nd("Logger_pwd").value;

					if (!user&&!pwd){
						setError("Не задано имя пользователя и пароль!");
						return false;
					}
					else if (!user){
						setError("Не задано имя пользователя!");
						return false;
					}
					else if (!pwd){
						setError("Не задан пароль!");
						return false;
					}										
					
					var contr = new User_Controller(new ServConnector(HOST_NAME));
					contr.run("login",{
						params:{"name":user,"pwd":pwd},
						func:function(){
							document.location.href=HOST_NAME;
						},
						err:function(resp,errCode,errStr){
							setError(errStr);
						}
					});
					
					return false;
				}
			}
			//]]>
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
				        <form role="form">
				            <fieldset>
				                <div class="form-group">
				                    <input id="Logger_user" class="form-control" placeholder="Пользователь (email)" name="email" type="email" autofocus="autofocus"></input>
				                </div>
				                <div class="form-group">
				                    <input id="Logger_pwd" class="form-control" placeholder="Пароль" name="password" type="password" value=""></input>
				                </div>
				                <!-- Change this to a button or input when using this as a form -->
				                <a id="submit_login" href="#" class="btn btn-lg btn-success btn-block">Войти</a>
				            </fieldset>
				        </form>
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		
		<!--waiting  -->
		<div id="waiting">
			<div>Ждите</div>
			<img src="{$BASE_PATH}img/loading.gif"/>
		</div>
		<script>
				var n = document.getElementById("Logger_user");
				if (n){
					if (document.activeElement.id!="Logger_pwd"){
						n.focus();
					}
				}
		</script>
		<!--ALL js modules -->
		<xsl:apply-templates select="/document/model[@id='ModelJavaScript']/row"/>
		<script>
			var dv = document.getElementById("waiting");
			if (dv!==null){
				dv.parentNode.removeChild(dv);
			}
		</script>
		 
	</body>
</html>		
</xsl:template>

</xsl:stylesheet>
