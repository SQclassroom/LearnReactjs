import React, { useState , useEffect } from 'react'

const Useffect = () => {


  const [state , setState]  = useState(2);
  const [data , setData]  = useState([]);

  useEffect(() =>{
    async function getdata(){
      const get  = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}10&idStarts=1001`);

      const response =await get.json();
      setData(response)
      console.log(response);
    }

    getdata();
  } , [state])

  return (
    <div>
      <button onClick={() => setState(state)}>Click Me {state}</button>
      {
        data.map((element, index) => {
          return(
            <div>
              <h4>{element.firstName}</h4>
              <h4>{element.firstLast}</h4>
              <h1>{element.email}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Useffect;