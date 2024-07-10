import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

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
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default GlobalRoute
