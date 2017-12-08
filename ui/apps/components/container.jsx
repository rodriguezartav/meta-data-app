import React from 'react'
import * as Components from "../../components";
import Highlight from 'react-highlight';
import Style from '../../../node_modules/highlight.js/styles/dark.css';
import StyleComponent from "./style";
import createHistory from 'history/createHashHistory'

const history = createHistory()

class Container extends React.Component {

  constructor(props) {
    super(props);
    const location = history.location
    var component = location.pathname.replace("/","");
    this.state = {
      component: component
    }
    // Get the current location.
  }

  elementClick(e){
    this.setState({component: e.target.dataset.type });
    history.push('/' + e.target.dataset.type, { component: e.target.dataset.type })

  }

  renderComponent(){
    var component  = Components[this.state.component];
    if(!component || component == '') return <StyleComponent/>
    else return component.demo(Highlight)
  }

  render(){
    var items = [];
    Object.keys(Components).forEach(function(item){
      if(!Components[item].demo) return null;
      items.push(<li key={item} data-type={item} className="slds-item">{item}</li>);
    })

    return <div className="slds-size--12-of-12">
            <Components.GlobalHeader type="gray-button" user={this.state.user} />
            <div className="slds-grid  slds-grid_frame slds-grid_vertical-stretch">
            <div className="slds-col slds-size--2-of-12 slds-border--right ">
            <div className="slds-text-heading_small slds-p-around--small">Elementos Reutilizables</div>
            <ul onClick={this.elementClick.bind(this)} className="slds-has-dividers_bottom-space">
             {items}
            </ul>
            </div>

            <div className="slds-col slds-size--10-of-12 slds-p-around--large">
              {this.renderComponent()}
            </div>

          </div>
        </div>
  }
}

export default Container;
