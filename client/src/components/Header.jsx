import logo from "../logo.svg";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <div className="navbar-brand">
          <a className="d-flex" href="/">
            <img src={logo} alt="Logo" className="mr-2" />
            <div>ProjectMGMT</div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
