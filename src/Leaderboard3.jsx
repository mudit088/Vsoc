import React, { useState } from 'react';


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
    <div className=" mx-auto p-4 sm : m-0">
       <div className="">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Position</th>
            <th className="py-2 px-4">Github_Id</th>
            <th className="py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((val) => (
            <tr key={val.info} className="hover:bg-gray-50 ">
              <td className="py-2 flex items-center justify-center ">{val.Position}</td>
              <td className="py-2 flex items-center justify-center">{val.Github_Id}</td>
              <td className="py-2 ">{val.Score}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="mt-4 flex justify-center">
        <ul className="flex list-none ">
          <li className="mr-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="mr-2">
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded ${
                  currentPage === number ? 'bg-blue-700' : ''
                }`}
                onClick={() => changeCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
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


export default Leaderboard3
