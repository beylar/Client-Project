
type info = {
  id:number
  img:string,
  description: string,
  names:string
}

type MyClients = {
  titleClient: string,
  lineClient: string,
  messages: info[]
}

function ClientsContent({id, img, description, names}: info){
  return(
    <>
    <div className="flex gap-2">
      <img src={img} className="rounded-full h-[40px]" alt="John Doe's"/>
      <div className="flex flex-col gap-2">
        <p className="font-light">{description}</p>
        <p>- {names}</p>
      </div>
    </div>
    </>
  )
}


export default function Clients({titleClient, lineClient, messages}: MyClients) {
return (
    <>
      <div className="my-24 mx-auto w-[1100px] ">
        <p className="text-3xl font-semibold text-center font-mono">{titleClient}</p>
        <p className="border-2 border-blue-500 w-[70px] mx-auto my-5">{lineClient}</p>
        <div className="grid grid-cols-3 gap-10 mt-12 mx-auto">
        {messages.map(message => {
          return <ClientsContent 
          key={message.id}
          id={message.id}
          img={message.img}
          description={message.description}
          names={message.names}
          />
        })} 

        </div>
        
      </div>
       
    </>
  )
}


