import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const {user , logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
          .then()
          .catch(error => console.log(error));
      }
    return (
        <div className='bg-rose-200'>
            <div className="navbar max-w-screen-xl mx-auto h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/'}>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/alltoys'}>All Toys</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/blog'}>Blog</NavLink></li>
                    {
                        user? <>
                        <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/mytoys'}>My Toys</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/addtoys'}>Add toys</NavLink></li>
                        </> : ''
                    }
                    </ul>
                </div>
                <img className= 'w-12 h-12 rounded-full' src="https://cdn-icons-png.flaticon.com/512/95/95510.png?w=1380&t=st=1684390062~exp=1684390662~hmac=7bc302c3acf27b8f3c81c6033ab5abe41005f469a1c94203b679826f53a183fe" alt="" />
                <a className=" ml-4 normal-case text-2xl font-semibold">ZooToys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/'}>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/alltoys'}>All Toys</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/blog'}>Blog</NavLink></li> 
                    {
                        user? <>
                        <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/mytoys'}>My Toys</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive? ' text-rose-600 mr-4' : ' text-gray-600 mr-4' } to={'/addtoys'}>Add toys</NavLink></li>
                        </> : ''
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL? <img className='w-[35px] h-[35px] rounded-full mr-4' src={user?.photoURL} title= {user?.displayName}  alt= ""/> : ""
                }
                {
                    user? <>
                    <button onClick={handleLogout} className="btn bg-rose-400 border-none hover:bg-rose-500">Log out</button>
                    </> : <Link to={'/login'} className="btn bg-rose-400 border-none hover:bg-rose-500">Login</Link>
                }
                
            </div>
        </div>

        </div>
        
    );
};

export default Navbar;