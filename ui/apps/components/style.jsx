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
    return <div>
      <div style={{backgroundSize: "cover", backgroundPositionY: -158,backgroundImage: "url(/assets/images/470331065.jpg)", height: 300}}>
      <div style={{color: "#fff",fontSize: 16,padding: 17}}>Metro de Munich</div>
      </div>

      <div className="slds-text-heading_large slds-m-top--medium">
        Rodco.Digital
      </div>

      <div className="slds-text-heading_small slds-size--8-of-12">
        Somos un equipo de trabajo exitoso, en el tiempo hemos sido moldeados por nuestros productos y el mercado.
        Pero sobre todo por quienes somos y con quien nos relacionamos.
        <br/><br/>
        Si bien hemos utilizado mercadeo y publicidad, nuestra herramienta real de negocios ha sido nuestra
        presencia, nuestra voz y cada una de las personas que han hecho Rodco lo que es hoy.
        <br/><br/>
        Nuestra transformacion digital, no se trata de llevar la publicidad a Telefonos y Redes Sociales.
        <br/>Se trata de acercarnos, por la via digital, a nuestros clientes y usuarios finales.
        <br/><br/><i>...esa herramienta real de negocios, que somos el equipo de Rodco.</i>
      </div>

      <div className="slds-text-heading_medium slds-m-top--medium slds-m-top--large">
        TMV?
      </div>


      <div className="slds-text-heading_small slds-size--8-of-12">
        Es la unidad de emprendimiento Digital (Tecnologia Mercadeo y Ventas),
        nuestro objetivo es crear los canales de comunicacion y publicar contenido en ellos
        para interactuar con nuestros clientes y usuarios finales.
        <br/><br/>
      </div>

      <div className="slds-text-heading_medium slds-m-top--medium slds-m-top--large">
        Que "Canales" y que contenido?
      </div>


      <div className="slds-text-heading_small slds-size--8-of-12">
        Mas alla de un Facebook, Instagram, etc. Para nosotros solo hay un canal, es invisible y es
        el mismo que usamos cuando nos sentamos a conversar con una persona. Es un canal multi-dimensional
        de expresión.
        <br/><br/>
        Así mismo, cada una de las formas en que nos conectamos con los clientes son una dimension de
        Rodco Digital. La experiencia de hacer negocios con Rodco, es la union de todas esas formas;
        <br/><br/>
        El contenido ya sea un video, una rifa, un catalogo, un flyer o un mostrario. Sin importar si esta
        en internet o en la manos de un ferretero. Es el mismo, diseñado a priori para que pueda ser
        transformado para ese canal.
        <br/><br/>
        ie: Los catalogos son impresiones del catalogo web, que llevan de regreso al catalogo web.
        </div>

      <div className="slds-text-heading_medium slds-m-top--medium slds-m-top--large">
        Datos y Ventas
      </div>

      <div className="slds-text-heading_small slds-size--8-of-12">
        Todos los elementos de contenido esta conectados estrategicamente, aun y cuando son fisicos como
        un mostrario o impresos como un flyer.
        <br/><br/>
        El objetivo de cada uno de esos elementos son las ventas, no necesariamente ventas directas; sobre todo
        porque Rodco no pretende ser un Retail "Brick & Mortal" ni tampoco uno Digital. Pero si la transmisión
        de mensajes autenticos, que resulten en ventas directas o indirectas.
        <br/><br/>
        De la misma forma, ningun elemento que distribuimos puede estar aislado; Aun y cuando se encuentre solo en
        la esquina de una ferreteria, o en el escritorio de su dueño. Este debe estar conectado con otros elementos,
        que si puedan estar conectados y generar datos.
        <br/><br/>
        ie: Los catalogos dirigen naturalmente al sitio web, los mostrarios llevan a un landing page,
        pero no lo hacen anonimamente, sino que llevan consigo la identidad del usuario.
        <br/><br/>
        El material POP, merchandising, rifas, y otros elementos promocionales son la goma, o el catalizador
        que aceleran estos procesos.
        <br/><br/>
        Las proformas no son PDF's enviados por email, sino que reportan cuando y quien las abre
        y como este contacto esta integrado con el resto de elementos. Como el catalogo web.
        <br/><br/>
        De esta forma, y con estos datos podemos conocer el momento justo para cerrar una venta.
      </div>


    </div>
  }
}
export default Style;
