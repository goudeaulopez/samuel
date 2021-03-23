import React from 'react'
import '../styles/header.css'

const Header = props => {
 const contacto = props.option !== 'contacto' ? 
 <div id="llamanos">
    <p> Contactanos directamente</p>
     <a href="tel:+610426121161"><i className="phone big icon mr-2"> </i></a>
     <a  href="https://api.whatsapp.com/send?phone=610426121161"> <i className="whatsapp  big icon green mr-2"></i></a>
     <a  onClick={()=>props.selectWindow('contacto')}><i className="mail big icon mr-4"></i></a>
 </div>
  //<div id="llamanos">

  //<a> <i className="phone icon"> </i>+56 995384364 </a>  <br/>
 // <a> <i className="whatsapp square icon green"></i>+56 995384364</a>
//</div> 
:
''
    return(
       
        <div className="navegator">
            <img src="/logobz2.png"/>
             {contacto}
        </div>
     
    ) 
  
}
export default Header
/*

 <div id="div">  <i class="phone icon"></i> <i class="whatsapp square icon"></i>
                <p onClick={()=>props.selectWindow('')}>Inicio</p> 
                <p onClick={()=>props.selectWindow('empresa')}>Nuestra Empresa</p>
                <p onClick={()=>props.selectWindow('servicio')}>Nuestros Servicios</p>
                <p onClick={()=>props.selectWindow('contacto')}>Contacto</p>
           </div>

*/