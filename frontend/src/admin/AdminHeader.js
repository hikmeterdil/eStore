import React from 'react';
import {Link} from 'react-router-dom';

import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <nav className="admin-nav">
      <Link to="/admin">Home</Link>
      <Link to="/admin/categories">Categories</Link>
      <Link to="/admin/products">Products</Link>
    </nav>
  )
};

export default AdminHeader;