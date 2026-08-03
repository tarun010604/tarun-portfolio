import GradientText from "./GradientText";

export default function SectionTitle({

title,

subtitle,

}){

return(

<div className="mb-16 text-center">

<p className="uppercase tracking-[6px] text-blue-400">

{subtitle}

</p>

<h2 className="text-5xl font-bold mt-4">

<GradientText>

{title}

</GradientText>

</h2>

</div>

)

}