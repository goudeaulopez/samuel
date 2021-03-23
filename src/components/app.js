import React from 'react'
import Header from './header'
import '../styles/app.css'
import Inicio from './Inicio'
import Empresa from './empresa'
import Servicios from './servicios'
import Contacto from './constacto'
import Footer from './footer'

class App extends React.Component{
    state={option:''}
    selectWindow = option => {
        this.setState({option})
    }
    onOption = option => {
        this.setState({option})
    }
    render(){
        return<div className="main">
            <Header selectWindow={this.selectWindow} option={this.state.option}/>
            <Navegator onOption={this.onOption} />
            <Menu option={this.state.option} selectWindow={this.selectWindow}/>
            <Footer/>
        </div>
    }
}
export default App



const Navegator = props => {
    return <div className="nav">
           <p onClick={()=>props.onOption('')}>Inicio</p>
           <p onClick={()=>props.onOption('quienesSomos')}>Quienes Somos</p>
           <p onClick={()=>props.onOption('nuestrosServicios')}>Nuestros Servicios</p>
           <p onClick={()=>props.onOption('contacto')}>Contacto</p>
    </div>
}

const Menu = props => {
    switch(props.option){
        case 'quienesSomos':
            return <Empresa/>
        case 'nuestrosServicios':
            return <Servicios/>
        case 'contacto':
            return <Contacto selectWindow={props.selectWindow}/>
        default:
            return <Inicio/>
    }
}