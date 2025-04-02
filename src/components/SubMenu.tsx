import { Link, useLocation } from "react-router-dom";
import menuData from "../data/navigation.json";
import clsx from "clsx";
const SubMenu = () => {
 const location = useLocation();
 const path = location.pathname;

 // 현재 경로에 해당하는 큰 라벨 찾기
 const currentMenu = menuData.find(menu => path.startsWith(menu.href));

 if (!currentMenu?.sub) return null;

 return (
  <nav className=" p-2 rounded-md">
   <ul className="flex space-x-4">
    {currentMenu.sub.map((subItem, index) => (
     <li key={index}>
      <Link
       to={subItem.href}
       className={clsx(
        "px-4 py-2 rounded-md transition-all",
        path === subItem.href ? "bg-primary text-white" : "text-gray-700 hover:bg-gray0-300"
       )}
      >
       {subItem.label}
      </Link>
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default SubMenu;
