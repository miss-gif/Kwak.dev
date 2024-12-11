const PageTitle = ({ children }: { children: React.ReactNode }) => {
  const URL =
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png";

  return (
    <div>
      <img className="h-40 w-full" src={URL} alt="임시" />
      <p>{children}</p>
    </div>
  );
};

export default PageTitle;
