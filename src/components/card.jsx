import React from 'react'
// old syntax
// export default function Card(props) {
//     console.log("string",props.haseeb)
//     console.log("object",props.someobj)
//     console.log("array",props.somearr)

// new syntax using destructuring
export default function Card({haseeb="ali" , somearr , someobj}) {
    console.log("string",haseeb)
    console.log("object",someobj)
    console.log("array",somearr)


  return (
    <div className="relative h-[400px] w-[300px] rounded-md margin-bottom ">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left margin-bottom-5  ">
      <h1 className="text-lg font-semibold text-white">{haseeb}  </h1>
      <p className="mt-2 text-sm text-gray-300">
       {somearr}
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
   
      </button>
    </div>
  </div>
  )
}
