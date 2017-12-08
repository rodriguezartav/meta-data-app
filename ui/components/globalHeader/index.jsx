import React from 'react';
import Ajax from "../../helpers/ajax";
import classnames from "classnames";
import Style from "./style.css";


class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appsOpen: false
    }
  }

  onLogout(){
    Ajax.logout();
  }

  onOpenAppMenu(){
    if(this.state.appsOpen) this.setState({appsOpen: false });
    else this.setState({appsOpen: true});
  }

  showErrors(){

  }

  renderApps(){
    var apps = ["marketing","admin","analytics"].map(function(item){
      return  <li className="slds-dropdown__item" role="presentation">
        <a target="_blank" href={"http://"+item+".rodcocr.com"} role="menuitem" tabIndex="0">
          <span style={{textTransform:"capitalize"}} className="slds-truncate" title="Menu Item One">{item}</span>
        </a>
      </li>
    })

      if(!this.props.hidenApps){
      return <li className="slds-dropdown-trigger slds-dropdown-trigger--click">
            <div onClick={this.onOpenAppMenu.bind(this)} className={classnames({"slds-dropdown-trigger":true, "slds-dropdown-trigger_click":true, "slds-is-open": this.state.appsOpen })}>
              <button className="slds-button slds-button_icon  " aria-haspopup="true" title="Show More" style={{color:"white"}}>
                <svg className="slds-button__icon slds-button__icon_large" aria-hidden="true">
                  <use  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#apps" />
                </svg>
                <svg className="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
                  <use  xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                </svg>
                <span className="slds-assistive-text">Show More</span>
              </button>
              <div className="slds-dropdown slds-dropdown_right">
                <ul className="slds-dropdown__list" role="menu">
                 {apps}
                </ul>
              </div>
            </div>
          </li>
    }else{
      return null;
    }
  }

  renderLogout(){

      return <li className="slds-dropdown-trigger slds-dropdown-trigger--click">
            <button onClick={this.onLogout} className="slds-button slds-button--icon slds-button--icon-container slds-button--icon-small slds-global-header__button--icon" aria-haspopup="true" title="Notifications">
              <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlinkHref="./assets/icons/utility-sprite/svg/symbols.svg#logout"></use>
              </svg>
            </button>
          </li>

  }

  renderErrors(){
    var style= {};
    if( this.props.errors ) style={color: "red"};
    else return null;

      return <li onClick={this.showErrors.bind(this)} className="slds-dropdown-trigger slds-dropdown-trigger--click" style={style}>
            <button className="slds-button slds-button--icon slds-button--icon-container slds-button--icon-small slds-global-header__button--icon" aria-haspopup="true" title="Notifications">
              <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                <use xlinkHref="./assets/icons/utility-sprite/svg/symbols.svg#error"></use>
              </svg>
            </button>
          </li>

  }

  render(){
    return <div className="slds-context-bar">
  <div className="slds-context-bar__primary">
    <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
      <div className="slds-context-bar__icon-action">
        <div className="slds-global-header__logo" style={{width: "6.8125rem"}}>
          <a href="http://rodcocr.com/">
            <img src="./assets/images/logo.svg" alt="" />
          </a>
        </div>
      </div>
      <span className="slds-context-bar__label-action slds-context-bar__app-name">
        <span className="slds-truncate" title="App Name">Digital</span>
      </span>
    </div>
  </div>
  <nav className="slds-context-bar__secondary" role="navigation">
    <ul className="slds-grid">
      <li className="slds-context-bar__item">
        <a href="/" className="slds-context-bar__label-action" title="Home">
          <span className="slds-truncate" title="Home">Inicio</span>
        </a>
      </li>
            <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                <span className="slds-truncate" title="Menu Item">General</span>
              </a>
              <div className="slds-context-bar__icon-action slds-p-left_none">
                <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                  </svg>
                  <span className="slds-assistive-text"></span>
                </button>
              </div>
              <div className="slds-dropdown slds-dropdown_right">
                <ul className="slds-dropdown__list" role="menu">

                  <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                    <span className="slds-text-title_caps">Apps Generales</span>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataTable.html?app=clientes" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Two">Clientes</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataTable.html?app=productos" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Two">Productos</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataTable.html?app=contactos" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Three">Contactos</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
      <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
        <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
          <span className="slds-truncate" title="Menu Item">Administracion</span>
        </a>
        <div className="slds-context-bar__icon-action slds-p-left_none">
          <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
            <svg className="slds-button__icon" aria-hidden="true">
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
            </svg>
            <span className="slds-assistive-text"></span>
          </button>
        </div>
        <div className="slds-dropdown slds-dropdown_right">
          <ul className="slds-dropdown__list" role="menu">
            <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
              <span className="slds-text-title_caps">Administration Apps</span>
            </li>
            <li className="slds-dropdown__item" role="presentation">
              <a href="/users.html" role="menuitem" tabIndex="-1">
                <span className="slds-truncate" title="Menu Item Two">Users</span>
              </a>
            </li>
            <li className="slds-dropdown__item" role="presentation">
              <a href="/monitors.html" role="menuitem" >
                <span className="slds-truncate" title="Menu Item One">Monitors</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                <span className="slds-truncate" title="Menu Item">Tesoreria</span>
              </a>
              <div className="slds-context-bar__icon-action slds-p-left_none">
                <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                  </svg>
                  <span className="slds-assistive-text"></span>
                </button>
              </div>
              <div className="slds-dropdown slds-dropdown_right">
                <ul className="slds-dropdown__list" role="menu">

                  <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                    <span className="slds-text-title_caps">Menu General</span>
                  </li>

                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataKanban.html?app=cpx" role="menuitem" >
                      <span className="slds-truncate">Cuentas por Pagar</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataTable.html?app=proveedores" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Three">Proveedores</span>
                    </a>
                  </li>

                </ul>
              </div>
            </li>

            <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
                    <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                      <span className="slds-truncate" title="Menu Item">Ventas</span>
                    </a>
                    <div className="slds-context-bar__icon-action slds-p-left_none">
                      <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                        <svg className="slds-button__icon" aria-hidden="true">
                          <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                        </svg>
                        <span className="slds-assistive-text"></span>
                      </button>
                    </div>
                    <div className="slds-dropdown slds-dropdown_right">
                      <ul className="slds-dropdown__list" role="menu">

                        <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                          <span className="slds-text-title_caps">Menu General</span>
                        </li>

                        <li className="slds-dropdown__item" role="presentation">
                          <a href="/metaDataKanban.html?app=pedidos" role="menuitem" >
                            <span className="slds-truncate">Pedidos</span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </li>

      <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
              <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
                <span className="slds-truncate" title="Menu Item">Mercadeo</span>
              </a>
              <div className="slds-context-bar__icon-action slds-p-left_none">
                <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                  <svg className="slds-button__icon" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                  </svg>
                  <span className="slds-assistive-text"></span>
                </button>
              </div>
              <div className="slds-dropdown slds-dropdown_right">
                <ul className="slds-dropdown__list" role="menu">

                  <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                    <span className="slds-text-title_caps">Marketing Apps</span>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/components.html" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Two">Componentes</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/catalogs.html" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item One">Catalogs</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataKanban.html?app=contents" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Two">Contents</span>
                    </a>
                  </li>
                  <li className="slds-dropdown__item" role="presentation">
                    <a href="/metaDataTable.html?app=codes" role="menuitem" >
                      <span className="slds-truncate" title="Menu Item Three">Codes</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

    </ul>
  </nav>
  <ul className="slds-global-header__item slds-grid slds-grid--vertical-align-center" href="http://rodcocr.com/">
    {this.props.children}
    {this.renderErrors()}
    {this.renderLogout()}
  </ul>
</div>
  }



}

GlobalHeader.demo = function(Highlight){
  return <div>
    <GlobalHeader type="blue-links" sticky={false} user={{}} />
    <Highlight className='dark'>
      {'<GlobalHeader type="blue-links" sticky={false} user={{}}  />'}
    </Highlight>
     <br/><br/>

  </div>
}

GlobalHeader.icon = function(icon, onClick){
  return <li className="slds-dropdown-trigger slds-dropdown-trigger--click">
    <button onClick={onClick} className="slds-button slds-button--icon slds-button--icon-container slds-button--icon-small slds-global-header__button--icon" aria-haspopup="true" title="Setup">
      <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
        <use xlinkHref={"./assets/icons/utility-sprite/svg/symbols.svg#"+icon}></use>
      </svg>
    </button>
  </li>
}

export default GlobalHeader;

