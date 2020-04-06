import React from 'react';
import foods from '../../fakeData/fakeData';

const InsertData = () => {

    const handleAddInventory = () => {
        const product = foods[0];
        console.log("Before post", foods.length);
        fetch('http://localhost:4000/addProduct', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(foods) 
          })
          .then(res => res.json())
          .then(data => {
            console.log("Post Success", data);
        });
  
    }

    return (
        <div>
            <h1>Inser Data</h1>
            <button onClick={handleAddInventory} >Insert Data</button>
        </div>
    );
};

export default InsertData;