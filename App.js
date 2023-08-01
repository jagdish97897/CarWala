import React from 'react';
import Clock from './CarWala/Clock';
import CarList from './CarWala/CarList';
import SearchBox from './CarWala/SearchBox';

const App = () => {
  return (
    <div>
      <h2>Current Time: <Clock /></h2>

      <h2>Search Cars:</h2>
      <SearchBox cars={[
      
          
      {
        id: 1,
        make: "Mitsubishi",
        model: "Lancer",
        type: "Used",
        price:"400000"
      },
      { id: 2, make: "Honda", model: "Vezel", type: "New",price:"100000" },
      { id: 3, make: "Honda", model: "Civic", type: "Used",price:"20000" },
      { id: 4, make: "Audi", model: "A3", type: "New" ,price:"68783"},
      { id: 5, make: "Audi", model: "A4", type: "Used",price:"8788" },
      { id: 6, make: "Audi", model: "A7", type: "New" ,price:"9000000"},
      { id: 7, make: "BMW", model: "i8", type: "Used",price:"700000" }
        // Add more cars here...
      ]} />
   
      <h2>Car List:</h2>
      <CarList />
      </div>
  );
};

export default App;