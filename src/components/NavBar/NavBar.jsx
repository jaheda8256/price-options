import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
    
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' }
      ];
      


    return (
        <nav className="text-white p-6 bg-slate-600">
            <div className=" md:hidden" onClick={() => setOpen(!open)}>

                {
                    open === true ? 
                    <AiOutlineCloseCircle className="text-2xl"></AiOutlineCloseCircle>: 
                    <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }
            
            </div>
           <ul className={`md:flex absolute md:static duration-1000
           ${open ? 'top-16': '-top-60'}
            bg-slate-600 px-6`}>
           {
                routes.map(route => <Link  key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;