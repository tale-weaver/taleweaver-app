"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Demo() {
  const queryUser = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000/user");
    return data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["profile"],
    queryFn: queryUser,
  });

  return (
    <div>
      <p>
        This is a profile page. You can only see this page if you are signed in.
      </p>
      <p>Here is your profile:</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>loading...</p>}
    </div>
  );
}
