import "./app.css";
import Brand from "./components/Brand";
import MenuButton from "./components/Menubutton";
import CartIcon from "./components/cartIcon";
import CartContainer from "./components/cartcontainer";
import CategoryItem from "./components/categoryItem";

function App() {
  return (
  <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Brand />
    <MenuButton/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <CategoryItem isActive= {true} name="INFO CUBOS" />
        </li>
        <li className="nav-item">
          <CategoryItem isActive= {false} name="Cubos" />
        </li>
        <li className="nav-item">
          <CategoryItem isActive= {false} name="Piraminx" />
        </li>
        <li className="nav-item">
          <CategoryItem isActive= {false} name="Ofertas" />
        </li>
      </ul>
    </div>
    <CartContainer />
  </div>
</nav>

  </div>
  )
}

export default App
