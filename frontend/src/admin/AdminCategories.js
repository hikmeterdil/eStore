import React from 'react';

import Table, {TableHeader, TableRow} from '../shared/UIElements/Table';

import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';

import './AdminCategories.css';

const AdminCategories = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      details: {
        value: '',
        isValid: false
      },
      image: {
        value: null,
        isValid: false
      }
    },
    false
  );

  const DUMMYDATA = [
    {name:"Cat", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat", details:"It is a cat.", image:"cat_image.png"}
  ]

  const createCategory = async event => {
    event.preventDefault();
    try{
      const formData = new FormData();
      formData.append('name', formState.inputs.name.value);
      formData.append('details', formState.inputs.details.value);
      formData.append('image', formState.inputs.image.value);
      // await sendRequest(`${process.env.REACT_APP_API_URL}/admin/category`, 'POST', formData, {Authorization: 'Bearer ' + auth.token});
      // history.push('/');
    } catch {}
  };


  return (
    <div className="admin-categories">
      <p>The Categories</p>
      <form className="admin-categories-new" onSubmit={createCategory}>
        <input name="name" type="text" placeholder="Title"/>
        <input name="details" type="text" placeholder="Description"/>
        <input name="image" type="file"/>
        <input type="submit" value="Save"/>
      </form>

      <Table
        isStriped
        isDark
        header={<TableHeader th={["Title", "Description", "Image", "Action"]}/>} 
        rows={DUMMYDATA.map(v=><TableRow td={[
          v.name,
          v.details,
          v.image, 
          <button>Jhonny</button>
        ]}/>)}
      />

    </div>
  )
};

export default AdminCategories;