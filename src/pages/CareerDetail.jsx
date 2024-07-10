import { Outlet, useLoaderData, useParams } from 'react-router-dom'

function CareerDetail() {
    const career = useLoaderData()

  return (
    <div className='career-details'>
        <h1>{career.name}</h1>
        <p>username: {career.username}</p>
        <p>{career.address && (
                        <div>
                          <h3>Full Address</h3>
                          <p>Suite: {career.address.suite}</p>
                          <p>City: {career.address.city}</p>
                          <p>Zipcode: {career.address.zipcode}</p>
                            <div>
                                <p>Geo:</p>
                                <p>Lat: {career.address.geo.lat}</p>
                                <p>Lng: {career.address.geo.lng}</p>
                            </div>
                        </div>)}
        </p>
        <p>Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatem?</p>
    </div>
  )
}

export default CareerDetail


//loader
export const CareerDetailLoader = async ({params}) =>{
    const {id} = params
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    if (!res.ok) {
      throw new Error('Failed to fetch careerDetail data');
    }
    return res.json()
}
