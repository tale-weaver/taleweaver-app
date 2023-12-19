export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/story/:path*",
    "/storyupload/:path*",
    "/subscription/:path*",
    "/profile",
  ],
};
