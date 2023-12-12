"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/about")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        About
      </Link>
      <Link
        href="/profile"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/profile")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Profile
      </Link>
    </nav>
  );
};

export default MainNav;
