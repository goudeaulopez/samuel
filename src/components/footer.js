import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <p style={{textAlign:'center',padding:'5px',fontWeight:'bold'}}>&copy; 2021 <a style={{paddingRight:'10px'}}>LeoGoudeau.com</a>
               |    Valparaiso <i className="cl flag"></i> </p>
               <br/>
               <br/>
        </div>
    )
}
export default Footer