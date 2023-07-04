import Logo from "../assets/images/LOGO.jpg";

export const Header = () => {
  return( 
    <header className="header">
          <nav>
              <div>
                    <img className="logo" src={Logo}/>
              </div>
              <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
                <li>
                    <a href="#">NOSOTROS</a>
                </li>
                <li>
                    <a href="#">DONDE ENCONTRARNOS</a>
                </li>
                <li>
                    <a href="#">CONTACTO</a>
                </li>
              </ul>
          </nav>
      </header>
  );
};