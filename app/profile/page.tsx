import Demo from "@/components/profile/demo";
import StoryPageMain from "@/components/storypage/story-page-main";

export default async function Profile() {
  return (
    <div>
      <p>
        This is a profile page. You can only see this page if you are signed in.
      </p>
      <Demo />
      <StoryPageMain />
    </div>
  );
}
