type Team = {
    id: number;
    img: string
    names: string;
    position: string
};

type MyTeam = {
    titleTeam: string;
    lineTeam: string;
    descriptionTeam: string;
    members: Team[];
};

function TeamContent({id, img, names, position}: Team){
    return (
        <>
        <div>
            <img src={img}/>
            <p className="text-center pt-4 font-Raleway">{names}</p>
            <p className="text-center font-Raleway text-gray-400">{position}</p>
        </div>
        </>
    )
}

export default function TeamLayout({titleTeam, lineTeam, descriptionTeam, members}: MyTeam){
    return (
        <>
        <div className="mx-20 my-28">
            <h1 className="text-5xl font-Raleway text-center py-4 font-semibold">{titleTeam}</h1>
            <div className="border-2 border-blue-400 w-[70px] mx-auto my-2">{lineTeam}</div>
            <p className="font-thin text-center mb-7">{descriptionTeam}</p>
            <div className="flex gap-12 mt-16">
                {members.map(member => {
                    return <TeamContent 
                    key={member.id}
                    id={member.id}
                    img={member.img}
                    names={member.names}
                    position={member.position}
                    />
                })}
            </div>
        </div>
        </>
    )
}