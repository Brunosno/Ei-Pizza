import image from "../../assets/LogoCard.jpg"

export default function FeedBackCard(){
    return(
        <div className="bg-white h-full w-[300px] rounded-3xl overflow-hidden">
            <div className=" flex px-8 gap-3 py-2">
                <img 
                src={image}
                alt="Foto" 
                className="
                w-[70px]
                rounded-full"
                />

                <h1 className="text-[#031955] font-bold text-2xl">Fã de pizza</h1>
            </div>

            <div className="w-[90%] justify-center items-center flex mx-auto my-4">
                <p className="text-[#031955] text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis enim dicta nesciunt eligendi, cumque, nam at adipisci a, 
                    quasi commodi laudantium est dolor iure ipsum iste ratione inventore 
                    natus doloribus.
                </p>
            </div>

            <div>

            </div>

        </div>
    );
}