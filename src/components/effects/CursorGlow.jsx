import {useEffect,useState} from "react";

function CursorGlow(){

const[position,setPosition]=useState({x:0,y:0});

useEffect(()=>{

const move=(e)=>{

setPosition({

x:e.clientX,

y:e.clientY

})

}

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return(

<div

className="fixed pointer-events-none
w-[350px]
h-[350px]
rounded-full
blur-[120px]
bg-blue-500/20
-z-10"

style={{

left:position.x-175,

top:position.y-175

}}

>

</div>

)

}

export default CursorGlow;