import React from 'react';

const Leaderboard3 = ({ info, currentPage, setCurrentPage, recordsPerPage }) => {
  const lastIndexOfCurrentPage = currentPage * recordsPerPage;
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - recordsPerPage;

  const currentRecords = info.slice(
    firstIndexOfCurrentPage,
    lastIndexOfCurrentPage
  );

  const totalPageCount = Math.ceil(info.length / recordsPerPage);
  const pageNumbers = [...Array(totalPageCount).keys()].map((num) => num + 1);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-auto p-4 bg-yellow-100">
      <div>
        <table className="w-full px-4 bg-orange-200 border border-gray-300 rounded-2xl">
          <thead>
            <tr className="bg-gray-100 rounded-2xl">
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4">Github ID</th>
              <th className="py-2 px-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((val, index) => (
              <tr key={index} className="hover:bg-yellow-200">
                <td className="py-2 px-4">{val.Position}</td>
                <td className="py-2 px-4">{val.Github_Id}</td>
                <td className="py-2 px-4">{val.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="pt-4 flex justify-center">
          <ul className="flex list-none">
            <li className="mr-2">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number} className="mr-2">
                <button
                  className={`bg-orange-500 text-white px-4 py-2 rounded ${
                    currentPage === number ? 'bg-yellow-500' : ''
                  }`}
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={nextPage}
                disabled={currentPage === totalPageCount}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Leaderboard3;
