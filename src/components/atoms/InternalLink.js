import React from "react";


export default function InternalLink(id,claz,text){
    return(
        <a href={id} className={claz}>{text}</a>
    )
}