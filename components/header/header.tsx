import { NavContainer } from "./nav-container";

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <NavContainer />
      {/* TODO: <MobileNav /> */}
      {/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            ></Link>
            <ModeToggle />
          </nav>
        </div> */}
    </header>
  );
};

export default Header;
