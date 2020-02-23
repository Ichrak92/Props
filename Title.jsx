import React from 'react';


const Titre = (props)=>{
    return(
        <div>
            {(props.small)? (<h6>{props.children}</h6>):(<h1>{props.children}</h1>)}
           </div>
    
        
   
    )
}
export default Title;
