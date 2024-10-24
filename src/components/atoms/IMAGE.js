import React, { useState } from "react";

export default function IMAGE( image ){

    const [showImage, setShowImage] = useState(false); 

    return(
        <img src={image} alt="" 
            loading="lazy"
            className={showImage ? "hide":"show"}
            onLoad={()=>{console.log("image did load"); setShowImage(true);}} />
         
    )
}