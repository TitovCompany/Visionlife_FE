import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import menuData from "../data/navigation.json";

interface BreadcrumbItem {
 label: string;
 href: string;
}

const Breadcrumb = () => {
 const location = useLocation();
 const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[] | null>(null);

 useEffect(() => {
  const path = location.pathname;

  if (path === "/") {
   setBreadcrumbs(null); //홈페이지에서는 Breadcrumb 숨기기
   return;
  }

  const newBreadcrumbs: BreadcrumbItem[] = [];

  const findBreadcrumbs = (menu: typeof menuData) => {
   for (const item of menu) {
    if (path === item.href || path.startsWith(item.href + "/")) {
     newBreadcrumbs.push({ label: item.label, href: item.href });

     if (item.sub) {
      let foundSubItem = null;

      for (const subItem of item.sub) {
       if (path === subItem.href || path.startsWith(subItem.href + "/")) {
        foundSubItem = subItem; // 현재 선택된 서브메뉴 찾기
       }
      }

      if (foundSubItem) {
       newBreadcrumbs.push({ label: foundSubItem.label, href: foundSubItem.href });
      }
     }
     break;
    }
   }
  };

  findBreadcrumbs(menuData);
  setBreadcrumbs(newBreadcrumbs);
 }, [location]);

 if (!breadcrumbs) return null; // 홈페이지에서는 렌더링하지 않음

 return (
  <nav className="text-gray-500 text-sm mb-4">
   <ul className="flex space-x-2">
    <li>
     <Link to="/" className="hover:underline">Home</Link>
    </li>
    {breadcrumbs.map((breadcrumb, index) => (
     <li key={index} className="flex items-center">
      <span className="mx-2">›</span>
      <Link to={breadcrumb.href} className="hover:underline">
       {breadcrumb.label}
      </Link>
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default Breadcrumb;
