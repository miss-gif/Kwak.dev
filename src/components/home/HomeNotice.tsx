interface HomeNoticeProps {
  title: string;
  image: string;
}

const HomeNotice = ({ title, image }: HomeNoticeProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white bg-opacity-90">
      <img src={image} alt={title} />
    </div>
  );
};

export default HomeNotice;
