import React, { useState, useEffect } from 'react';
import Leaderboard3 from '../Leaderboard3';

const Leaderboard2 = ({ array }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(array);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const handleFiltersChange = () => {
    let updatedData = array;

    if (selectedCompany !== '') {
      updatedData = updatedData.filter(item => item.company === selectedCompany);
    }

    if (selectedGender !== '') {
      updatedData = updatedData.filter(item => item.gender === selectedGender);
    }

    // Filter by search input
    if (searchInput.trim() !== '') {
      const searchTerm = searchInput.trim().toLowerCase();
      updatedData = updatedData.filter(item =>
        item.Github_Id.toLowerCase().includes(searchTerm) 
        
      );
    }

    setFilteredData(updatedData);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleFiltersChange();
  }, [selectedCompany, selectedGender, searchInput, array]);

  return (
    <div className='w-screen h-screen bg-yellow-100'>
      <div className='pt-20'>
        <h1 className="font-display text-orange-900 text-center font-Vsoc text-3xl font-extrabold leading-none mb-10 tracking-tight md:text-5xl lg:text-6xl lg:mb-24">
          Leaderboard
        </h1>
      </div>
      <div className='ml-10 mr-10'>
        <input
          type="search"
          placeholder="Search here"
          className="w-full sm:m-auto ml-0 rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none justify-center items-center"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <Leaderboard3
        info={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        recordsPerPage={recordsPerPage}
      />
    </div>
  );
};

export default Leaderboard2;
