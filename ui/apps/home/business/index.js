import {Ajax,Auth} from "../../../helpers";
import createHistory from 'history/createHashHistory';

const history = createHistory();

function Business(app){
  var _this = this;
  this.app = app;
  Auth.getAuthCookie();

  this.app.state={
    product: null,
    view: "table"
  };
  Business.business = Business.instance = this;
  Business.instance.history = history;

  Auth.checkAuth(true)
  .then(function(success){
    if(success) return _this.init();
    else return false;
  })
}

Business.prototype.init = function(){
  var _this = this;
  var location = history.location.pathname;
  location = location.replace("/","");

  const unlisten = history.listen((location, action) => {
    //console.log("ok");
    //console.log(action, location.pathname, location.state)
  });
}

Ajax.onUnauthorized = function(){
  alert("Parece que ha pasado mucho tiempo desde su ingreso, debemos volver a cargar la pagina.")
  window.location.reload();
}

Ajax.onNoACL = function(){
  alert("No tiene los accessos necesarios para usar este app. Comuniquese con it@rodcocr.com")
}

Ajax.onLogon = function(){
  alert("No tenemos registado su acceso, lo llevaremos al porton de entrada.")
}

Business.business = Business.instance = null;

export default Business
