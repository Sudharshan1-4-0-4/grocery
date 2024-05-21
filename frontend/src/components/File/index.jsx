import React from "react";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
// import Cookies from 'js-cookie';
import './index23.css';
import Thanks from "../Thanks";


const File = ({product_id}) => {

    
    
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [showSubmitError, setShowSubmitError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
 const[user_name, setUser] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const onChangeUser = (event) => {
    setUser(event.target.value);
  };

 

  const submitForm = async (event) => {
    event.preventDefault();


     

    const userDetails = { product_id, user_name, address };
    const url = "http://localhost:4001/orders/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    // console.log(response);
    if (response.ok) {
      console.log("navigated");
      setIsPopupVisible(true);
      setUser("");
      setAddress("");
    } else {
      console.log("error occured...");
      setShowSubmitError(true);
      setErrorMsg("Invalid Credentials");
    }
  };

 
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="orders-container" >
      <form className="form1-container" onSubmit={submitForm}>
        <h1 className="heading">...OUR PRODUCT...👌</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            ORDER_ID
          </label>
          <input
            type="text"
            id="username"
            value={0}
            className="username-input-field"
            
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="phone">
            PRODUCT_ID
          </label>
          <input
            type="text"
            id="phone"
            value={product_id}
            className="username-input-field"
            
            placeholder="Phone"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            USER_NAME
          </label>
          <input
            type="text"
            id="name"
            value={user_name}
            className="username-input-field"
            onChange={onChangeUser}
            placeholder="Name"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="add">
            ADDRESS
          </label>
          <input
            type="text"
            id="add"
            value={address}
            className="password-input-field"
            onChange={onChangeAddress}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-button">
          Place Order
        </button>
        {showSubmitError ? (
  <p className="error-message">*{errorMsg}</p>
) : (
  isPopupVisible && <Thanks onClose={closePopup} />
)}

      
      
        
       
      </form>
     
    </div>
  );
};

export default File;
