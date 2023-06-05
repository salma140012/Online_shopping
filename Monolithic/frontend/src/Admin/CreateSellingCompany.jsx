import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CreateSellingCompany = () => {
  const [sellingCompanyName, setsellingCompanyName] = useState("");
  const history = useHistory(); // create a history object using useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sellingCompanyName);

    axios
      .put("http://localhost:8080/OnlineShoppingApplication-1.0-SNAPSHOT/api/admin/createSellingCompany", { sellingCompanyName })
      .then((response) => {
        console.log(response.data);
        history.push("/admin/dashboard"); // redirect to "/sellingcompany/dashboard"
      })
      .catch((error) => {
        console.log(error);
        // add logic to handle error response from server
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Create Selling Company</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sellingCompanyName">Company Name:</label>
        <input
          type="text"
          id="sellingCompanyName"
          name="sellingCompanyName"
          value={sellingCompanyName}
          onChange={(e) => setsellingCompanyName(e.target.value)}
        />
        <button type="submit">Create Company</button>
      </form>
    </div>
  );
};
