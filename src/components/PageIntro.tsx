interface PageIntroProps {
  text: {
    title: string;
    content: string[];
  };
}

const PageIntro = ({ text }: PageIntroProps) => {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-screen-xl flex-col gap-3 rounded-xl bg-zinc-100 bg-opacity-10 p-6 shadow-md">
      <h3 className="text-xl font-semibold">{text.title}</h3>
      <p className="text-sm leading-5">
        {text.content.map((content, index) => (
          <>
            <span key={index}>{content}</span>
            <br />
          </>
        ))}
      </p>
    </section>
  );
};

export default PageIntro;
