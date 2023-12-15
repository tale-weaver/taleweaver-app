import { NavContainer } from "./nav-container";

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <NavContainer />
      {/* TODO: <MobileNav /> */}
    </header>
  );
};

export default Header;
