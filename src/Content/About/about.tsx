type About = {
    id: number;
    img: string;
    result: string;
};

type MyAbout = {
    imgAbout: string;
    titleAbout: string;
    lineAbout: string;
    describe: string;
    question: string;
    responses: About[];
};

function AboutContent({ id, img, result }: About) {
    return (
        <>
            <div className="flex gap-1 items-center">
                <img src={img} className="h-[10px]" />
                <p className="font-karla">{result}</p>
            </div>
        </>
    )
}

export default function AboutLayout({ imgAbout, titleAbout, lineAbout, describe, question, responses }: MyAbout) {
    return (
        <>
            <div className="my-28 flex gap-20 mx-16">
                <img src={imgAbout} className="w-[520px]"/>
                <div className="w-[500px]">
                    <h1 className="font-Raleway text-4xl">{titleAbout}</h1>
                    <div className="border-2 w-[70px] border-blue-400 my-3">{lineAbout}</div>
                    <p className="font-thin pt-2">{describe}</p>
                    <p className="pt-5 font-Raleway">{question}</p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                        {responses.map(response => {
                            return <AboutContent
                                key={response.id}
                                id={response.id}
                                img={response.img}
                                result={response.result}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}