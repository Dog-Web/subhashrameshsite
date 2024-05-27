import React, {useState} from 'react';
import { Link } from 'gatsby';
// import logo from '../../images/logo.png'; // Adjust the path based on your project structure
import { StaticImage } from 'gatsby-plugin-image'


const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <header className="bg-white opacity-60 z-1000">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between md:justify-center">
        {/* Logo and Menu for Small Screens */}
        <div className="flex items-center justify-start w-full md:hidden">
          <Link to="/" className="flex items-center">
          <div className="h-25 w-auto">
              <StaticImage src="../images/logo.png" alt="Logo" className="h-full w-full" />
            </div>         
             </Link>
        </div>
        <div className="flex justify-end w-full md:hidden">
        <button onClick={toggleMenu} aria-label="Menu">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
                    </button>

        </div>
        
        {/* Centered Logo for Larger Screens */}
        <div className="hidden md:flex justify-center w-full">
          <Link to="/" className="flex items-center">
          <div className="max-h w-auto max-w-xs">
              <StaticImage src="../images/logo.png" alt="Logo" className="h-100 w-100" />
            </div>      
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-1000">
          <button onClick={toggleMenu} aria-label="Close Menu" className="absolute top-4 right-4 text-white text-2xl">
            &times;
          </button>
          <nav className="text-white text-center space-y-8 text-2xl">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/real-weddings" onClick={toggleMenu}>Real Weddings</Link>
            <Link to="/packages" onClick={toggleMenu}>Packages</Link>
            <Link to="/faqs" onClick={toggleMenu}>FAQs</Link>
            <Link to="/enquire" onClick={toggleMenu}>Enquire</Link>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;