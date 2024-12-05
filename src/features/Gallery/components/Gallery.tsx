const URL = "https://via.placeholder.com/500.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 xl:grid-cols-4">
      <div className="">
        <img src={URL} alt="" />
      </div>
      <div className="">
        <img src={URL} alt="" />
      </div>
      <div className="">
        <img src={URL} alt="" />
      </div>
      <div className="">
        <img src={URL} alt="" />
      </div>
      <div className="">
        <img src={URL} alt="" />
      </div>
      <div className="">
        <img src={URL} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
