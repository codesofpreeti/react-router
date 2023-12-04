import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className='items-center'>
        <h1>website help</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae!</p>
        <nav className="flex gap-9">
            <NavLink className="border-solid border-2 border-indigo-600 hover:bg-indigo-200" to="faq">View the FAQ</NavLink> <br />
            <NavLink className="border-solid border-2 border-indigo-600 hover:bg-indigo-200" to="contact">Contact us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayout