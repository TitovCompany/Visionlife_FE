import {useState} from 'react';

const usePagenation = <T>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};

export default usePagenation;
