import useScrollDirection from "../hooks/useScrollDirection.tsx";

const navigation = [
  { label: 'menu1', link: '/' },
  { label: 'menu2', link: '/' },
  { label: 'menu3', link: '/' },
];

const Navigation = () => {
  const isVisible = useScrollDirection();

  return (
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text-xl font-bold">Logo</h1>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-6">
            {navigation.map((item, idx) => (
                <li key={idx} className="hover:text-gray-300 cursor-pointer">
                  {item.label}
                </li>
            ))}
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <button className="lg:hidden md:hidden text-black focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
  );
};

export default Navigation;
