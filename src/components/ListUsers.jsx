import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import { BiAddToQueue } from 'react-icons/bi';
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

const usersUrl = process.env.REACT_APP_USERS_URL;

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(usersUrl);
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    const urlById = `${usersUrl}/${userId}`;
    await axios.delete(urlById);
    getUsers();
  };
  return (
    <div className="container-fluid" >
      <NavAdmin/>
      <Link role={'button'} className="outline" to={`/users/add`}>
            <BiAddToQueue />
        </Link>
      <table role='grid'>
        <thead>
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
                    <kbd style={{"backgroundColor":'yellow', "color":"black", fontSize:"20px"}}><FiEdit/></kbd>
                  </Link> &nbsp;
             
                  <Link
                    onClick={() => {
                      if (window.confirm("Apakah Anda yakin ingin menghapus User ini?")) {
                        window.alert('Hapus user berhasil!')
                        deleteUser(user.uuid);
                      }
                    }}
                  >
                    <kbd style={{ backgroundColor: "red", fontSize:"20px" }}><IoMdTrash/></kbd>
                  </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListUsers