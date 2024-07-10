import { Link, useRouteError } from 'react-router-dom'

function CareerError() {
    const error = useRouteError()
  return (
    <div className='career-detail'>
        <h2>Failed to fetch career Data</h2>

        <i>HINT: &nbsp;{error.message}</i>

        <p> Return to &nbsp;<Link to='/'>Dashboard</Link> </p>
      
    </div>
  )
}

export default CareerError
