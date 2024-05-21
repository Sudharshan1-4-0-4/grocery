import React, { useState, useEffect } from 'react';
// import Loader from 'react-loader-spinner'; // Ensure this is correctly imported
import Product from '../Product'; // Ensure the path is correct
import './index.css';

import File from '../File';

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
  const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState();
    // const [placed, setPlaced] = useState(false);
    const [details, setDetails] = useState();

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


      const registrationForm = (product_id) =>{
            // setPlaced(true);
            console.log(product_id);
            setIsVisible(true);
            setDetails(product_id);
            // return <File product_id= {product_id}/>
            console.log("order placed..");
            
      };
      
      const handleParentClick = (event) => {
        console.log("handle..")
        console.log(event.target.className);
        if (event.target.className === 'orders-container') {
          setIsVisible(false);
        }
      };

    return (
      <div className='parent-container' onClick={handleParentClick}>
        {/* {placed ? (<File product_id= {details}/>)
                 :
          (
                <div className='entier'>
                    <div className='heading'>
                        <h1 >Find the Products Here...👉</h1>
                        <h4 >"Discover a wide selection of fresh produce, pantry staples, and gourmet treats to stock your kitchen."</h4>
                    </div>
                  
                      <Product data={data} click = {registrationForm} />
                </div>
            )
            } */}
            <div className='entier'>
                    <div className='heading'>
                        <h1 >Find the Products Here...👉</h1>
                        <h4 >"Discover a wide selection of fresh produce, pantry staples, and gourmet treats to stock your kitchen."</h4>
                    </div>
                  
                    <Product data={data} click = {registrationForm} />
            </div>

            {isVisible && <File product_id = {details}/>}
      </div>
      
       
        
    )

}

export default Home;
