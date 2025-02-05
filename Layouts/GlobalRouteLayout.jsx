import { NavLink, Outlet, Link } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/BreadCrumbs'

function GlobalRoute() {
  return (
    <div className="root-layout">
      <header>
        <nav >
          <h1><Link to='/'>OffSense</Link></h1>
          <div>
            <NavLink to="home"><button>Home</button></NavLink>
            <NavLink to="about"><button>About</button></NavLink>
            <NavLink to="career"><button>Career</button></NavLink>
            <NavLink to="help"><button>Help</button></NavLink>
          </div>          
        </nav>
        <Breadcrumbs/>    
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default GlobalRoute
