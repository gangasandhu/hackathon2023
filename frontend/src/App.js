import './App.css';
import { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (query) => {
    // Here, you can implement the logic to perform a search
    // For simplicity, let's assume we're just updating state with some mock results
    const mockResults = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
    ];

    setSearchResults(mockResults);
    console.log(mockResults)
  };
  return (
    <div>
      <NavbarComponent />
      <SearchBar onSearch={handleSearch}/>
    </div>
  );
}

export default App;
