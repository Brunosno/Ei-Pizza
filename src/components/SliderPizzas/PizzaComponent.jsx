import { Swiper } from "./PizzasImport"
import "swiper/css"


export default function PizzaComponent(props){
    return(
        <Swiper
        className="mt-12 z-50"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop
        >
            {props.content}
        </Swiper>
    );
}