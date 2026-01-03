import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu";
import psosLogo from '@/assets/logo.png';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on home page, navigate to home first
      navigate('/');
      // Then scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBoardApplicationClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-1">
            <img
              src={psosLogo}
              alt="Project Save Our Skin Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-xl text-gradient font-heading font-bold">Project Save Our Skin</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={handleAboutClick}
            className={`transition-colors duration-200 ${
              location.pathname === '/about'
                ? 'text-primary border-b-2 border-primary pb-1'
                : 'text-gray-700 hover:text-primary'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Chapters
          </button>

          <DropdownMenu
            trigger={
              <span className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors duration-200">
                Get Involved
                <ChevronDown className="w-4 h-4" />
              </span>
            }
          >
            <DropdownMenuItem onClick={() => scrollToSection('get-involved')}>
              Learn More
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleBoardApplicationClick}>
              Apply for a Board Position
            </DropdownMenuItem>
          </DropdownMenu>

          <Button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 rounded-full"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" aria-label="Menu">
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>
    </header>
  );
}
