import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero(){

return(

<section

className="relative min-h-screen flex items-center pt-32 lg:pt-36"

id="home"

>

<Container>

<div className="grid lg:grid-cols-2 gap-24 items-center min-h-[80vh]">

<HeroContent/>

<div>

<HeroImage/>

</div>

</div>

</Container>

</section>

)

}