// import React from 'react'
import data from "./data"

type info = {
  img:string,
  description: string,
  names:string
}

function MyClients({img, description, names}: info){
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


export default function App() {
  const clientData = data.map(el => {
    return <MyClients 
    key={el.id}
    img={el.img}
    description={el.description}
    names={el.names}
    />

  })

  return (
    <>
      <div className="mt-2 mx-auto">
        <p className="text-3xl font-semibold text-center font-mono">WHAT OUR CLIENTS SAY</p>
        <p className="border-2 border-blue-500 w-[30px]"></p>
        <div className="grid grid-cols-3 gap-10 w-[900px] mt-5 mx-auto">
        {clientData} 

        </div>
        
      </div>
       
    </>
  )
}


