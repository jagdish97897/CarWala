import React from 'react';

const CarList = () => {
  const cars = [
    // { make: 'Honda', model: 'Vezel', status: 'New', price: 2000 },
    // { make: 'Honda', model: 'Civic', status: 'Used', price: 3000 },


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


  ];

  return (
    <>
    <table>
      <tr>
               <th style={{ border: '2px solid red', padding: '60px' }}>Id</th>
               <th style={{ border: '2px solid yellow', padding: '60px' }}>Maker</th>
               <th style={{ border: '2px solid green', padding: '60px' }}>Model</th>
               <th style={{ border: '2px solid yellow', padding: '60px' }}>Type</th>
               <th style={{ border: '2px solid blue', padding: '60px' }}>Price</th>


      </tr>


    {cars.map((car, index) => (
        <tr key={index}>
          {/* - {car.make} {car.model} - {car.status} - ${car.price} */}

          {/* - {car.id}- {car.make} {car.model} - {car.type}  */}

              {/* <td style={{ border: '1px solid #ccc', padding: '60px' }}>{index + 1}</td> */}
               <td style={{ border: '2px solid red', padding: '60px' }}>{car.id}</td>
               <td style={{ border: '2px solid yellow', padding: '60px' }}>{car.make}</td>
               <td style={{ border: '2px solid green', padding: '60px' }}>{car.model}</td>
               <td style={{ border: '2px solid orange', padding: '60px' }}>{car.type}</td>
               <td style={{ border: '2px solid blue', padding: '60px' }}>{car.price}</td>
        </tr>
      ))}


    </table>
      
    </>
  );
};

export default CarList;
