const OverviewList = ({data}) => {
  return (
      <ul className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
        {data.map((item) => (
            <li key={item} className="text-[1rem] leading-8">
              <p>{item}</p>
            </li>
        ))}
      </ul>
  );
};

export default OverviewList;