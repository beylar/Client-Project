export default function HeroSection(){
    return (
        <>
        <div className="relative h-[828px]">
            <img className="brightness-75" src="./intro-bg.jpg"/>
            <div className="text-white absolute top-[260px] mx-[257px] px-[15px]">
                <h1 className="text-[78px] font-Raleway font-semibold ">WE ARE A LANDING PAGE</h1>
                <p className="text-xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                <button className="mt-16 mx-[290px] rounded-3xl bg-[#5ca9fb] p-3 font-Raleway text-[14px] font-thin">
                    LEARN MORE
                </button>
            </div>
        </div>
        </>
    )
}