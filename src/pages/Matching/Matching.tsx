import React from "react";
import SettingsBtn from "../../components/SettingsBtn/SettingsBtn";
import "./Matching.scss"
import { Link } from "react-router-dom";




const Matching = () => {


    return (
    
        <>
            <div className="Matching">
                <div className="settings">
                    <Link to={'/settings'}>
                        <SettingsBtn />
                    </Link>
                </div>

            </div>
        </>
    )

  
}



export default Matching



