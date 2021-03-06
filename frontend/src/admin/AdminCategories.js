import React, { useState } from 'react';

import Table, {TableHeader, TableRow} from '../shared/UIElements/Table';

import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';

import './AdminCategories.css';
import Uploader from '../shared/component/uploader';

const AdminCategories = () => {
  const DUMMYDATA = [
    {name:"Cat0", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat1", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat2", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat3", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat4", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat5", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat6", details:"It is a cat.", image:"cat_image.png"},
    {name:"Cat7", details:"It is a cat.", image:"cat_image.png"}
  ];

  const [categories, setCategories] = useState(DUMMYDATA);
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
        value: '',
        isValid: false
      }
    },
    false
  );

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

  const editCategory = async event => {};

  const saveCategory = async event => {};

  const deleteCategory = async (categoryID) => {
    try {
      //
      setCategories(cats=>cats.filter((c, i)=>i !== categoryID));
    } catch {
      
    }
     console.log(categoryID);
  };

  return (
    <div className="admin-categories">
      <p>The Categories</p>
      <form className="admin-categories-new" onSubmit={createCategory}>
        <input name="name" onInput={inputHandler} type="text" placeholder="Title"/>
        <input name="details" onInput={inputHandler} type="text" placeholder="Description"/>
        <input name="image" type="text" placeholder="Upload an image" disabled/>
        <input type="submit" value="Save"/>
      </form>

      <Uploader fileFilter=".jpg,.png,.jpeg" onUploadDone={vals=>{inputHandler('image', vals[0], true)}}  />

      <Table
        isStriped
        isDark
        header={<TableHeader th={["Title", "Description", "Image", "Action"]}/>} 
        rows={categories.map((v, i)=><TableRow key={i} td={[
          v.name,
          v.details,
          v.image, 
          <>
            <button onClick={()=>{editCategory(i)}}>Edit</button>
            <button onClick={()=>{deleteCategory(i)}}>Delete</button>
          </>
        ]}/>)}
      />
    </div>
  )
};

export default AdminCategories;