import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../store/userSlice.tsx';
import {RootState} from '../store/store.tsx'
import { useForm } from 'react-hook-form';

const Task3 = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const { register, handleSubmit, reset,setValue,formState: { errors } } = useForm();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (selectedUser) {
      setValue("name", selectedUser.name);
      setValue("email", selectedUser.email);
    }
  }, [selectedUser, setValue]);

  const onSubmit = (data) => {
    if (selectedUser) {
      dispatch(updateUser({ ...selectedUser, ...data }));
      setSelectedUser(null);
    } else {
      dispatch(addUser(data));
    }
    reset();
  };

  return (
    <div>
      <h1 className="welcome">User Management Dashboard</h1>
     <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
        <div>
        <input {...register('name', { required: "Name is required" })} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
        <input {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
        <button className="btn1" type="submit">
            {selectedUser ? "Update User" : "Add User"}
          </button>
          </div>
          </div>
      </form>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li className="li"key={user.id}>
            {user.name} ({user.email}) &nbsp;
            <button className="btn1"onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
            <button className="btn1"onClick={() => setSelectedUser(user)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Task3;