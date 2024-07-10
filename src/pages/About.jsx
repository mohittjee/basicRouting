import { useState } from "react"
import { Navigate } from "react-router-dom"

function About() {
  const [user, setUser] = useState('Mohit')
  if(!user){
    return <Navigate to='/' replace={true}/>
  }
  return (
    <div className="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quae
          rat, praesentium accusantium dolorum nesciunt esse commodi quos distinctio fuga
          delectus nam aut velit repellat, beatae deserunt veniam expedita doloremque temporibus?
        </p>

        <button onClick={()=> setUser(null)}>Logout</button>
             
    </div>
  )
}

export default About
