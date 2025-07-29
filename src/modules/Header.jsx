import { NavLink } from "react-router-dom"
import { PageRouteList } from "../components/routesList"

const Header = () => {
  return (
    <header className="flex items-center py-2 bg-[#333333] text-[18px] font-bold justify-center gap-[20px]">
      {PageRouteList.map(item => item.title != null && <NavLink key={item.id} className={"text-white"} to={item.path}>{item.title}</NavLink>)}
    </header>
  )
}

export default Header
