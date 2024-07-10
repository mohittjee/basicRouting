import { json, Link, Outlet, useLoaderData } from "react-router-dom"

function Career() {
    const allcareer = useLoaderData()
  return (
    <div className="careers">        
        {allcareer.map((career)=>(
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.name}</p>
                <p>{career.address && (
                        <div>
                          <h3>Address</h3>
                          <p>Street: {career.address.street}</p>
                          {/* <p>Suite: {career.address.suite}</p>
                          <p>City: {career.address.city}</p>
                          <p>Zipcode: {career.address.zipcode}</p>
                            <div>
                                <p>Geo:</p>
                                <p>Lat: {career.address.geo.lat}</p>
                                <p>Lng: {career.address.geo.lng}</p>
                            </div> */}
                        </div>
                )}</p>
            </Link>
        ))}        
      
    </div>
  )
}

export default Career


//career Loader
export const CareerLoader = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
      throw new Error('Failed to fetch Career data');
    }
    return res.json()

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch career data');
    // }
    // const data = await response.json();
    // return data;
}