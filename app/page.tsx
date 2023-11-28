import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div>
      {session ? (
        <p>Logged in as {session?.user?.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
