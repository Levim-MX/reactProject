import './Header.css';
import './app.css';

const Header = () => (
    <header className="HeaderBar">
      <a href="#" className="logo">CarFix.</a>
      <nav className="navbar">
        <a href="#" className="activ">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
  
export default Header