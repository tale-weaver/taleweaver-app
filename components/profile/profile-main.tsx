import React from "react";
import ProfileRight from "./profile-right";
import ProfileLeft from "./profile-left";

const ProfileMain = () => {
  return (
    <div className="h-[calc(100vh-161px)] flex flex-row">
      <div className="w-2/3">
        <ProfileRight />
      </div>
      <div className="w-1/3 border-l">
        <ProfileLeft />
      </div>
    </div>
  );
};

export default ProfileMain;
