import React from 'react'
import {Field,reduxForm,reset} from 'redux-form'
import ReCAPTCHA from "react-google-recaptcha";
import * as emailjs from 'emailjs-com'
import '../styles/contacto.css'


const recaptchaRef = React.createRef();

class Contacto extends React.Component {
     onChange= value => {
      console.log(value)
    }
   
    onSubmit = formvalue => {

        const ServiceId =process.env.REACT_APP_ServiceId; // "service_hffc4p5"   //process.env.REACT_APP_ServiceId; //
        const TemplateId =process.env.REACT_APP_TemplateId;  //  "template_xr0kbmd" //process.env.REACT_APP_TemplateId;  //
        const UserId =process.env.REACT_APP_UserId;  //   "user_bNiJ5jUDIyZYlwLUCplqX"   //process.env.REACT_APP_UserId;  //

      //e.preventDefault()
      recaptchaRef.current.execute();
      console.log(formvalue)

      const templateParams = {
        from_name: formvalue.nombre,
        from_email: formvalue.correoelectronico,
        subject:'Nuevo mensaje',
        from_number:formvalue.telefono,
        message_html: formvalue.descripcion
      };
      emailjs.send(
        ServiceId ,
        TemplateId,
        templateParams,
        UserId
      )
   }
   renderError(meta){
    if( meta.error && meta.touched ){
        return(
            <div>
                <div style={{color:'red'}}>{meta.error}</div>
            </div>
        )
    }
} 
inputname = formvalue => {
        const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
        const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
   return(
         <div className="field">
             <label className={classlabel}>{formvalue.label}</label>
             <input {...formvalue.input} placeholder={formvalue.placeholder} className={classinput}  autoComplete="off"/>
             {this.renderError(formvalue.meta)}
         </div>
     )
}
inputcontact = formvalue => {
    const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
        const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
  return(
      <div className="field">
           <label className={classlabel}>{formvalue.label}</label>
           <input {...formvalue.input} 
                  className={classinput}
                  placeholder={formvalue.placeholder}
                  autoComplete='off'/>
            {this.renderError(formvalue.meta)}
      </div>
  )
}
inputdescription = formvalue => {
    const classlabel = `${formvalue.meta.error && formvalue.meta.touched ? 'text-danger': 'text-secondary' }`
    const classinput = `${formvalue.meta.error && formvalue.meta.touched ? 'border-danger':'border-secondary'}`
  return(
      <div className="field">
          <label className={classlabel}>{formvalue.label}</label>
          <textarea className={classinput} rows="3" {...formvalue.input} placeholder={formvalue.placeholder} />
          {this.renderError(formvalue.meta)}
      </div>
  )
}  //service_n71tjuo
 render(){
  const ReCaptchakey = process.env.REACT_APP_reCaptcha
     return(
      <div id="contacto" >
      <div className="ui horizontal segments bg-light ">
           <div className="ui segment">
             <h3 className="ml-4 mt-4">Llamanos </h3>
             <p className="pl-4 pt-2">Pregunta por Samuel</p>
               <a  href="tel:+610426121161"> <i className="phone  icon ml-5 mt-2"> </i>+56 995384364 </a>  <br/>
               <a  href="https://api.whatsapp.com/send?phone=610426121161"> <i className="whatsapp square icon green ml-5 mt-1"></i>+56 995384364</a>
               <p className="pl-4 pt-2">Alternativamente mandanos un mensaje</p>
               <div>
     
     </div>
           </div>
         <div className="ui segment">
         <h3>Mandame un mensaje</h3>
          <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="field">
                   <Field
                        name="nombre"
                        label="Nombre Completo"
                        placeholder="Ingrese su nombre completo"
                        component={this.inputname}
                       
                    />
          </div>
          <div className="two fields">
                   <Field
                        name="telefono"
                        label="Telefono"
                        placeholder="Ingrese su telefono"
                        component={this.inputcontact}
                       
                    />
         
                   <Field
                        name="correoelectronico"
                        label="Correo electronico"
                        placeholder="Ingrese su correo "
                        component={this.inputcontact}
                       
                    />
          </div>
          <div className="field">
                   <Field
                        name="descripcion"
                        label="Mensaje"
                        placeholder="Ingrese su mensaje "
                        component={this.inputdescription}
                       
                    />
          </div>
             
              <button type="submit" className="ui button primary" >Enviar</button>
               <ReCAPTCHA ref={recaptchaRef} 
                size="invisible" 
                sitekey= "6LeUL4UaAAAAAD8acRMilZP36nQoDdCk_HyCe0Fd"   //{ReCaptchakey}
                onChange={this.onChange}
           />
          
         </form>
         </div>
      </div>
     
   </div> 
     )
    }
}
const validate =(formvalue) => {
  const error = {}
  if( !formvalue.nombre ){
      error.nombre = "nombre completo es requerido"
  }
  
  if(!formvalue.correoelectronico){
      error.correoelectronico = "correo electronico es requerido"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formvalue.correoelectronico)){
      error.correoelectronico = "ingrese un correo electronico valido"
  }
  if(!formvalue.telefono){
      error.telefono = "numero telefonico es requerido"
  }
  else if(!/^[0-9]*$/i.test(formvalue.telefono)){
      error.telefono="ingrese un telefono valido"
  }
  if(!formvalue.descripcion){
      error.descripcion = "mensaje es requerido"
  }
  else if(formvalue.descripcion.length < 4){
      error.descripcion = "el mensaje debe tener al menos 4 characteres"    
  }
  return error;
}
export default reduxForm({ form:'form1', validate})(Contacto)






//siteKey: 6Lec538aAAAAAAJsg_MzKYJjJMxOVLpmwwxNwKSa
//secretKey: 6Lec538aAAAAAIV_jJ9dRz5lRBN7jurKKLofanjp



/*
<div className="field">
                          <label id="label">Cual es su nombre</label>
                          <input  type="text" name="first-name" placeholder="nombre y apellido"/>
                        </div>
                        <div className="field">
                          <label id="label">Corrreo electronico</label>
                          <input type="text" name="last-name" placeholder="correo electronico"/>
                        </div>
                        
                           <div className="field">
                             <label id="label">Su mensaje</label>
                              <textarea rows="4"></textarea>
                           </div>
                      <button className="ui button primary" type="submit">Enviar</button>


*/