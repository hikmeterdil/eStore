import React from 'react';
import {Route} from 'react-router-dom';

import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminCategories from './AdminCategories';
import AdminProducts from './AdminProducts';

import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-home">
      <AdminHeader/>
      <Route path="/admin/categories" component={AdminCategories}/>
      <Route path="/admin/products" component={AdminProducts}/>
      <AdminFooter/>
    </div>
  )
};

export default Admin;