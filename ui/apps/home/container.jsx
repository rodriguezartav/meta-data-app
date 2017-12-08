import React from 'react'
import {GlobalHeader,PageHeader,GlobalHeaderTabs,SmartTable,AutoForm,ButtonBar}  from '../../components';
import Business from "./business"
import News from './news';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.business = new Business(this);
  }

  render(){


    return <div>
            <GlobalHeader user={this.state.user} type={"blue-button"} />
            <News />
          </div>
  }
}

export default Container;