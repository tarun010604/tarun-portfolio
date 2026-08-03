import { motion } from "framer-motion";

function Aurora(){

return(

<div className="fixed inset-0 overflow-hidden -z-20">

<motion.div

animate={{

x:[0,100,-100,0],

y:[0,-50,50,0],

}}

transition={{

duration:25,

repeat:Infinity,

ease:"easeInOut"

}}

className="absolute w-[900px] h-[900px]
rounded-full
blur-[180px]
opacity-40
bg-blue-600
top-[-250px]
left-[-200px]"
/>

<motion.div

animate={{

x:[0,-150,150,0],

y:[0,80,-80,0]

}}

transition={{

duration:30,

repeat:Infinity,

ease:"easeInOut"

}}

className="absolute
w-[800px]
h-[800px]
rounded-full
blur-[180px]
opacity-30
bg-violet-600
bottom-[-250px]
right-[-150px]"
/>

</div>

)

}

export default Aurora;