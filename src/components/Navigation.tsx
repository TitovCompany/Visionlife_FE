const navigation = [
  {label: 'menu1', link: '/'},
  {label: 'menu2', link: '/'},
  {label: 'menu3', link: '/'},
]

const Navigation = () => {
  return (
      <nav className="p-4 sticky">
        <div className="container mx-auto flex justify-between items-center">
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
          <button className="lg:hidden md:hidden text-white focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
  );
};

export default Navigation;
