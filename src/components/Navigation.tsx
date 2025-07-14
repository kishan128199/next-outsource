"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => currentPath === path;

  useEffect(() => {
    // Set current path on component mount and listen for route changes
    setCurrentPath(window.location.pathname);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      // Reset manual toggle when returning to top
      if (scrollPosition === 0) {
        setIsManuallyToggled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if navbar should be expanded
  const isExpanded =
    !isScrolled || isHovered || isManuallyToggled || isMenuOpen;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isScrolled) {
      setIsManuallyToggled(!isManuallyToggled);
    }
  };

  const handleNavHover = () => {
    if (isScrolled) {
      setIsHovered(true);
    }
  };

  const handleNavLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <nav
              className={`hidden md:flex overflow-hidden items-center bg-white shadow-lg rounded-full transition-all  ease-out ${
                isExpanded ? "py-2 px-4 pl-2" : "py-1 px-2"
              }`}
              style={{
                width: isExpanded ? "auto" : "fit-content",
                minWidth: isExpanded ? "auto" : "40px",
              }}
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
            >
              <Link
                href="/"
                className="flex-shrink-0"
                onClick={handleLogoClick}
              >
                <div
                  className={`bg-primary rounded-full flex items-center justify-center transition-all  ease-out cursor-pointer ${
                    isExpanded ? "h-12 w-12" : "h-8 w-8"
                  }`}
                >
                  <span
                    className={`text-white font-bold transition-all  ease-out ${
                      isExpanded ? "text-xl" : "text-sm"
                    }`}
                  >
                    T
                  </span>
                </div>
              </Link>

              {/* Navigation items with improved animation */}
              <div
                className={`flex items-baseline space-x-4 transition-all  ease-out transform overflow-hidden ${
                  isExpanded
                    ? "ml-10 opacity-100 scale-x-100 translate-x-0 max-w-none"
                    : "ml-0 opacity-0 scale-x-0 -translate-x-4 max-w-0"
                }`}
                style={{
                  transformOrigin: "left center",
                  width: isExpanded ? "auto" : "0px",
                }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-3 py-2 rounded-full text-md font-medium transition-all whitespace-nowrap ${
                      isActive(item.path)
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Quote button with improved animation */}
          <div
            className={`hidden md:block transition-all  ease-out transform ${
              isExpanded
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 translate-x-4"
            }`}
          >
            <div className="whitespace-nowrap">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open main menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
