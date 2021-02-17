import React from 'react';

import './AdminCategories.css';

const AdminCategories = () => {
  return (
    <div className="admin-categories">
      <p>The Categories</p>
      <div className="admin-categories-new">
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Description"/>
        <input type="file"/>
        <input type="submit" value="Save"/>
      </div>
      <table class="table-dark table-striped">
        <thead>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>Cat</td>
            <td>It is a cat.</td>
            <td>image.jpg</td>
            <td>Edit/Delete</td>
          </tr>
          <tr>
            <td>Cat</td>
            <td>It is a cat.</td>
            <td>image.jpg</td>
            <td>Edit/Delete</td>
          </tr>
          <tr>
            <td>Cat</td>
            <td>It is a cat.</td>
            <td>image.jpg</td>
            <td>Edit/Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default AdminCategories;