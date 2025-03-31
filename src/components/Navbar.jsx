import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signIn">Sign In</NavLink>
        </div>
    )
}