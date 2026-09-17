import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      
      <div className='nav-links'>

        <Link  to={'/'} className='nav-bar'>Home</Link>
        <Link to={'/movies'} className='nav-bar'>Movies</Link>
        <Link to={'/WatchList'}className='nav-bar'>Watch List</Link>
      </div>




    </>
  )
}