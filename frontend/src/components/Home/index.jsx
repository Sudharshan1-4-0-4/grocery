import React, { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner'; // Ensure this is correctly imported
import Product from '../Product'; // Ensure the path is correct
import './index.css';


// const Home = () => {
  

//   useEffect(() => {
//     const getLeaderboardData = async () => {
      
//       const url = 'http://localhost:4001/products/';
//       const options = {
//         method: 'GET',
//       };

     
//         const response = await fetch(url, options);
//         const responseData = await response.json();

//         if (response.ok) {
            
//              <Product leaderboardData={responseData} />;
//         } else {
//           console.log("error occured...")
//         }
    
//     };

//     getLeaderboardData();
//   });

  

  

 

  

//   return <div>

//     <h1>hello</h1>
//   </div>;
// };

// export default Home;


const Home = ()=>{

    const [data, setData] = useState();

    useEffect(() => {

            const getLeaderboardData = async () => {
              
              const url = 'http://localhost:4001/products/';
              const options = {
                method: 'GET',
              };
        
             
                const response = await fetch(url, options);
                const responseData = await response.json();
        
                if (response.ok) {
                    console.log("api called...");
                    console.log(responseData);
                    setData(responseData);
                     
                } else {
                  console.log("error occured...")
                }
            
            };
            getLeaderboardData();
      },[]);



    return (

       <div className='entier'>
       <div className='heading'>
          <h1 >Find the Products Here...👉</h1>
          <h4 >"Discover a wide selection of fresh produce, pantry staples, and gourmet treats to stock your kitchen."</h4>
       </div>
       
        <Product data={data} />
       </div>
            
            
       
        
    )

}

export default Home;
