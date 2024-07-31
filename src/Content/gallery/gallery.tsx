type Gallery = {
    id: number;
    img: string;
};

type MyGallery = {
    titleGallery: string;
    lineGallery: string;
    descriptionGallery: string;
    images: Gallery[];
};

function GalleryContent({id, img}: Gallery){
    return (
        <>
            <img src={img} />
        </>
    )
}

export default function GalleryLayout ({titleGallery, lineGallery, descriptionGallery, images} : MyGallery){
    return(
        <>
        <div className="w-[1100px] mx-16">
            <h1 className="text-5xl text-center font-Raleway">{titleGallery}</h1>
            <div className="border-2 border-blue-400 w-[70px] mx-auto my-4">{lineGallery}</div>
            <p className="font-thin text-center pb-14">{descriptionGallery}</p>
            <div className="grid grid-cols-3">
                {images.map(el => {
                    return <GalleryContent 
                    key={el.id}
                    id={el.id}
                    img={el.img}
                    />
                })}
            </div>
        </div>
        </>
    )
}