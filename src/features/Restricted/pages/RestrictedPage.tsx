import { useEffect, useState } from "react";
import { changeSitePublicState, sitePublicState } from "@/utils/sitePublicState";
import { useNavigate } from "react-router-dom";

const RestrictedPage = () => {
  const [isPublic, setIsPublic] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const newState = !isPublic;
    setIsPublic(newState);
    changeSitePublicState(newState);
  };

  useEffect(() => {
    const fetchState = async () => {
      const state = await sitePublicState();

      console.log("Public state: ", state);

      setIsPublic(state);
    };

    fetchState();
  }, []);

  useEffect(() => {
    if (isPublic) {
      navigate("/");
    } else {
      console.log("비공개 상태입니다.");
    }
  }, [isPublic]);

  return (
    <div>
      <p>{isPublic ? "현재 공개 상태입니다" : "현재 비공개 상태입니다"}</p>
      <button onClick={handleButtonClick}>{isPublic ? "사이트 비공개로 변경하기" : "사이트 공개로 변경하기"}</button>
    </div>
  );
};

export default RestrictedPage;
