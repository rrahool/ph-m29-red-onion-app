import React from 'react';
import foods from '../../fakeData/fakeData';

const InsertData = () => {

    const handleAddFoods = () => {
        const product = foods[0];
        console.log("Before post food", foods.length);
        fetch('http://localhost:4000/addProduct', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(foods) 
          })
          .then(res => res.json())
          .then(data => {
            console.log("Food Post Success", data);
        });
  
    }


    return (
        <div>
            <h1>Inser Data</h1>
            <button onClick={handleAddFoods} >Insert Foods</button><br/><br/>
        </div>
    );
};

export default InsertData;