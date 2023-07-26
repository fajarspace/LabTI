import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "./Menu/Sidebar";
// import { BiAddToQueue } from 'react-icons/bi';
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import Navbar from "./Menu/Navbar";
import Footer from "./Menu/Footer";

const usersUrl = process.env.REACT_APP_BASE_URL;
const yahahah = `${usersUrl}/users`;
const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(yahahah);
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    const urlById = `${yahahah}/${userId}`;
    await axios.delete(urlById);
    getUsers();
  };
  return (
    <>
      <div className="wrapper">
        <div className="body-overlay" />
        <Sidebar />
        {/* Page Content  */}
        <div id="content">
          <Navbar />
          <div className="main-content">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="card p-3" style={{ minHeight: 485 }}>
                  <div className="card-content table-responsive">
                    <table id="myTable" className="table table-hover">
                      <thead className="text-primary">
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.nama}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                              <Link
                                to={`/users/edit/${user.uuid}`}
                                className="button is-small is-info mr-2"
                              >
                                <kbd
                                  style={{
                                    backgroundColor: "yellow",
                                    color: "black",
                                    fontSize: "20px",
                                  }}
                                >
                                  <FiEdit />
                                </kbd>
                              </Link>{" "}
                              &nbsp;
                              <Link
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Apakah Anda yakin ingin menghapus User ini?"
                                    )
                                  ) {
                                    window.alert("Hapus user berhasil!");
                                    deleteUser(user.uuid);
                                  }
                                }}
                              >
                                <kbd
                                  style={{
                                    backgroundColor: "red",
                                    fontSize: "20px",
                                  }}
                                >
                                  <IoMdTrash />
                                </kbd>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
