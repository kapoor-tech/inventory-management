import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Inventory App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/about">
              <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;