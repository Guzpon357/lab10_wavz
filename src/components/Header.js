import "../style.css"
const Header = () => {
  return (
    <header className="header">
      
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/noticias">Noticias</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

