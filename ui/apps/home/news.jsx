import React from 'react'
import Highlight from 'react-highlight';


class Style extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      component: null
    }
  }


  render(){
    return <div className="slds-size--10-of-12" style={{marginLeft:"auto", marginRight:"auto"}}>
      <div style={{backgroundSize: "cover", backgroundPositionY: -158,backgroundImage: "url(/assets/images/470331065.jpg)", height: 300}}>
      </div>

      <div className="slds-text-heading_large slds-m-top--medium">
        Rodconianos News o Pagina de Bienvenida (Pronto).
      </div>

      <div className="slds-text-heading_small slds-size--8-of-12">
        Pronto pondremos informacion en relacion a eventos y cosas importantes que van sucediendo en Rodco o simplemente va a ser una pagina de Bienvenida :-)
      </div>

    </div>
  }
}
export default Style;