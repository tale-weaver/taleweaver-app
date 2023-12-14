import Demo from "@/components/profile/demo";

export default async function Profile() {
  return (
    <div>
      <p>
        This is a profile page. You can only see this page if you are signed in.
      </p>
      <Demo />
    </div>
  );
}
