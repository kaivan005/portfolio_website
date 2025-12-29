import React from "react";
import Button from '@mui/material/Button';

function Footer(props){
    return(
        <div className="footer">
            <div className="footerLine">
                <p>© 2024 {props.name}.</p>
                <p>Built with ♥ using React, Tailwind CSS & Motion</p>   
            </div>
            <div>
                <Button>Github</Button>
                <Button>Linkedin</Button>
                <Button>Gmail</Button>
            </div>
        </div>
    )
}
export default Footer;