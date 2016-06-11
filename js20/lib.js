
function extend(Child,Parent){var F=function(){};F.prototype=Parent.prototype;Child.prototype=new F();Child.prototype.constructor=Child;Child.superclass=Parent.prototype;} 
var CommonHelper={format:function(str,params){var r="";for(var i=0;i<params.length;i++){r+=str.replace("%",params[i]);}
return r;},numberFormat:function(number,decimals,dec_point,thousands_sep){var i,j,kw,kd,km;if(isNaN(decimals=Math.abs(decimals))){decimals=2;}
if(dec_point==undefined){dec_point=",";}
if(thousands_sep==undefined){thousands_sep=".";}
i=parseInt(number=(+number||0).toFixed(decimals))+"";if((j=i.length)>3){j=j%3;}else{j=0;}
km=(j?i.substr(0,j)+thousands_sep:"");kw=i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+thousands_sep);kd=(decimals?dec_point+Math.abs(number-i).toFixed(decimals).replace(/-/,0).slice(2):"");return km+kw+kd;},nd:function(x,docum){if(docum==undefined){docum=window.document;}
return(x)?docum.getElementById(x):null;},isIE:function(){return(navigator.appName=="Microsoft Internet Explorer");},getBrowser:function(){var res="unknown";if(navigator.userAgent.indexOf("Chrome")!=-1){res="chrome";}
else if(navigator.userAgent.indexOf("Opera")!=-1){res="opera";}
else if(navigator.userAgent.indexOf("Firefox")!=-1){res="firefox";}
else if((navigator.userAgent.indexOf("MSIE")!=-1)||(!!document.documentMode==true)){res="ie";}
return res;},createXHR:function(){var request_o;if(isIE()){request_o=new ActiveXObject("Microsoft.XMLHTTP");}
else{request_o=new XMLHttpRequest();}
return request_o;},isEmpty:function(x,p){for(p in x)return!1;return!0;},isArray:function(o){return(Object.prototype.toString.call(o)==='[object Array]');},clone:function(obj){if(null==obj||"object"!=typeof obj)return obj;if(obj instanceof Date){var copy=new Date();copy.setTime(obj.getTime());return copy;}
if(obj instanceof Array){var copy=[];for(var i=0,len=obj.length;i<len;++i){copy[i]=clone(obj[i]);}
return copy;}
if(obj instanceof Object){var copy={};for(var attr in obj){if(obj.hasOwnProperty(attr))copy[attr]=clone(obj[attr]);}
return copy;}},uniqid:function(){var chars='0123456789abcdef'.split('');var uuid=[],rnd=Math.random,r;uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';uuid[14]='4';for(var i=0;i<36;i++)
{if(!uuid[i])
{r=0|rnd()*16;uuid[i]=chars[(i==19)?(r&0x3)|0x8:r&0xf];}}
return uuid.join('');},array2json:function(arr){var parts=[];var is_list=(Object.prototype.toString.apply(arr)==='[object Array]');for(var key in arr){var value=arr[key];if(typeof value=="object"){if(is_list)parts.push(array2json(value));else parts.push('"'+key+'":'+array2json(value));}else{var str="";if(!is_list)str='"'+key+'":';if(typeof value=="number")str+=value;else if(value===false)str+='false';else if(value===true)str+='true';else str+='"'+value+'"';parts.push(str);}}
var json=parts.join(",");if(is_list)return'['+json+']';return'{'+json+'}';},json2obj:function(json_string){return eval("("+json_string+")");},} 
var DOMHelper={elem:function(tagName,opts){var e=document.createElement(tagName);opts=opts||{};for(var i in opts){e.setAttribute(i,opts[i]);}
return(e);},setAttr:function(node,attrName,attrValue){if(node){node.setAttribute(attrName,attrValue);}},getAttr:function(node,name){if(node){return node.getAttribute(name);}},delAttr:function(node,name){if(node){return node.removeAttribute(name);}},addAttr:function(node,name,val){this.setAttr(node,name,val);},delNode:function(node){if(node&&node.parentNode)
node.parentNode.removeChild(node);},delNodesOnClass:function(classVal){this.delNodes("class",classVal)},delNodesOnAttr:function(attrName,attrVal){var body=document.getElementsByTagName("body")[0];var list=this.getElementsByAttr(attrVal,body,attrName);for(var i=0;i<list.length;i++){this.delNode(list[i]);}},getElementsByAttr:function(classStr,node,attrName,uniq,tag){tag=tag||"*";var node=node||document;var list=node.getElementsByTagName(tag);var length=list.length;var classArray=classStr.split(/\s+/);var classes=classArray.length;var result=new Array();for(var i=0;i<length;i++){if(uniq&&result.length>0)break;for(var j=0;j<classes;j++){if(((attrName=='class')&&(list[i].className!=undefined&&typeof list[i].className=='string')&&(list[i].className.search('\\b'+classArray[j]+'\\b')!=-1))||((list[i].attributes!=undefined)&&(list[i].getAttribute(attrName)!=undefined)&&(list[i].getAttribute(attrName).search('\\b'+classArray[j]+'\\b')!=-1))){result.push(list[i]);break;}}}
return result;},swapClasses:function(node,new_class,old_class){node.className=node.className.replace(old_class,new_class);},addClass:function(node,classToAdd){var re=new RegExp("(^|\\s)"+classToAdd+"(\\s|$)","g");if(re.test(node.className))return;node.className=(node.className+" "+classToAdd).replace(/\s+/g," ").replace(/(^ | $)/g,"");},delClass:function(node,classToRemove){var re=new RegExp("(^|\\s)"+classToRemove+"(\\s|$)","g");node.className=node.className.replace(re,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"");},hasClass:function(node,classToCheck){return(node)?(node.className&&new RegExp("(^|\\s)"+classToCheck+"(\\s|$)").test(node.className)):null;},delAttr:function(node,attr){if(node.attributes&&node.attributes.length>0){node.removeAttribute(attr);}},getParentByTagName:function(node,tagName){var p=node.parentNode;if(p){var tn=tagName.toLowerCase();while(p&&p.nodeName.toLowerCase()!=tn){p=p.parentNode;}
return((p&&p.nodeName.toLowerCase()==tn)?p:null);}},getElementIndex:function(n){var i=0;while(n=n.previousSibling){if(n.nodeType===1){i++;}}
return i;},xmlDocFromString:function(txt){var xmlDoc;if(window.DOMParser){xmlDoc=(new DOMParser()).parseFromString(txt,"text/xml");}
else{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async=false;xmlDoc.loadXML(txt);}
return xmlDoc;}} 
var DateHelper={time:function(){return new Date();},strtotime:function(date_str){var SHORT_YEAR_LEN=8;var FULL_YEAR_LEN=10;var time=new Array(0,0,0);var date=new Array(0,0,0);var time_part='',date_part='';var TIME_DELIM=':';var DATE_DELIM='.';var PARTS_DELIM=' ';var str_replace_delim=function(str,delim_ar,new_delim){if(str&&str.length){for(var i=0;i<delim_ar.length;i++){while(str.search(delim_ar[i])>=00){str=str.replace(delim_ar[i],new_delim);}}}
return str;};var date_str_copy=str_replace_delim(date_str,new Array(/T/),PARTS_DELIM);var separ=date_str_copy.indexOf(PARTS_DELIM);if(separ>=0){time_part=date_str_copy.substr(separ+1);date_part=date_str_copy.slice(0,separ);}
else{date_part=date_str_copy;}
date_part=str_replace_delim(date_part,new Array(/\//,/-/,/:/),DATE_DELIM);time_part=str_replace_delim(time_part,new Array(/ /,/-/,/\//),TIME_DELIM);if(date_part.length>0){date=date_part.split(DATE_DELIM);}
if(time_part.length>0){time=time_part.split(TIME_DELIM);}
if(date[2].length==2){date[2]=parseInt(date[2],10)+2000;}
if(time[2]==undefined){time[2]=0;}
date[1]=(date[1]==0)?0:date[1]-1;return new Date(date[2],date[1],date[0],time[0],time[1],time[2]);},format:function(dt,fs){add_zero=function(arg){var s=arg.toString();return((s.length<2)?"0":"")+s;};if(!dt){dt=new Date();}
if(!fs){fs=DateHelper.FORMAT_STR;}
var s;s=fs.replace(/d/,this.add_zero(dt.getDate()));s=s.replace(/j/,dt.getDate());s=s.replace(/F/,DateHelper.MON_LIST[dt.getMonth()]);s=s.replace(/m/,this.add_zero(dt.getMonth()+1));s=s.replace(/n/,dt.getMonth()+1);s=s.replace(/Y/,dt.getFullYear());s=s.replace(/y/,dt.getFullYear()-2000);s=s.replace(/H/,this.add_zero(dt.getHours()));s=s.replace(/i/,this.add_zero(dt.getMinutes()));s=s.replace(/s/,this.add_zero(dt.getSeconds()));s=s.replace(/u/,this.add_zero(dt.getMilliseconds()));return s;}} 
var EventHelper={add:function(obj,evType,fn,capture){if(typeof obj=='string'){obj=$(obj);}
if(obj&&obj.addEventListener){obj.addEventListener(evType,fn,capture);return true;}else if(obj&&obj.attachEvent){var r=obj.attachEvent("on"+evType,fn);return r;}else{return false;}},del:function(obj,evType,fn,useCapture){if(obj.removeEventListener){obj.removeEventListener(evType,fn,useCapture);return true;}else if(obj.detachEvent){var r=obj.detachEvent("on"+evType,fn);return r;}else{throw new Error(this.DEL_ERR);}},fixMouseEvent:function(e){e=e||window.event;if(e.target===undefined){e.target=e.srcElement;}
if(e.pageX==null&&e.clientX!=null){var html=document.documentElement;var body=document.body;e.pageX=e.clientX+(html&&html.scrollLeft||body&&body.scrollLeft||0)-(html.clientLeft||0);e.pageY=e.clientY+(html&&html.scrollTop||body&&body.scrollTop||0)-(html.clientTop||0);}
if(!e.which&&e.button){e.which=e.button&1?1:(e.button&2?3:(e.button&4?2:0));}
return(e);},fixKeyEvent:function(e){e=e||window.event;if(e.target===undefined){e.target=e.srcElement;}
e.keyCode=(e.charCode)?e.charCode:e.keyCode;return(e);}}; 
function ServConnector(host,script){this.setHost(host);this.setScript(script||this.DEF_SCRIPT);}
ServConnector.prototype.DEF_SCRIPT="index.php";ServConnector.prototype.m_host;ServConnector.prototype.m_script;ServConnector.prototype.m_http;ServConnector.prototype.getHost=function(){return this.m_host;}
ServConnector.prototype.setHost=function(host){this.m_host=host;}
ServConnector.prototype.getScript=function(){return this.m_script;}
ServConnector.prototype.setScript=function(script){this.m_script=script;}
ServConnector.prototype.sendRequest=function(isGet,params,async,onReturn){var request_id=CommonHelper.uniqid();async=(async==undefined)?true:async;var self=this;var xhr=CommonHelper.createXHR();var ready_func=function(){if(xhr.readyState==4){var status=xhr.status;var error_n=(status>=200&&status<300)?0:status;var error_s;var resp;var RESP_MODEL_ID="ServResponse";if(error_n==0){try{var rt=this.getResponseHeader('content-type');if(tr.indexOf("text/xml")>=0){var resp=new ServRespXML(xhr.responseXML);var m=new ModelServRespXML(resp.getModelData(RESP_MODEL_ID));error_n=m.result;error_s=m.descr;}
else if(tr.indexOf("json")>=0){var resp=new ServRespJSON(xhr.responseText);var m=new ModelServRespJSON(resp.getModelData(RESP_MODEL_ID));error_n=m.result;error_s=m.descr;}
else{resp=xhr.responseText;}}
catch(e){error_n=-1;error_s=e.message;}}
else{error_s=xhr.responseText;}
if(onReturn){onReturn(error_n,error_s,resp,request_id);}}};if(async){xhr.onreadystatechange=ready_func;}
var param_encode=function(param){if(param instanceof Date){return DateHelper.format(param,"Y-m-dTH:i:s");}
else{return encodeURIComponent(param);}}
if(isGet){var paramStr="";for(var par_id in params){paramStr+=(paramStr=="")?"?":"@";paramStr+=param_encode(params[par_id]);}
xhr.open("get",this.getHost()+
this.getScript()+paramStr,async);xhr.send(null);}
else{var fd=new FormData();for(var par_id in params){fd.append(par_id,param_encode(params[par_id]));}
xhr.open("POST",this.getHost()+this.getScript(),async);xhr.send(fd)}
if(!async){ready_func.call(this);}
return request_id;}
ServConnector.prototype.sendPost=function(params,async,onReturn){return this.sendRequest(false,params,async,onReturn);}
ServConnector.prototype.sendGet=function(params,async,onReturn){return this.sendRequest(true,params,async,onReturn);} 
function ServResp(resp){this.m_models={};this.setResponse(resp);}
ServResp.prototype.m_resp;ServResp.prototype.m_models;ServResp.prototype.setResponse=function(resp){this.m_resp=resp;}
ServResp.prototype.getModelData=function(id){if(!this.m_models[id]){throw new Error(CommonHelper.format(this.ERR_NO_MODEL,Array(id)));}
return this.m_models[id];} 
function ServRespXML(resp){ServRespXML.superclass.constructor.call(this,resp);}
ServRespXML.prototype.TAG_MODEL="model";ServRespXML.prototype.setResponse=function(resp){ServRespXML.superclass.call(this,resp);this.m_models=resp.documentElement.getElementsByTagName(this.TAG_MODEL);} 
function PublicMethod(id){this.setId(id);this.m_fields={};}
PublicMethod.prototype.m_id;PublicMethod.prototype.m_fields;PublicMethod.prototype.fieldExists=function(id){return(this.m_fields[id]!=undefined);}
PublicMethod.prototype.getId=function(){return this.m_id;}
PublicMethod.prototype.setId=function(id){this.m_id=id;}
PublicMethod.prototype.addField=function(field){this.m_fields[field.getId()]=field;}
PublicMethod.prototype.checkField=function(id){if(!this.fieldExists(id)){throw new Error(CommonHelper.format(this.ER_NO_FIELD,Array(id,this.getId())));}
return true;}
PublicMethod.prototype.getField=function(id){this.checkField(id);return this.m_fields[id];}
PublicMethod.prototype.getFields=function(){return this.m_fields;}
PublicMethod.prototype.setFieldValue=function(id,value){this.checkField(id);this.m_fields[id].setValue(value);}
PublicMethod.prototype.getFieldValue=function(id){return this.getField(id).getValue();} 
function Controller(id,servConnector){this.setId(id);this.setServConnector(servConnector);this.m_publicMethods={};}
Controller.prototype.m_servConnector;Controller.prototype.m_id;Controller.prototype.m_publicMethods;Controller.prototype.publicMethodExists=function(id){return(this.m_publicMethods[id]!=undefined);}
Controller.prototype.addPublicMethod=function(pm){this.m_publicMethods[pm.getId()]=pm;}
Controller.prototype.checkPublicMethod=function(id){if(!this.publicMethodExists(id)){throw new Error(CommonHelper.format(this.ER_NO_METHOD,Array(id,this.getId())));}
return true;}
Controller.prototype.getPublicMethod=function(id){this.checkPublicMethod(id);return this.m_publicMethods[id];}
Controller.prototype.getServConnector=function(){return this.m_servConnector;}
Controller.prototype.setServConnector=function(servConnector){this.m_servConnector=servConnector;}
Controller.prototype.getId=function(){return this.m_id;}
Controller.prototype.setId=function(id){this.m_id=id;}
Controller.prototype.run=function(methId,options){options.get=options.get||true;options.async=options.async||true;options.fail=options.fail||function(resp,errCode,errStr){WindowMessage.show({"text":errStr,"type":WindowMessage.TP_ER});};var pm=this.getPublicMethod(methId);var params={};for(var id in pm.getFields()){var f=pm.getField(id);if(!f.isEmpty){params[id]=f.getValue();}}
var conn=this.getServConnector();var con_func=(options.get)?conn.sendGet:conn.sendPost;this.m_resp=null;var self=this;con_func.call(conn,params,options.async,function(errCode,errStr,resp,requestId){if(errCode!=0){options.fail.call(options.cont,resp,errCode,errStr);}
else if(options.func){self.m_resp=requestId;options.func.call(options.cont,resp,requestId);}
else{self.m_resp=resp;}},this);return this.m_resp;} 
function ControllerDb(id,servConnector,options){ControllerDb.superclass.constructor.call(this,id,servConnector);options=options||{};if(options.listModelId){this.setListModelId(options.listModelId);}
if(options.objModelId){this.setObjModelId(options.objModelId);}}
extend(ControllerDb,Controller);ControllerDb.prototype.METH_INSERT="insert";ControllerDb.prototype.METH_UPDATE="update";ControllerDb.prototype.METH_GET_OBJ="get_object";ControllerDb.prototype.METH_GET_LIST="get_list";ControllerDb.prototype.METH_DELETE="delete";ControllerDb.prototype.METH_COMPLETE="complete";ControllerDb.prototype.PARAM_VIEW_VALUE="ViewXML";ControllerDb.prototype.PARAM_CONTROLLER="c";ControllerDb.prototype.PARAM_METH="f";ControllerDb.prototype.PARAM_VIEW="v";ControllerDb.prototype.PARAM_OLD_ID="old_id";ControllerDb.prototype.PARAM_COUNT="count";ControllerDb.prototype.PARAM_FROM="from";ControllerDb.prototype.PARAM_IC="ic";ControllerDb.prototype.PARAM_MID="mid";ControllerDb.prototype.PARAM_ORD_FIELDS="ord_fields";ControllerDb.prototype.PARAM_ORD_DIRECTS="ord_directs";ControllerDb.prototype.PARAM_COND_FIELDS="cond_fields";ControllerDb.prototype.PARAM_COND_SGNS="cond_sgns";ControllerDb.prototype.PARAM_COND_VALS="cond_vals";ControllerDb.prototype.PARAM_COND_ICASE="cond_ic";ControllerDb.prototype.PARAM_SGN_EQUAL="e";ControllerDb.prototype.PARAM_SGN_LESS="l";ControllerDb.prototype.PARAM_SGN_GREATER="g";ControllerDb.prototype.PARAM_SGN_LESS_EQUAL="le";ControllerDb.prototype.PARAM_SGN_GREATER_EQUAL="ge";ControllerDb.prototype.PARAM_SGN_LIKE="lk";ControllerDb.prototype.PARAM_SGN_NOT_EQUAL="ne";ControllerDb.prototype.PARAM_ORD_ASC="a";ControllerDb.prototype.PARAM_ORD_DESC="d";ControllerDb.prototype.PARAM_GRP_FIELDS="grp_fields";ControllerDb.prototype.PARAM_AGG_FIELDS="agg_fields";ControllerDb.prototype.PARAM_AGG_TYPES="agg_types";ControllerDb.prototype.PARAM_RET_ID="ret_id";ControllerDb.prototype.m_listModelId;ControllerDb.prototype.m_objModelId;ControllerDb.prototype.addDefParams=function(pm){pm.addParam(new Field(this.PARAM_CONTROLLER,{value:this.getId()}));pm.addParam(new Field(this.PARAM_METH,{value:pm.getId()}));pm.addParam(new Field(this.PARAM_VIEW,{value:this.PARAM_VIEW_VALUE}));}
ControllerDb.prototype.addInsert=function(){return this.addMethod(this.METH_INSERT);}
ControllerDb.prototype.getInsert=function(){return this.getPublicMethod(this.METH_INSERT);}
ControllerDb.prototype.addUpdate=function(){return this.addMethod(this.METH_UPDATE);}
ControllerDb.prototype.getUpdate=function(){return this.getPublicMethod(this.METH_UPDATE);}
ControllerDb.prototype.addDelete=function(){return this.addMethod(this.METH_DELETE);}
ControllerDb.prototype.getDelete=function(){return this.getPublicMethod(this.METH_DELETE);}
ControllerDb.prototype.addGetObject=function(){return this.addMethod(this.METH_GET_OBJ);}
ControllerDb.prototype.getGetObject=function(){return this.getPublicMethod(this.METH_GET_OBJ);}
ControllerDb.prototype.addGetList=function(){var pm=this.addMethod(this.METH_GET_LIST);pm.addParam(new FieldInt(this.PARAM_COUNT));pm.addParam(new FieldInt(this.PARAM_FROM));pm.addParam(new Field(this.PARAM_ORD_FIELDS));pm.addParam(new Field(this.PARAM_ORD_DIRECTS));pm.addParam(new Field(this.PARAM_COND_FIELDS));pm.addParam(new Field(this.PARAM_COND_SGNS));pm.addParam(new Field(this.PARAM_COND_VALS));pm.addParam(new Field(this.PARAM_COND_ICASE));return pm;}
ControllerDb.prototype.getGetList=function(){return this.getPublicMethod(this.METH_GET_LIST);}
ControllerDb.prototype.setObjModelId=function(objModelId){this.m_objModelId=objModelId;}
ControllerDb.prototype.getObjModelId=function(){return this.m_objModelId;}
ControllerDb.prototype.setListModelId=function(listModelId){this.m_listModelId=listModelId;}
ControllerDb.prototype.getListModelId=function(){return this.m_listModelId;}
ControllerDb.prototype.addComplete=function(){var pm=this.addMethod(this.METH_COMPLETE);pm.addParam(new FieldInt(this.PARAM_COUNT));pm.addParam(new FieldInt(this.PARAM_IC));pm.addParam(new FieldInt(this.PARAM_MID));pm.addParam(new Field(this.PARAM_ORD_FIELDS));return pm;}
ControllerDb.prototype.getComplete=function(){return this.getPublicMethod(this.METH_COMPLETE);}
ControllerDb.prototype.addMethod=function(methId){var pm=new PublicMethod(methId);this.addDefParams(pm);this.addPublicMethod(pm);return pm;} 
function Model(id,options){options=options||{};this.setId(id);this.m_fields=options.fields;if(options.data){this.setData(options.data);}}
Model.prototype.m_rowIndex;Model.prototype.m_fields;Model.prototype.setData=function(){this.m_rowIndex=-1;}
Model.prototype.setId=function(id){this.m_id=id;}
Model.prototype.getId=function(){return this.m_id;}
Model.prototype.getNextRow=function(){if(this.m_rowIndex+1==this.getRowCount()){return null;}
this.m_rowIndex++;return this.fetchRow();}
Model.prototype.getPreviousRow=function(){if(this.m_rowIndex==0){return null;}
this.m_rowIndex--;return this.fetchRow();}
Model.prototype.getRow=function(ind){if(this.m_rowIndex>=this.getRowCount()){return null;}
return this.fetchRow();}
Model.prototype.fetchRow=function(){}
Model.prototype.getRowCount=function(){}
Model.prototype.getFields=function(){return this.m_fields;}
Model.prototype.setFields=function(f){this.m_fields=f;}
Model.prototype.getField=function(id){if(!this.m_fields[id]){throw new Error(CommonHelper.format(this.ER_NO_FIELD,Array(id)));}
return this.m_fields[id];}
Model.prototype.getFieldValue=function(id){return this.getField(id).getValue();} 
function ModelXML(id,options){ModelXML.superclass.constructor.call(this,id,options);}
extend(ModelXML,Model);ModelXML.prototype.TAG_ROW="row";ModelXML.prototype.TAG_AT_ID="id";ModelXML.prototype.m_node;ModelXML.prototype.m_rows;ModelXML.prototype.setId=function(id){this.m_node.setAttribute(this.TAG_AT_ID,id);}
ModelXML.prototype.getId=function(){return this.m_node.getAttribute(this.TAG_AT_ID);}
ModelXML.prototype.setData=function(data){this.m_node=data;if(!this.m_node){throw new Error(format(this.ER_NO_MODEL,Array(this.getId())));}
this.m_rows=this.m_node.getElementsByTagName(this.TAG_ROW);Model.superclass.call(this);}
ModelXML.prototype.fetchRow=function(){var f=this.m_rows[this.m_rowIndex].childNodes;for(var i=0;i<f.length;i++){if(f[i].nodeType==1){var fid=f[i].getAttribute(this.TAG_AT_ID);if(this.m_fields[fid]){var t_val=null;if(f[i].childNodes.length){for(var t_ind=0;t_ind<f[i].childNodes.length;t_ind++){if(f[i].childNodes[t_ind].nodeType==3){if(!t_val){t_val="";}
t_val+=f[i].childNodes[t_ind].nodeValue;}
else if(f[i].childNodes[t_ind].nodeType==1){var ar_node=f[i].childNodes[t_ind];for(var j=0;j<ar_node.childNodes.length;j++){if(ar_node.childNodes[j].nodeType==3){if(!t_val){t_val=[];}
t_val.push(ar_node.childNodes[j].nodeValue);}}}}}}
this.m_fields[fid].setValue(t_val);}}
return true;} 
function ModelObjectXML(id,options){ModelObjectXML.superclass.constructor.call(this,id,options);}
extend(ModelObjectXML,ModelXML);ModelObjectXML.prototype.setData=function(data){ModelObjectXML.superclass.setData(this,data);this.getRow(0);} 
function ModelSingleRowXML(node){ModelSingleRow.superclass.constructor.call(this,node);}
extend(ModelSingleRowXML,ModelXML);ModelSingleRowXML.prototype.setActive=function(active){if(active){this.createFields();this.setFirstRow();}
else{this.destructFields();}
this.m_active=active;}
ModelSingleRowXML.prototype.setNode=function(node){this.m_node=node;this.setActive(true);} 
function ModelServRespXML(resp){ModelServRespXML.superclass.constructor.call(this,"ServResponse",{"data":resp,"fields":{"result":new FieldInt(),"descr":new Field()}});this.result=this.getFieldValue("result");this.descr=this.getFieldValue("descr");}
extend(ModelServRespXML,ModelSingleRowXML);ModelServRespXML.prototype.result;ModelServRespXML.prototype.descr; 
function Field(id,options){options=options||{};this.setId(id);if(options.alias){this.setAlias(options.alias);};if(options.value){this.setValue(options.value);};this.setPrimaryKey((options.primaryKey!=undefined)?options.primaryKey:false);this.setLength(options.len);this.setRequired((options.required!=undefined)?options.required:false);this.setMinLength(options.minLength);this.setFixLength(options.fixLength);this.setDefValue(options.defValue);this.m_onSetValue=options.onSetValue;}
Field.prototype.m_id;Field.prototype.m_alias;Field.prototype.m_value;Field.prototype.m_primaryKey;Field.prototype.m_length;Field.prototype.m_required;Field.prototype.m_defValue;Field.prototype.m_minLength;Field.prototype.m_fixLength;Field.prototype.m_enabled;Field.prototype.m_onSetValue;Field.prototype.correctValue=function(v){return v;}
Field.prototype.setId=function(id){this.m_id=id;}
Field.prototype.getId=function(){return this.m_id;}
Field.prototype.setPrimaryKey=function(v){this.m_primaryKey=v;}
Field.prototype.getPrimaryKey=function(){return this.m_primaryKey;}
Field.prototype.setLength=function(v){this.m_length=v;}
Field.prototype.getLength=function(){return this.m_length;}
Field.prototype.setRequired=function(v){this.m_required=v;}
Field.prototype.getRequired=function(){return this.m_required;}
Field.prototype.setMinLength=function(v){this.m_minLength=v;}
Field.prototype.getMinLength=function(){return this.m_minLength;}
Field.prototype.setFixLength=function(v){this.m_fixLength=v;}
Field.prototype.getFixLength=function(){return this.m_fixLength;}
Field.prototype.setDefValue=function(v){this.m_value=this.correctValue(v);}
Field.prototype.getDefValue=function(){return this.m_defValue;}
Field.prototype.setAlias=function(v){this.m_alias=v;}
Field.prototype.getAlias=function(){return this.m_alias||this.m_id;}
Field.prototype.setValue=function(value){this.m_value=this.correctValue(value);if(this.m_onSetValue){this.m_onSetValue(this.m_value);}}
Field.prototype.getValue=function(arInd){if(arInd&&this.m_value&&this.m_value.length>arInd){return this.m_value[arInd];}
else{return this.m_value;}}
Field.prototype.isEmpty=function(){var val=this.getValue();var def_val=this.getDefValue();return((val==undefined||val.length==0)&&(def_val==undefined||def_val.length==0));}
Field.prototype.isTooLong=function(){var v=this.getValue();return(v&&this.m_maxLength&&v.length&&v.length>this.m_maxLength);}
Field.prototype.isTooShort=function(){var v=this.getValue();return(v&&this.m_minLength&&v.length&&v.length<this.m_minLength);}
Field.prototype.isNotFixed=function(){var v=this.getValue();return(v&&this.m_fixLength&&v.length&&v.length!=this.m_maxLength);}
Field.prototype.validate=function(){if(this.getRequired()&&this.isEmpty()){throw new Error(this.ER_EMPTY);}
if(this.isTooLong(val)){throw new Error(this.ER_TOO_LONG);}
if(this.isTooShort(val)){throw new Error(this.ER_TOO_SHORT);}
if(this.isNotFixed(val)){throw new Error(this.ER_INVALID);}} 
function FieldBool(id,options){options=options||{};FieldBool.superclass.constructor.call(this,id,options);}
extend(FieldBool,Field);FieldBool.prototype.correctValue=function(v){if(v===true||v===false)return v;return(this.TRUE_VALS.indexOf(v.toLowerCase())>=0);} 
function FieldDate(id,options){options=options||{};FieldDate.superclass.constructor.call(this,id,options);}
extend(FieldDate,Field);FieldDate.prototype.correctValue=function(v){if(!v)return DateHelper.time();if(v instanceof Date)return v;return DateHelper.strtotime(v);} 
function FieldDateTime(id,options){options=options||{};FieldDateTime.superclass.constructor.call(this,id,options);}
extend(FieldDateTime,FieldDate); 
function FieldTime(id,options){options=options||{};FieldTime.superclass.constructor.call(this,id,options);}
extend(FieldTime,Field); 
function FieldInt(id,options){options=options||{};FieldInt.superclass.constructor.call(this,id,options);}
extend(FieldInt,Field);FieldInt.prototype.correctValue=function(v){var n=parseInt(v);if(isNaN(n)){throw new Error(this.ER_INVALID);}
return n;} 
function FieldFloat(id,options){options=options||{};FieldFloat.superclass.constructor.call(this,id,options);}
extend(FieldFloat,Field);FieldFloat.prototype.correctValue=function(v){var n=parseFloat(v);if(isNaN(n)){throw new Error(this.ER_INVALID);}
return n;} 
function FieldPassword(id,options){options=options||{};FieldPassword.superclass.constructor.call(this,id,options);}
extend(FieldPassword,Field); 
function FieldText(id,options){options=options||{};FieldText.superclass.constructor.call(this,id,options);}
extend(FieldText,Field); 
Model.prototype.ER_NO_MODEL="Модель % не найдена.";Model.prototype.ER_NO_FIELD="Поле % не найдено.";Field.prototype.ER_EMPTY="пустое значение.";Field.prototype.ER_TOO_LONG="значение слишком длинное.";Field.prototype.ER_TOO_SHORT="значение слишком короткое.";Field.prototype.ER_INVALID="неверное значение.";FieldObject.prototype.ER_NO_KEY="ключевое поле не найдено.";FieldBool.prototype.TRUE_VALS=["да","д","истина","1","true","t","yes","y"];DateHelper.MON_LIST=Array("Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря");DateHelper.FORMAT_STR="d/m/Y H:i:s";EventHelper.DEL_ERR="Невозможно удалить событие.";ServResp.prototype.ERR_NO_MODEL="Модель % не найдена.";PublicMethod.prototype.ER_NO_FIELD="Поле % метода % не найдено.";Controller.prototype.ER_NO_METHOD="Метод %s контроллера % не найден."; 
var bsCol{init:function(){this.m_col=("col-"+$('#users-device-size').find('div:visible').first().attr('id')+"-");}
get:function(){return this.m_col;}} 
function Control(id,tagName,options){options=options||{};tagName=tagName||this.DEF_TAG_NAME;if(!tagName){throw new Error(CommonHelper.format(this.ER_TAG_UNDEF,Array(id)));}
this.m_node=document.createElement(tagName);for(var opt in options){switch(opt){case"value":this.setValue(options[opt]);break;case"className":this.setClassName(options[opt]);break;case"enabled":this.setEnabled(options[opt]);break;case"required":this.setRequired(options[opt]);break;case"visible":this.setVisible(options[opt]);break;case"namespace":this.setNamespace(options[opt]);break;case"winObj":this.setWinObj(options[opt]);break;case"events":this.setEvents(options[opt]);break;default:this.setAttr(opt,options.[opt]);}}}
Control.prototype.DEF_TAG_NAME="div";Control.prototype.ATTR_DISABLED="disabled";Control.prototype.ATTR_REQ="required"
Control.prototype.CLASS_INVISIBLE="invisible";Control.prototype.m_node;Control.prototype.m_namespace;Control.prototype.m_events;Control.prototype.setId=function(id){if(id){this.m_node.id=((this.m_namespace)?(this.m_namespace+":"):"")+id;}}
Control.prototype.getId=function(){return DOMHelper.getAttr(this.m_node,"id");}
Control.prototype.setEnabled=function(enabled){if(enabled){DOMHelper.delAttr(this.m_node,this.ATTR_DISABLED);}
else{DOMHelper.setAttr(this.m_node,this.ATTR_DISABLED,this.ATTR_DISABLED);}}
Control.prototype.getEnabled=function(){return!(DOMHelper.getAttr(this.m_node,this.ATTR_DISABLED));}
Control.prototype.setVisible=function(visible){if(visible){DOMHelper.delClass(this.m_node,this.CLASS_INVISIBLE);}
else{DOMHelper.addClass(this.m_node,this.CLASS_INVISIBLE);}}
Control.prototype.setRequired=function(required){if(!required){DOMHelper.delAttr(this.m_node,this.ATTR_REQ);}
else{DOMHelper.addAttr(this.m_node,this.ATTR_REQ,this.ATTR_REQ);}}
Control.prototype.getVisible=function(){return!DOMHelper.hasClass(this.m_node,this.CLASS_INVISIBLE);}
Control.prototype.getNode=function(){return this.m_node;}
Control.prototype.appendToNode=function(parent){parent.appendChild(this.m_node);}
Control.prototype.setValue=function(val){if(this.m_node.childNodes!=undefined&&this.m_node.childNodes.length){this.m_node.childNodes[0].nodeValue=val;}
else{this.appendToNode(document.createTextNode(val));}}
Control.prototype.getValue=function(){if(this.m_node.childNodes&&this.m_node.childNodes.length){return this.m_node.childNodes[0].nodeValue;}}
Control.prototype.eventsToDOM=function(){for(var ev in this.m_events){var id=ev.toLowerCase();if(id.substring(0,2)=="on"){id=id.substring(2);}
var self=this;EventHelper.addEvent(this.m_node,id,function(e){self.m_events[ev].call(self,this,e);},true);}}
Control.prototype.toDOMAfter=function(node){var sibl=node.nextSibling;var p=node.parentNode;if(sibl){p.insertBefore(this.m_node,sibl);}
else{p.appendChild(this.m_node);}
this.eventsToDOM();}
Control.prototype.nodeToDOM=function(parent){var sibl;var n=CommonHelper.nd(this.getId(),this.getWinObjDocum());if(n){parent=n.parentNode;sibl=n.nextSibling;parent.removeChild(n);}
if(!parent){console.trace();throw new Error(CommonHelper.format(this.ER_NO_PARENT,Array(this.getId()));}
if(sibl){parent.insertBefore(this.m_node,sibl);}
else{parent.appendChild(this.m_node);}}
Control.prototype.toDOM=function(parent){this.nodeToDOM(parent);this.eventsToDOM();}
Control.prototype.setAttr=function(name,value){DOMHelper.setAttr(this.m_node,name,value);}
Control.prototype.getAttr=function(name){return DOMHelper.getAttr(this.m_node,name);}
Control.prototype.delAttr=function(name){DOMHelper.delAttr(name);}
Control.prototype.setClassName=function(className){if(className&&className.length>0){this.m_node.className=className;}}
Control.prototype.getClassName=function(){return this.m_node.className;}
Control.prototype.delDOM=function(){DOMHelper.delNode(this.m_node);}
Control.prototype.setWinObj=function(winObj){this.m_winObj=winObj;}
Control.prototype.getWinObjDocument=function(){if(this.m_winObj&&this.m_winObj.getWindowForm){return this.m_winObj.getWindowForm().document;}
else{return window.document;}}
Control.prototype.nd=function(n){return CommonHelper.nd(n,this.getWinObjDocument());}
Control.prototype.focus=function(){this.m_node.focus();} 
function ControlContainer(id,tagName,options){options=options||{};ControlContainer.superclass.constructor.call(this,id,tagName,options);if(options.elements){this.m_elements={};for(var i=0;i<options.elements.length;i++){this.addElement(options.elements[i]);}}
else{this.m_elements=options.elements||{};}}
extend(ControlContainer,Control);ControlContainer.prototype.m_elements;ControlContainer.prototype.elementExists=function(id){return(this.m_elements[id]!=undefined);}
ControlContainer.prototype.checkElement=function(id){if(!this.elementExists(id)){throw new Error(CommonHelper.format(this.ER_NO_ELEMENT,Array(this.getId(),id)));}
return true;}
ControlContainer.prototype.isEmpty=function(){return CommonHelper.isEmpty(this.m_elements);}
ControlContainer.prototype.getElement=function(id){this.checkElement(id);return this.m_elements[id];}
ControlContainer.prototype.getElementByIndex=function(ind){var i=0;for(var k in this.m_elements){if(i==ind){return this.m_elements[k];}
i++;}}
ControlContainer.prototype.setElement=function(id,elem){this.m_elements[id]=elem;}
ControlContainer.prototype.addElement=function(new_elem){var id=new_elem.getId();if(!id){id=uuid();}
this.setElement(id,new_elem);}
ControlContainer.prototype.appendToNode=function(parent){for(var elem_id in this.m_elements){this.m_elements[elem_id].appendToNode(this.m_node);}
parent.appendChild(this.m_node);}
ControlContainer.prototype.elementsToDOM=function(){var elem;for(var elem_id in this.m_elements){elem=this.m_elements[elem_id];elem.toDOM(this.m_node);}}
ControlContainer.prototype.toDOMAfter=function(node){ControlContainer.superclass.toDOMAfter.call(this,node);this.elementsToDOM();}
ControlContainer.prototype.toDOM=function(parent){this.elementsToDOM();this.nodeToDOM(parent);this.eventsToDOM();}
ControlContainer.prototype.clear=function(){this.m_elements={};}
ControlContainer.prototype.getCount=function(){var len=0;for(var k in this.m_elements)
len++;return len;}
ControlContainer.prototype.delDOM=function(){for(var elem_id in this.m_elements){this.m_elements[elem_id].delDOM();}
ControlContainer.superclass.delDOM.call(this);}
ControlContainer.prototype.setEnabled=function(en){for(var elem_id in this.m_elements){this.m_elements[elem_id].setEnabled(en);}
ControlContainer.superclass.setEnabled.call(this,en);} 
function Calculator(inputId,options){options=options||{};this.m_winObj=options.winObj;this.inputId=inputId;this.resetVars();}
Calculator.prototype.CALC_CLASS="calc";Calculator.prototype.getVal=function(){return CommonHelper.nd("ekran",this.getWinObjDocument()).value;}
Calculator.prototype.setVal=function(val){CommonHelper.nd("ekran",this.getWinObjDocument()).value=val;}
Calculator.prototype.close=function(cancel){if(!cancel){var node=CommonHelper.nd(this.inputId,this.getWinObjDocument());if(node!=undefined){node.value=this.getVal();node.focus();}}
var n=CommonHelper.nd(this.inputId+"_calc",this.getWinObjDocument());if(n){n.parentNode.removeChild(n);}}
Calculator.prototype.wynik=0;Calculator.prototype.op;Calculator.prototype.nowe=0;Calculator.prototype.nowe2=0;Calculator.prototype.done=1;Calculator.prototype.oset=0;Calculator.prototype.kropka;Calculator.prototype.temp;Calculator.prototype.resetVars=function(){this.wynik=0,this.op=0,this.nowe=0,this.nowe2=0,this.done=1,this.oset=0;}
Calculator.prototype.reset=function(value){this.setVal(value);this.resetVars();}
Calculator.prototype.wspolna=function(new_temp){this.kropka=1;if(this.nowe||this.done){this.nowe=0;this.done=0;this.temp=new_temp;}
for(var i=0;i<this.temp.length;i++)if(this.temp[i]=='.')this.kropka=0;}
Calculator.prototype.calcButton=function(ktory,ktory2){this.temp=this.getVal();if(ktory2=='.'){this.wspolna('0');if(this.kropka){this.temp+=ktory2;this.setVal(this.temp);this.oset=0;}}
if(ktory>=0&&ktory<=9){this.wspolna('');if(this.temp==0&&this.kropka==1)this.temp='';this.temp+=ktory;this.setVal(this.temp);this.oset=1;}
if(ktory2=='-'||ktory2=='+'||ktory2=='/'||ktory2=='*'){if(this.nowe)this.op=ktory2
else{if(!this.nowe2){this.op=ktory2;this.wynik=this.temp;this.nowe2=1;}
else{this.wynik=eval(this.wynik+this.op+this.temp);this.op=ktory2;this.setVal(wynik);}
this.oset=0;this.nowe=1;}}
if(ktory2=='1/x'){this.wynik=eval(1/this.temp);this.reset(this.wynik);}
if(ktory2=='sqrt'){this.wynik=Math.sqrt(this.temp);this.reset(this.wynik);}
if(ktory2=='exp'){this.wynik=Math.exp(this.temp);this.reset(this.wynik);}
if(ktory2=='+/-')this.setVal(eval(-this.temp));if(ktory2=='='&&this.oset&&this.op!='0')this.reset(eval(this.wynik+this.op+this.temp));if(ktory2=='C')this.reset(0);if(this.getVal()[0]=='.')
this.setVal('0')+this.getVal();}
Calculator.prototype.getHTML=function(){var calc_html='<table cellPadding="0" cellSpacing="5">'+'<tbody>'+'<tr align="left">'+'<td colSpan="5" align="right"><div id="'+this.inputId+'_calc_cancel"><img src="img/modal/close.gif"></div></td></tr>'+'<td colSpan="5"><input style="width:100%;" id="ekran" value="0" size="20"/></td></tr>'+'<tr align="middle">'+'<td colSpan="3">Калькулятор</td>'+'<td><input id="'+this.inputId+'_calc_btn_C" type="button" value="C"/></td>'+'<td><input id="'+this.inputId+'_calc_btn_OK" type="button" value="OK"/></td></tr>'+'<tr align="middle">'+'<td><input id="calc_btn_7" class="calc_ctrl" type="button" value="  7  "/></td>'+'<td><input id="calc_btn_8" class="calc_ctrl" type="button" value="  8  "/></td>'+'<td><input id="calc_btn_9" class="calc_ctrl" type="button" value="  9  "/></td>'+'<td><input id="calc_btn_/" class="calc_ctrl" type="button" value="  /  "/></td>'+'<td><input id="calc_btn_sqrt" class="calc_ctrl" type="button" value="sqrt"/></td></tr>'+'<tr align="middle">'+'<td><input id="calc_btn_4" class="calc_ctrl" type="button" value="  4  "/></td>'+'<td><input id="calc_btn_5" class="calc_ctrl" type="button" value="  5  "/></td>'+'<td><input id="calc_btn_6" class="calc_ctrl" type="button" value="  6  "/></td>'+'<td><input id="calc_btn_*" class="calc_ctrl" type="button" value=" *  "/></td>'+'<td><input id="calc_btn_exp" class="calc_ctrl" type="button" value="exp"/></td></tr>'+'<tr align="middle">'+'<td><input id="calc_btn_1" class="calc_ctrl" type="button" value="  1  "/></td>'+'<td><input id="calc_btn_2" class="calc_ctrl" type="button" value="  2  "/></td>'+'<td><input id="calc_btn_3" class="calc_ctrl" type="button" value="  3  "/></td>'+'<td><input id="calc_btn_-" class="calc_ctrl" type="button" value="  -  "/></td>'+'<td><input id="calc_btn_1/x" class="calc_ctrl" type="button" value="1/x "/></td></tr>'+'<tr align="middle">'+'<td><input id="calc_btn_0" class="calc_ctrl" type="button" value="  0  "/></td>'+'<td><input id="calc_btn_+/-" class="calc_ctrl" class="calc_ctrl" type="button" value=" +/- "/></td>'+'<td><input id="calc_btn_." class="calc_ctrl" type="button" value="  ,  "/></td>'+'<td><input id="calc_btn_+" class="calc_ctrl" type="button" value="  +  "/></td>'+'<td><input id="calc_btn_=" class="calc_ctrl" type="button" value="  =  "/></td>'+'</tr>'+'</tbody>'+'</table>';return calc_html;}
Calculator.prototype.assignControls=function(){var self=this;CommonHelper.nd(this.inputId+"_calc_cancel",this.getWinObjDocument()).onclick=function(){self.close(true);};CommonHelper.nd(this.inputId+"_calc_btn_OK",this.getWinObjDocument()).onclick=function(){self.close(false);};CommonHelper.nd(this.inputId+"_calc_btn_C",this.getWinObjDocument()).onclick=function(){self.calcButton(11,"C");};var list=DOMHelper.getElementsByAttr('calc_ctrl',this.calcNode,'class');var id;for(var i=0;i<list.length;i++){list[i].onclick=function(event){event=EventHelper.fixMouseEvent(event);id=event.target.id.replace(/calc_btn_/,'');self.calcButton(id,id);};}}
Calculator.prototype.show=function(){var node=CommonHelper.nd(this.inputId,this.getWinObjDocument());if(node!=undefined&&nd(this.inputId+"_calc",this.getWinObjDocument())==undefined){this.calcNode=document.createElement('div');this.calcNode.id=this.inputId+"_calc";this.calcNode.className=this.CALC_CLASS;with(this.calcNode.style){border="1px solid gray";background='#FFFFFF';color='#000000';position='absolute';display='block';padding='2px';cursor='default';}
this.calcNode.innerHTML=this.getHTML();this.calcNode.style.top=(findPosY(node)+node.offsetHeight+2)+"px";this.calcNode.style.left=(findPosX(node)+node.offsetWidth+2)+"px";this.getWinObjDocument().body.appendChild(this.calcNode);this.assignControls();this.setVal(node.value);}}
Calculator.prototype.refresh=function(){if(this.calcNode!=undefined){this.calcNode.innerHTML=this.getHTML();this.assignControls();}}
Calculator.prototype.getWinObjDocumentent=function(){if(this.m_winObj){return this.m_winObj.getWindowForm().document;}
else{return window.document;}} 
function Button(id,options){options=options||{};options.className=options.className||this.DEF_CLASS;Button.superclass.constructor.call(this,id,options.tagName||this.DEF_TAG_NAME,options);if(options.caption!=undefined){this.setCaption(options.caption);}
if(options.image!=undefined){this.setImage(options.image);}
if(options.glyph){this.setGlyph(options.glyph);}
var self=this;this.m_clickFunc=function(e){if(self.getEnabled()&&self.m_onClick){self.m_onClick(e);}}
if(options.onClick!=undefined){this.setOnClick(options.onClick);}}
extend(Button,Control);Button.prototype.DEF_TAG_NAME="div";Button.prototype.DEF_IMAGE_CLASS="btnImg";Button.prototype.DEF_CLASS="btn btn-default";Button.prototype.setCaption=function(caption){if(this.m_node.childNodes.length==0){this.m_node.appendChild(document.createTextNode(caption));}
else{this.m_node.childNodes[0].nodeValue=caption;}}
Button.prototype.getCaption=function(){return this.m_node.childNodes[0].nodeValue;}
Button.prototype.setImage=function(image){this.m_image=image;var img=DOMHelper.createImgElement(image.src,image.alt,image.h,image.w);img.className=this.DEF_IMAGE_CLASS;this.m_node.appendChild(img);}
Button.prototype.getImage=function(){return this.m_image;}
Button.prototype.getGlyph=function(){return this.m_glyph;}
Button.prototype.setGlyph=function(glyph){this.m_glyph=glyph;var n=document.createElement("i");n.className="glyphicon "+glyph;this.m_node.appendChild(n);}
Button.prototype.setOnClick=function(onClick){this.m_onClick=onClick;this.addClick();}
Button.prototype.getOnClick=function(){return this.m_onClick;}
Button.prototype.addClick=function(){var self=this;EventHelper.add(this.m_node,"click",this.m_clickFunc,false);}
Button.prototype.removeClick=function(){var self=this;EventHelper.del(this.m_node,"click",this.m_clickFunc,false);} 
function ButtonCtrl(id,options){options=options||{};options.className="btn btn-default";ButtonCtrl.superclass.constructor.call(this,id,options);}
extend(ButtonCtrl,Button); 
function ButtonCalc(id,options){options=options||{};options.glyph="glyphicon-th";options.attrs=options.attrs||{};options.attrs.title=options.attrs.title||options.attrs.hint||this.DEF_HINT;options.onClick=options.onClick||function(event){event=EventHelper.fixMouseEvent(event);var id=event.target.parentNode.parentNode.previousSibling.id;var kal=new Calculator(id);kal.show();};ButtonCalc.superclass.constructor.call(this,id,options);}
extend(ButtonCalc,ButtonCtrl); 
ButtonCalc.prototype.DEF_HINT="открыть калькулятор";ButtonCalc.prototype.DEF_ALT="клк."; 
function ButtonCalendar(id,options){options=options||{};options.glyph="glyphicon-calendar";this.m_inputId=options.inputId;options.hint=options.hint||this.DEF_HINT;var self=this;options.onClick=options.onClick||function(event){var p=$("#"+self.m_inputId);p.datepicker({format:options.datePattern,language:"ru",daysOfWeekHighlighted:"0,6",autoclose:true,todayHighlight:true,orientation:"bottom right",showOnFocus:false});p.datepicker("show");};ButtonCalendar.superclass.constructor.call(this,id,options);}
extend(ButtonCalendar,ButtonCtrl); 
ButtonKalendar.prototype.DEF_HINT="открыть календарь";ButtonKalendar.prototype.DEF_ALT="кал."; 
function ButtonClear(id,options){options=options||{};options.glyph="glyphicon-remove";options.onClick=options.onClick||function(event){event=EventHelper.fixMouseEvent(event);var node=event.target.parentNode.parentNode.previousSibling;if(node){node.value="";}
if(options.editControl){var ctrl=options.editControl;if(ctrl){var mask=ctrl.getEditMask();if(mask){MaskEdit(ctrl.getNode(),mask);}}}};ButtonClear.superclass.constructor.call(this,id,options);}
extend(ButtonClear,ButtonCtrl); 
ButtonClear.prototype.DEF_HINT="очистить значение"; 
function ButtonClearObject(id,options){options=options||{};options.title=options.title||this.DEF_TITLE;options.onClick=options.onClick||function(event){};options.title=options.title||this.DEF_HINT;ButtonClearObject.superclass.constructor.call(this,id,options);}
extend(ButtonClearObject,ButtonClear); 
ButtonClearObject.prototype.DEF_HINT="очистить";ButtonClearObject.prototype.DEF_TITLE="очистить"; 
function ButtonCmd(id,options){options=options||{};options.className="btn btn-primary btn-cmd";ButtonCmd.superclass.constructor.call(this,id,options);}
extend(ButtonCmd,Button); 
function ButtonOpen(id,options){options=options||{};options.glyph="glyphicon-pencil";options.title=options.title||this.DEF_HINT;options.onClick=options.onClick||function(event){event=EventHandler.fixMouseEvent(event);};ButtonOpen.superclass.constructor.call(this,id,options);}
extend(ButtonOpen,ButtonCtrl); 
ButtonOpen.prototype.DEF_HINT="открыть";ButtonOpen.prototype.DEF_ALT="откр."; 
function ButtonOpenObject(id,options){options=options||{};options.title=options.title||"открыть";options.glyph="glyphicon-remove";var self=this;options.onClick=options.onClick||function(event){event=EventHandler.fixMouseEvent(event);var node=event.target.parentNode.parentNode.previousSibling;var KEY_PREF="fkey_";var KEY_PREF_LEN=5;var keys={};var key_count=0;if(node.attributes){for(var i=0;i<options.keyFieldIds.length;i++){if(node.attributes[KEY_PREF+options.keyFieldIds[i]]!=undefined&&node.attributes[KEY_PREF+options.keyFieldIds[i]].nodeValue!=undefined&&node.attributes[KEY_PREF+options.keyFieldIds[i]].nodeValue!=''&&node.attributes[KEY_PREF+options.keyFieldIds[i]].nodeValue!='undefined'){keys[options.lookupKeyFieldIds[i]]=node.attributes[KEY_PREF+options.keyFieldIds[i]].nodeValue;key_count++;}}}
if(key_count==0){return;}
self.m_form=new WIN_CLASS({"caption":"Справочник"});self.m_form.open();var editViewObj=new options.objectView(self.getId()+"EditView",{"onClose":function(res){self.m_form.close();node.focus();},"readController":options.controller,"readModelId":options.modelId,"connect":options.controller.getServConnector(),"winObj":self.m_form});for(var key_id in keys){editViewObj.setReadIdValue(key_id,keys[key_id]);}
self.m_form.setWidth(editViewObj.getFormWidth());self.m_form.setHeight(editViewObj.getFormHeight());self.m_form.setCaption(editViewObj.getFormCaption());editViewObj.toDOM(self.m_form.getContentParent());editViewObj.readData();self.m_form.setFocus();};ButtonOpenObject.superclass.constructor.call(this,id,options);}
extend(ButtonOpenObject,ButtonOpen);ButtonOpenObject.prototype.m_winObj; 
function ButtonPrint(id,options){options=options||{};options.caption=options.caption||this.DEF_CAPTION;var self=this;options.onClick=options.onClick||function(){self.onClick();};options.title=options.title||this.DEF_HINT;this.m_params=options.params;this.m_paramId=options.paramId;this.m_DOMId=options.DOMId;this.m_controller=options.controller;this.m_methodId=options.methodId||this.DEF_METH;ButtonPrint.superclass.constructor.call(this,id,options);}
extend(ButtonPrint,ButtonCmd);ButtonPrint.prototype.onClick=function(){if(this.m_DOMId){this.m_params[this.m_paramId]=CommonHelper.nd(this.m_DOMId).getAttribute("old_id");}
this.m_controller.run(this.m_methodId,{xml:false,async:true,params:this.m_params,func:function(resp){WindowPrint.show({content:resp});}});}
ButtonPrint.prototype.DEF_METH="get_print"; 
ButtonPrint.prototype.DEF_HINT="напечатать";ButtonPrint.prototype.DEF_CAPTION="Печать"; 
function ButtonSelect(id,options){options=options||{};options.glyph=options.glyph||"glyphicon-menu-hamburger";options.title=options.title||this.DEF_HINT;ButtonSelect.superclass.constructor.call(this,id,options);}
extend(ButtonSelect,ButtonCtrl); 
ButtonSelect.prototype.DEF_HINT="выбрать";ButtonSelect.prototype.DEF_ALT="выбр."; 
function ButtonSelectObject(id,options){var self=this;options=options||{};options.title=options.title||this.DEF_HINT;this.m_methParams=options.methParams;this.m_multySelect=(options.multySelect==undefined)?false:options.multySelect;options.onClick=options.onClick||function(event){var node=nd(options.controlId);self.m_form=new WIN_CLASS(self.getId()+"_form",{"title":"Выбор"});self.m_form.open();var editViewObj=new options.listView(self.getId()+"EditView",{"onClose":function(res){self.m_form.close();node.focus();},"onSelect":function(keys,descrs,extraFields){if(!self.m_multySelect&&self.m_form){self.m_form.close();delete self.m_form;}
if(options.lookupKeyFieldIds&&options.keyFieldIds){var ind;for(var key_id in keys){ind=options.lookupKeyFieldIds.indexOf(key_id);if(ind>=0){DOMHandler.setAttr(node,"fkey_"+options.keyFieldIds[ind],keys[key_id]);DOMHandler.setAttr(node,"last_fkey_"+options.keyFieldIds[ind],keys[key_id]);}}
var val="";;for(var key_id in descrs){val+=(val=="")?"":" ";val+=descrs[key_id];}
node.value=val;if(extraFields){for(var f in extraFields){DOMHandler.addAttr(node,f,extraFields[f]);}}
node.focus();}
if(options.onSelected){if(options.onSelectContext){options.onSelected.call(options.onSelectContext,keys,descrs,extraFields);}
else{options.onSelected(keys,descrs,extraFields);}}},"readController":options.controller,"readModelId":options.modelId,"readMethodId":options.methodId,"connect":new ServConnector(HOST_NAME),"winObj":self.m_form,"methParams":self.m_methParams,"extraFields":options.extraFields});if(options.onBeforeSelect){options.onBeforeSelect(self,editViewObj);}
self.m_form.setCaption(editViewObj.getTitle());self.m_form.setSize(editViewObj.getFormWidth(),editViewObj.getFormHeight());editViewObj.toDOM(self.m_form.getContentParent());self.m_form.setFocus();};ButtonSelectObject.superclass.constructor.call(this,id,options);}
extend(ButtonSelectObject,ButtonSelect);ButtonSelectObject.prototype.m_form; 
ButtonSelectObject.prototype.DEF_HINT="выбрать из списка";ButtonSelectObject.prototype.DEF_ALT="выбр."; 
function ButtonToggle(id,options){options=options||{};options.className="btn btn-link";options.glyph="glyphicon-triangle-bottom";options.attrs=options.attrs||{};options.attrs["data-toggle"]="collapse";options.attrs["data-target"]=("#"+options.dataTarget);ButtonToggle.superclass.constructor.call(this,id,options);}
extend(ButtonToggle,Button); 
function Label(id,options){options=options||{};var tagName=options.tagName||this.DEF_TAG_NAME;options.className=options.className||("control-label "+bsCol.get()+"4");Label.superclass.constructor.call(this,id,tagName,options);if(options.caption){this.setCaption(options.caption);}}
extend(Label,Control);Label.prototype.DEF_TAG_NAME="label";Label.prototype.setCaption=function(caption){this.setValue(caption);}
Label.prototype.getCaption=function(){return this.getValue();} 
function Edit(id,options){options=options||{};options.className=options.className||this.DEF_CLASS;options.type=options.type||this.DEF_INPUT_TYPE;options.name=options.name||id;Edit.superclass.constructor.call(this,id,this.DEF_TAG_NAME,options);if(options.editMask){this.setEditMask(options.editMask);}
if(options.label){this.setLabel(options.label);}
else if(options.labelCaption){this.setLabel(new Label(id+":label",{"caption":options.labelCaption,"className":options.labelClassName,"visible":this.getVisible()}));}
this.m_buttons=new ControlContainer("btn-cont:"+id,"span",{"className":this.BTNS_CONTAINER_CLASS,"enabled":this.getEnabled()});if(options.buttonOpen){this.m_buttons.addElement(options.buttonOpen);}
if(options.buttonSelect){this.m_buttons.addElement(options.buttonSelect);}
if(options.buttonClear){this.m_buttons.addElement(options.buttonClear);}
if(options.value){this.setValue(options.value);}
this.m_contClassName=options.contClassName||this.DEF_CONT_CLASS;this.m_editContClassName=options.editContClassName||("input-group "+bsCol.get()+"8");}
extend(Edit,Control);Edit.prototype.DEF_TAG_NAME="input";Edit.prototype.DEF_INPUT_TYPE="text";Edit.prototype.DEF_CLASS="form-control";Edit.prototype.BTNS_CONTAINER_CLASS="input-group-btn";Edit.prototype.INCORRECT_VAL_CLASS="incorrect_val";Edit.prototype.DEF_CONT_CLASS="form-group";Edit.prototype.m_editMask;Edit.prototype.m_buttons;Edit.prototype.m_value;Edit.prototype.m_label;Edit.prototype.m_container;Edit.prototype.m_editContainer;Edit.prototype.setEditMask=function(mask){this.m_editMask=mask}
Edit.prototype.getButtons=function(){return this.m_buttons;}
Edit.prototype.getValue=function(){if(this.m_node){if(this.getEditMask()){return $(this.getNode()).mask();}
else{this.m_node.value}}}
Edit.prototype.setNotValid=function(erStr){DOMHandler.addClass(this.m_node,this.INCORRECT_VAL_CLASS);throw new Error(erStr);}
Edit.prototype.setValid=function(){DOMHandler.removeClass(this.m_node,this.INCORRECT_VAL_CLASS);}
Edit.prototype.toDOM=function(parent){this.m_container=new ControlContainer(this.getId()+":cont","div",{"className":this.m_contClassName,"visible":this.getVisible()});if(this.m_label){this.m_container.addElement(this.m_label);}
this.m_editContainer=new Control(this.getId()+":edit-cont","div",{"className":this.m_editContClassName});this.m_container.addElement(this.m_editContainer);this.m_container.toDOM(parent);Edit.superclass.toDOM.call(this,this.m_editContainer.getNode());if(this.m_editMask){$(this.getNode()).mask(this.m_editMask);}
if(this.m_buttons&&!this.m_buttons.isEmpty()){this.m_buttons.toDOMAfter(this.getNode());}}
Edit.prototype.setLabel=function(label){this.m_label=label;}
Edit.prototype.getLabel=function(){return this.m_label;}
Edit.prototype.delDOM=function(){Edit.superclass.delDOM.call(this);if(this.m_buttons){this.m_buttons.delDOM();}
if(this.m_editContainer){this.m_editContainer.delDOM();}
if(this.m_container){this.m_container.delDOM();}}
Edit.prototype.setVisible=function(visible){Edit.superclass.setVisible.call(this,visible);if(this.m_container){this.m_container.setVisible(visible);}}
Edit.prototype.setEnabled=function(enabled){if(this.m_buttons){this.m_buttons.setEnabled(enabled);}
Edit.superclass.setEnabled.call(this,enabled);}
Edit.prototype.setComment=function(com){if(this.m_comment==undefined){this.m_comment=new Control(this.getId()+"_comment_","div",{visible:true,"className":"form-control-static ctrl_comment"});this.m_comment.toDOM(this.m_node.parentNode);}
this.m_comment.setValue(com);this.m_comment.setVisible(true);} 
Control.prototype.ER_TAG_UNDEF="Контрол % имя узла не определено.";Control.prototype.ER_NO_PARENT="Контрол % родитель не определен.";ControlContainer.prototype.ER_NO_ELEMENT="Элемент % контейнера % не найден."; 
function User_Controller(servConnector){options={};options["listModelId"]="User_Model";options["objModelId"]="User_Model";User_Controller.superclass.constructor.call(this,"User_Controller",servConnector,options);this.addInsert();this.addUpdate();this.addDelete();this.addGetList();this.addGetObject();this.add_reset_pwd();this.add_login();this.add_login_refresh();this.add_logout();}
extend(User_Controller,ControllerDb);User_Controller.prototype.addInsert=function(){User_Controller.superclass.addInsert.call(this);var param;var options;var pm=this.getInsert();options={};var param=new FieldString("name",options);pm.addParam(param);options={};param=new FieldEnum("role_id",options);options["values"]='admin,manager,client';pm.addParam(param);options={};var param=new FieldPassword("pwd",options);pm.addParam(param);options={};var param=new FieldString("phone_cel",options);pm.addParam(param);options={};var param=new FieldInt("time_zone_locale_id",options);pm.addParam(param);options={};var param=new FieldString("email",options);pm.addParam(param);pm.addParam(new FieldInt("ret_id",{}));}
User_Controller.prototype.addUpdate=function(){User_Controller.superclass.addUpdate.call(this);var param;var options;var pm=this.getUpdate();options={};var param=new FieldInt("id",options);pm.addParam(param);param=new FieldInt("old_id",{});pm.addParam(param);options={};var param=new FieldString("name",options);pm.addParam(param);options={};param=new FieldEnum("role_id",options);options["values"]='admin,manager,client';pm.addParam(param);options={};var param=new FieldPassword("pwd",options);pm.addParam(param);options={};var param=new FieldString("phone_cel",options);pm.addParam(param);options={};var param=new FieldInt("time_zone_locale_id",options);pm.addParam(param);options={};var param=new FieldString("email",options);pm.addParam(param);}
User_Controller.prototype.addDelete=function(){User_Controller.superclass.addDelete.call(this);var options={"required":true};var pm=this.getDelete();pm.addParam(new FieldInt("id",options));}
User_Controller.prototype.addGetList=function(){User_Controller.superclass.addGetList.call(this);var options={};var pm=this.getGetList();pm.addParam(new FieldInt("id",options));pm.addParam(new FieldString("name",options));pm.addParam(new FieldEnum("role_id",options));pm.addParam(new FieldPassword("pwd",options));pm.addParam(new FieldString("phone_cel",options));pm.addParam(new FieldInt("time_zone_locale_id",options));pm.addParam(new FieldString("email",options));pm.getParamById(this.PARAM_ORD_FIELDS).setValue("name");}
User_Controller.prototype.addGetObject=function(){User_Controller.superclass.addGetObject.call(this);var options={};var pm=this.getGetObject();pm.addParam(new FieldInt("id",options));}
User_Controller.prototype.add_reset_pwd=function(){var pm=this.addMethodById('reset_pwd');pm.addParam(new FieldInt("user_id"));}
User_Controller.prototype.add_login=function(){var pm=this.addMethodById('login');pm.addParam(new FieldString("name"));pm.addParam(new FieldPassword("pwd"));}
User_Controller.prototype.add_login_refresh=function(){var pm=this.addMethodById('login_refresh');pm.addParam(new FieldString("refresh_token"));}
User_Controller.prototype.add_logout=function(){var pm=this.addMethodById('logout');} 
function SMSTemplate_Controller(servConnector){options={};options["listModelId"]="SMSTemplateList_Model";options["objModelId"]="SMSTemplateList_Model";SMSTemplate_Controller.superclass.constructor.call(this,"SMSTemplate_Controller",servConnector,options);this.addInsert();this.addUpdate();this.addDelete();this.addGetList();this.addGetObject();}
extend(SMSTemplate_Controller,ControllerDb);SMSTemplate_Controller.prototype.addInsert=function(){SMSTemplate_Controller.superclass.addInsert.call(this);var param;var options;var pm=this.getInsert();options={};options["alias"]="Тип SMS";param=new FieldEnum("sms_type",options);options["values"]='reset_pwd';pm.addParam(param);options={};options["alias"]="Шаблон";var param=new FieldText("template",options);pm.addParam(param);options={};options["alias"]="Комментарий";var param=new FieldText("comment_text",options);pm.addParam(param);options={};options["alias"]="Поля";var param=new FieldText("fields",options);pm.addParam(param);pm.addParam(new FieldInt("ret_id",{}));}
SMSTemplate_Controller.prototype.addUpdate=function(){SMSTemplate_Controller.superclass.addUpdate.call(this);var param;var options;var pm=this.getUpdate();options={};var param=new FieldInt("id",options);pm.addParam(param);param=new FieldInt("old_id",{});pm.addParam(param);options={};options["alias"]="Тип SMS";param=new FieldEnum("sms_type",options);options["values"]='reset_pwd';pm.addParam(param);options={};options["alias"]="Шаблон";var param=new FieldText("template",options);pm.addParam(param);options={};options["alias"]="Комментарий";var param=new FieldText("comment_text",options);pm.addParam(param);options={};options["alias"]="Поля";var param=new FieldText("fields",options);pm.addParam(param);}
SMSTemplate_Controller.prototype.addDelete=function(){SMSTemplate_Controller.superclass.addDelete.call(this);var options={"required":true};var pm=this.getDelete();pm.addParam(new FieldInt("id",options));}
SMSTemplate_Controller.prototype.addGetList=function(){SMSTemplate_Controller.superclass.addGetList.call(this);var options={};var pm=this.getGetList();pm.addParam(new FieldInt("id",options));pm.addParam(new FieldString("sms_type",options));pm.addParam(new FieldString("sms_type_descr",options));pm.addParam(new FieldText("template",options));pm.addParam(new FieldText("fields",options));}
SMSTemplate_Controller.prototype.addGetObject=function(){SMSTemplate_Controller.superclass.addGetObject.call(this);var options={};var pm=this.getGetObject();pm.addParam(new FieldInt("id",options));}