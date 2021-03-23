
import React,{useState} from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Inicio = () => {
    const [autoplay] = useState(true);
    const properties = {
        arrows: false,
        autoplay: true
      };
  return (
    <div style={{marginTop:'20px',width:'70%',marginLeft:'15%'}}>
      <div>
        <Slide autoplay={autoplay} {...properties} >
          <img style={{width:'90%',height:'400px',marginLeft:'5%'}} src="/camion1.png" alt="camion1"/>
          <img style={{width:'90%',height:'400px',marginLeft:'5%'}} src="/camion2.png" alt="camion2"/>
          <img style={{width:'90%',height:'400px',marginLeft:'5%'}} src="/camion6.png" alt="camion6"/>
          <img style={{width:'90%',height:'400px',marginLeft:'5%'}} src="/camion4.png" alt="camion4"/>
        </Slide>
      </div>

     
    </div>
  );
};

export default Inicio;



