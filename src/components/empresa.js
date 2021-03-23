import React from 'react'
import '../styles/empresa.css'
const Empresa = () =>{
    return(
        <div className="empresa">
            <div className="ui segment bg-light">
               <div className="ui items">
                   <div className="item">
                      <div className="image">
                          <img src="/camion5.jpg" alt="camion5"/>
                      </div>
                      <div className="content">
                          <h3 className="pl-2">Bz Transportes</h3>
                          <p>
                             Nuestra nempresa, con muchos anos de experiencia
                             en el rubro de transporte de carga, la cual esta a 
                             disposicion de nuestros clientes las 24 horas a lo 
                             largo de todo chile, para entregar nuestros despachos
                              con seguridad y puntualidad
                          </p>
                      </div>
                    </div>
               </div>
                    <p>
                        Nuestra nempresa, con muchos anos de experiencia
                        en el rubro de transporte de carga, la cual esta a 
                        disposicion de nuestros clientes las 24 horas a lo 
                        largo de todo chile, para entregar nuestros despachos
                        con seguridad y puntualidad
                    </p>
                    <h5 className="mr-5 mb-3">Samuel Basaez</h5>
              </div>
        </div>
    )
}
export default Empresa
