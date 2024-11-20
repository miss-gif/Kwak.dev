const UrlCopyButton = () => {
  const handleCopyUrl = async () => {
    try {
      const currentUrl = window.location.href; // 현재 URL 가져오기
      await navigator.clipboard.writeText(currentUrl); // 클립보드에 복사
      alert("URL이 복사되었습니다!"); // 사용자 알림
    } catch (error) {
      console.error("URL 복사 실패:", error);
      alert("URL 복사에 실패했습니다.");
    }
  };

  return (
    <button
      className="rounded-md px-2 py-3 text-sm hover:bg-fire hover:text-white"
      onClick={handleCopyUrl}
    >
      URL 복사
    </button>
  );
};

export default UrlCopyButton;
