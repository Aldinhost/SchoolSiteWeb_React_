

const Footer = () =>{

    const copyright = new Date();
    const update = copyright.getFullYear();
    

    return(
        <>
            <div className="footer__container">
                <div className="logo__container">
                    <div className="imgLogo__container">
                        <img src="../src/assets/logo_ica_noText.png" alt="logo ica" />
                    </div>
                    <p>Calle Nezahualcóyotl N°15, Ciudad Azteca, 1ra. Secc. Ecatepec de Morelos, Estado de México. C.P. 55120</p>
                </div>
                <div className="content__container">
                    <div className="content__contact">

                        <div>
                            <h3>Teléfonos</h3>
                            <ul>
                                <li>55 57 74 15 39</li>
                                <li>55 57 74 10 70</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Correo Electrónico</h3>
                            <a href="mailto:ica.contacto@gmail.com?Subject=Me%20gustaría%20obtener%20información" target="_blank">
                                contacto@institutoculturalazteca.com.mx
                            </a>
                        </div>

                    </div>
                    <div className="content__links">
                        <a href="#">Nosotros</a>
                        <a href="#">Admisiones</a>
                        <a href="#">Contacto</a>
                    </div>

                    <div className="footer__social">
                        <h3>Síguenos</h3>
                        <div className="footer__social-icons">
                            <a href=""><img src="../src/assets/facebook.png" alt="facebook icon"/></a>
                            <a href=""><img src="../src/assets/instagram.png" alt="instagram icon"/></a>
                            <a href=""><img src="../src/assets/youtube.png" alt="youtube icon"/></a>
                            <a href=""><img src="../src/assets/whatsapp.png" alt="whatsapp icon"/></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer__copyrights">
               <p><span>Instituto Cultural Azteca</span> | Copyright ©{ update } Derechos reservados.</p>
            </div>
            
        </>
    )
}

export default Footer;