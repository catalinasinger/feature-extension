import logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'

function Navbar ({ onChange }){

    return (
        <div className="navbar bg-base-100">
           <div className="flex-1">
           </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input 
      type="text" 
      placeholder="Search" 
      className="input input-bordered"
      onChange={onChange}
      />
    </div>
    <div className="dropdown dropdown-end">
       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={logo} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
   
        <li>
          <a className="justify-between">
            <span className="badge">
              <NavLink to="/Home">
                    Home
                  </NavLink></span>
          </a>
          <a className="justify-between">
            <span className="badge">
              <NavLink to="/Create">
                    Your cocktails
                  </NavLink></span>
          </a>
        </li>

      </ul>
    </div>
  </div>
</div>
    )
}

export default Navbar;

