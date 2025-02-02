const OverviewList = ({data}) => {
  return (
      <ul>
        {data.map(item => (
            <li key={item}>{item}</li>
        ))}
      </ul>
  );
};

export default OverviewList;