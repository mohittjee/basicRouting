import { Link, NavLink, Outlet, Route } from 'react-router-dom'

function Help() {
  return (
    <div>
        <h1>Help</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus! Rem magni distinctio vel nesciunt.</p>
      <NavLink to='faq'><button>FAQ</button></NavLink>
      <NavLink to='contactme'><button>Contactme</button></NavLink>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Help
