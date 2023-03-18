import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTambahJadwal = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [msg, setMsg] = useState("");
  // const navigate = useNavigate();

  // const saveProduct = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/jadwal", {
  //       name: name,
  //       price: price,
  //     });
  //     navigate("/jadwal");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };

  return (
    <div>
      <h1 className="title">jadwal</h1>
      <h2 className="subtitle">Add New Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit='{ }'>
              <p className="has-text-centered">{ }</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTambahJadwal;