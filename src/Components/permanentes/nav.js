import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (<>
    <nav className="sections">
        <ul className="links-nav">
            <li><Link to="/category/Playstation"><p>Playstation</p></Link></li>
            <li><Link to="/category/Xbox"><p>Xbox</p></Link></li>
            <li><Link to="/category/Corsair"><p>Corsair</p></Link></li>
            <li><Link to="/category/Asus"><p>Rog</p></Link></li>
            <li><Link to="/category/MSI"><p>Msi</p></Link></li>
        </ul>
    </nav>
    </>
    )
}

export default Nav