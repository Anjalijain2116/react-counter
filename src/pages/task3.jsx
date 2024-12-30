import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../store/userSlice.tsx';
import {RootState} from '../store/store.tsx'
import { useForm } from 'react-hook-form';

const Task3 = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset();
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        <input {...register('email', { required: true })} placeholder="Email" />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
            <button onClick={() => dispatch(updateUser({ ...user, name: 'Updated Name' }))}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task3;