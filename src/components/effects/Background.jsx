import Aurora from "./Aurora";
import FloatingParticles from "./FloatingParticles";
import CursorGlow from "./CursorGlow";

function Background() {

return(

<>

<Aurora/>

<FloatingParticles/>

<CursorGlow/>

<div className="fixed inset-0 -z-30 bg-slate-950"/>

</>

)

}

export default Background;