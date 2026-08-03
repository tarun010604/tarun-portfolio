import GlassCard from "./GlassCard";

export default function TechBadge({

icon,

title,

}){

return(

<GlassCard
className="
px-5
py-3
flex
items-center
gap-3
hover:-translate-y-2
duration-500
">

<div className="text-2xl">

{icon}

</div>

<p className="font-medium">

{title}

</p>

</GlassCard>

)

}