import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {
  return (
    <>
      <nav>
        <div>
          <a className="lrxs" href=""><p className="lrxs">LRXS</p></a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
