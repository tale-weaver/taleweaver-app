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
        href="/api/auth/signin"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/api/auth/signin")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Sign In
      </Link>
      <Link
        href="/api/auth/signout"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/api/auth/signout")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Sign Out
      </Link>
      <Link
        href="/server"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/server")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Server
      </Link>
      <Link
        href="/client"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/client")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Client
      </Link>
      <Link
        href="/extra"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/extra")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Extra
      </Link>
    </nav>
  );
};

export default MainNav;
