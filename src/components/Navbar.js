const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Menu">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <span class="current">
            <span class="visually-hidden">Current Page: </span>
            Map
          </span>
        </li>
        <li className="navbar__list-item">
          <a href="list" className="navbar__list-link">
            List
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="settings" className="navbar__list-link">
            Settings
          </a>
        </li>
        <li className="navbar__list-item">
          <a href="help" className="navbar__list-link">
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
