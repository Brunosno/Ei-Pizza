import FeedBackCard from "./FeedBackCard";
import image from "../../assets/EiPizza.jpg"

export default function FeedBack(){
    return(
        <div id="Feedbacks" className="z-50 w-full h-sfull font-bold flex flex-col items-center">
            <h1 className="z-30 text-white text-4xl md:text-7xl text-center pt-[100px] mb-[20px]">
                Nossos Clientes Dizem:
            </h1>


            <div className="z-30 w-[90%] h-full flex flex-col md:flex-row justify-center items-center gap-10 mt-10 md:mb-10">  
                <FeedBackCard/>  
                <FeedBackCard/>

                <div className="w-full h-full md:w-[700px] md:h-[600px] rounded-3xl overflow-hidden mb-10 md:mb-0">
                    <img 
                    src={image} 
                    alt="Local" 
                    className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
}