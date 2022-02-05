import React from "react";

function Footer(){
    const curr = new Date().getFullYear();
    return(
        <footer className="foot">{curr} © by Herumb Nagpal</footer>
    );
}

export default Footer;