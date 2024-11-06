const HomeNotice = () => {
  return (
    <div className="flex max-h-80 flex-col gap-2 rounded border border-gray-400 p-3">
      <h3 className="line-clamp-1 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
        odio tempora. Cum rerum, quis pariatur blanditiis corrupti saepe.
        Excepturi blanditiis esse repellat pariatur non ex nemo minima porro
        dicta ut.
      </h3>
      <p className="line-clamp-2 text-xs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
        odio tempora. Cum rerum, quis pariatur blanditiis corrupti saepe.
        Excepturi blanditiis esse repellat pariatur non ex nemo minima porro
        dicta ut.
      </p>
      <span className="text-sm text-gray-500">2022-12-22</span>
    </div>
  );
};

export default HomeNotice;
