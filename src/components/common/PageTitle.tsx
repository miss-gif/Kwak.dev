const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <img
        className="h-40 w-full"
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
        alt="임시"
      />
      <p>{children}</p>
    </div>
  );
};

export default PageTitle;
