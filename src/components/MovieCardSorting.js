
import React, { useState } from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import moviesData from '../moviesData';

const MovieCardSorting = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleFilter = (filterType, value) => {
    let filtered = [...moviesData];

    switch (filterType) {
      case 'genre':
        filtered = filtered.filter(movie => movie.genre.includes(value));
        setSelectedGenre(value);
        break;
      case 'year':
        filtered = filtered.filter(movie => movie.year === value);
        setSelectedYear(value);
        break;
      case 'company':
        filtered = filtered.filter(movie => movie.production_company === value);
        setSelectedCompany(value);
        break;
      default:
        break;
    }

    setFilteredMovies(filtered);
  };

  const resetFilter = () => {
    setFilteredMovies(moviesData);
    setSelectedGenre('');
    setSelectedYear('');
    setSelectedCompany('');
  };

  return (
    <div className="container">
      <h2>Movie List</h2>
      <ButtonGroup className="mb-3">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="primary" id="genreDropdown">
            Genre
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilter('genre', 'Sci-Fi')}>Sci-Fi</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('genre', 'Adventure')}>Adventure</Dropdown.Item>
            {/* Add more genre options */}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="primary" id="yearDropdown">
            Release Year
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilter('year', 2023)}>2023</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('year', 2022)}>2022</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('year', 2021)}>2021</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('year', 2020)}>2020</Dropdown.Item>


            {/* Add more year options */}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle variant="primary" id="companyDropdown">
            Production Company
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilter('company', 'Warner Bros. Pictures')}>Warner Bros. Pictures</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Paramount Pictures')}>Paramount Pictures</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Focus Features')}>Focus Features</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Walt Disney Pictures')}>Walt Disney</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Universal Pictures')}>Universal Pictures</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Netflix')}>Netflix</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Legendary Entertainment')}>Legendary Entertainment</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'CJ Entertainment')}>CJ Entertainment</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Sony Pictures Entertainment')}>Sony Pictures Entertainment</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'MGM Studios')}>MGM Studios</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', '20th Century Studios')}>20th Century Studios</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Lionsgate')}>Lionsgate</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Neon/Hulu')}>Neon/Hulu</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'STX Entertainment')}>STX Entertainment</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'Searchlight Pictures')}>Searchlight Pictures</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('company', 'A24')}>A24</Dropdown.Item>

            {/* Add more company options */}
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-secondary" onClick={resetFilter}>Reset</button>
      </ButtonGroup>
      <ul className="list-group">
        {filteredMovies.map(movie => (
          <li key={movie.id} className="list-group-item">
            {movie.title} - {movie.genre} - {movie.year} - {movie.production_company}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCardSorting;

