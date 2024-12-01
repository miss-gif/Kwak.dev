import Button from "@/components/Button";
import { useState } from "react";
import UserProfileEdit from "./UserProfileEdit";
import UserProfile from "./UserProfile";

const MypageHome = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-md bg-white p-6">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">회원정보</h2>
      <Button label={isEditing ? "취소" : "프로필 수정"} onClick={toggleEditMode} />
      {isEditing ? <UserProfileEdit /> : <UserProfile />}
    </div>
  );
};

export default MypageHome;
