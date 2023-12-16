import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Mainpage from '@/components/MainPage/Mainpage'

export default async function HomePage() {
  const session = await getServerSession(options);
  return (
    <div>
      <Mainpage/>
      {session ? (
        <p>Logged in as {session?.user?.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

