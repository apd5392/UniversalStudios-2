import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div>
            <Link to = '/'>Home</Link>
            <Link to = '/restaurants'>Restaurants</Link>
            <Link to ='/rides'>Rides</Link>
            <Link to ='/shops'>Shops</Link>
        </div>
    )
}
export default Nav