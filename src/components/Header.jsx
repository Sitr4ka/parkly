const Header = () => {
  return (
    <>
      <div className="header h-[80px] flex items-center bg-gray-50">
        <div className="container h-[80px] mx-auto px-8 flex items-center justify-between">
          <h2 className="text-primary">Parkly.</h2>
          <nav className="nav-menu flex gap-8">
            <a href="#" className="navItem text-primary">
              Home
            </a>
            <a href="#" className="navItem">
              About
            </a>
            <a href="#" className="navItem">
              Services
            </a>
            <a href="#" className="navItem">
              Contact
            </a>
          </nav>
          <div className="callToAction flex gap-4 max-md:hidden">
            <button className="button text-primary hover:text-white">Log In</button>
            <button className="button text-white bg-primary hover:bg-blue-500">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
