import { Link, useLocation } from "react-router-dom";
import menuData from "../data/navigation.json";

interface BreadcrumbItem {
 label: string;
 href: string;
}

const Breadcrumb = () => {
 const location = useLocation();
 const path = location.pathname;
 const breadcrumbs: BreadcrumbItem[] = [];

 if (path === "/") return null; // ✅ 홈페이지에서는 경로 숨기기

 const findBreadcrumbs = (menu: typeof menuData) => {
  for (const item of menu) {
   if (path.startsWith(item.href)) {
    breadcrumbs.push({ label: item.label, href: item.href });

    // ✅ 현재 경로가 sub에 속해 있으면 부모 메뉴까지 추가
    if (item.sub) {
     const subMenu = item.sub.find((sub) => path.startsWith(sub.href));
     if (subMenu) {
      breadcrumbs.push({ label: subMenu.label, href: subMenu.href });
     }
    }
    return;
   }

   // ✅ 서브 메뉴에서 찾을 경우 부모도 추가
   if (item.sub) {
    const subMenu = item.sub.find((sub) => path.startsWith(sub.href));
    if (subMenu) {
     breadcrumbs.push({ label: item.label, href: item.href }); // 부모 메뉴 추가
     breadcrumbs.push({ label: subMenu.label, href: subMenu.href });
     return;
    }
   }
  }
 };

 findBreadcrumbs(menuData);

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
