import { Link, useRouteError } from 'react-router-dom'

function CareerError() {
    const error = useRouteError()
  return (
    <div className='career-deatil'>
        <h2>Use a valid router ...Nigga</h2>
        <i>{error.message}</i>

        <p> Return to &nbsp;<Link to='/'>Dashboard</Link> </p>
      
    </div>
  )
}

export default CareerError
