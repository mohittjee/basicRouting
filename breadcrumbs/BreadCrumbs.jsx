import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {

  //Consider the URL: /home/products/electronics/laptops ~unrelated to this project jsut for example
  const location = useLocation()
  //location.pathname will be '/home/products/electronics/laptops'.

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`
    //location.pathname.split('/') splits the path into an array: ['', 'home', 'products', 'electronics', 'laptops'].
    //.filter(crumb => crumb !== '') removes the empty strings: ['home', 'products', 'electronics', 'laptops'].

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}