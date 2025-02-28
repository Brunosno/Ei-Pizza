export default function InfoHome(){
    return(
        <div id="Home" className="
        z-30 
        flex 
        flex-col 
        justify-center 
        items-start 
        md:px-[150px] 
        mx-9 
        w-full 
        h-full 
        gap-9 
        font-sans">

        <h1 className="text-7xl font-bold 2xl:text-8xl">
            <span className="text-[#062d99]">Ei</span>
            <span className="text-[#ffde59]">!</span>
            <span className="text-white">Pizza</span>
            </h1>

        <p className="text-xl 2xl:text-5xl/tight sm:text-2xl md:text-4xl">
            Mais do que uma pizza, uma 
            <span className="text-[#ffde59]">
                experiência!
            </span>
                Cada
             <br />
                fatia é feita com paixão, ingredientes frescos e 
             <br /> 
                muito carinho para você saborear o melhor da 
             <br />
                vida, em cada pedaço
        </p>

       <a 
       href="https://eipizza.saipos.com/home?q=NjM5OTI5NjMxNzc%3D&utm_source=bot_whats"
       className="
        bg-[#ffde59]
        text-[#062d99]
        flex
        justify-center
        items-center
        text-2xl 
        font-bold
        w-[250px]
        2xl:w-[350px]
        h-[50px]
        rounded-r-[25px]
        hover:w-[350px]
        md:hover:w-[450px]
        hover:bg-green-500
        hover:text-[#ffde59]
        duration-[0.3s]
        ">
            <button >COMPRE AGORA!</button>
        </a>
       

      </div>
    );
}