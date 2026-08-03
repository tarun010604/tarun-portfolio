function FloatingParticles(){

return(

<div className="fixed inset-0 -z-10">

{

[...Array(50)].map((_,i)=>(

<span

key={i}

className="absolute w-[2px] h-[2px] rounded-full bg-blue-300 opacity-30 animate-pulse"

style={{

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`

}}

>

</span>

))

}

</div>

)

}

export default FloatingParticles;