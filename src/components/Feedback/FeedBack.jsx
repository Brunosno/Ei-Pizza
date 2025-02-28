import FeedBackCard from "./FeedBackCard";
import image from "../../assets/EiPizza.jpg"

export default function FeedBack(){
    return(
        <div id="Feedbacks" className="z-50 w-full h-screen font-bold flex flex-col items-center">
            <h1 className="z-30 text-white text-7xl text-center pt-[100px] mb-[20px]">
                Nossos Clientes Dizem:
            </h1>


            <div className="z-30 w-[90%] h-[70%] px-[50px] flex gap-10 mt-10">  
                <FeedBackCard/>  
                <FeedBackCard/>

                <div className="bg-white min-w-[600px] rounded-3xl h-full overflow-hidden">
                    <img 
                    src={image} 
                    alt="Local" 
                    className="w-full h-full"/>
                </div>
            </div>
        </div>
    );
}