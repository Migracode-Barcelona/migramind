import React, { useState } from "react";

const Test = () => {
    const [test, setTest] = useState([    {
      "id": 1,
      "name": "hola"
  }]);

    const handleTest = () => {
      fetch('http://localhost:5000/names')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setTest(data)
      })
      console.log('hey hay')
    }
    return(
        <div>
          <button className='test-button' onClick={handleTest}>MigraMind</button>
          {test.map((item)=> {
            return (
              <p key={item.id}> {item.name}</p>
            )
          })}
        </div>
    )
}

export default Test;
