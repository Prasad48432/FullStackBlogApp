import * as React from "react";
import { useState, useEffect } from 'react';
import { submitComment } from '../services';
import {ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  const notify = () =>{
    toast.success('Comment submitted for review', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          notify()
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 500);
        }
      });
  };

  let commentValue;
  if(formData.comment === null){
    commentValue = " "
  }
  else{
    commentValue = formData.comment
  }
  let nameValue;
  if(formData.name === null){
    nameValue = " "
  }
  else{
    nameValue = formData.name
  }
  let emailValue;
  if(formData.email === null){
    emailValue = " "
  }
  else{
    emailValue = formData.email
  }

  return (
    <>
    <div className="bg-white dark:bg-onbg-color-dk shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 dark:text-variant-color-dk border-variant-color-dk ">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={commentValue} onChange={onInputChange} className=" p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 dark:focus:ring-variant-color-dk bg-gray-100  lg:bg-gray-200 text-gray-700 dark:bg-[#3b3c3d] dark:text-gray-400 dark:placeholder-blue-100" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={nameValue} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-variant-color-dk bg-gray-100 lg:bg-gray-200  text-gray-700 dark:text-gray-400 dark:bg-[#3b3c3d] dark:placeholder-blue-100" placeholder="Name" name="name" />
        <input type="email" value={emailValue} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-variant-color-dk  bg-gray-100  lg:bg-gray-200  text-gray-700 dark:bg-[#3b3c3d] dark:text-gray-400" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="p-3">
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer text-base ml-2" htmlFor="storeData">Remember me</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button type="button" data-type="post" onClick={handlePostSubmission} className="transition duration-500 ease bg-indigo-700 inline-block outline outline-2 outline-indigo-700 text-sm font-medium rounded-full text-white hover:text-black hover:bg-white px-8 py-3 cursor-pointer interactable">Post Comment</button>
        {showSuccessMessage 
        && 
        <span className="text-sm float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default CommentsForm;