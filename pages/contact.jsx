import React from 'react';
import { useState, useEffect } from 'react';
import {HiOutlineUserAdd} from 'react-icons/hi';
import { submitContact } from '../services';
import {ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });


  const notify = () =>{
    toast.success('Sent!', {
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
    const { name, email, message, storeData } = formData;
    if (!name || !email || !message) {
      setError(true);
      return;
    }
    const messageObj = {
      name,
      email,
      message,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitContact(messageObj)
      .then((res) => {
        if (res.createContact) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.message = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          notify()
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2500);
        }
      });
  };


  let messageValue;
  if(formData.message === null){
    messageValue = " "
  }
  else{
    messageValue = formData.message
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
      <div className="h-[100px]"></div>
      <h2 className="text-4xl font-bold text-center p-5">
        {""}
        <span className="text-indigo-700 underline decoration-indigo-700 dark:text-variant-color-dk dark:decoration-variant-color-dk">
          Contact us
        </span>
      </h2>
      <section className="mb-32 text-gray-800">
        <div className="container text-gray-800 px-4 md:px-12">
          <div className=" rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 mt-[50px] bg-[hsla(0, 0%, 100%, 0.8)]">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      value={nameValue}
                      onChange={onInputChange}
                      className="form-control 
                      dark:placeholder:text-blue-300 w-full px-3 py-1.5 text-base font-normal dark:text-gray-200  text-gray-700 bg-white dark:bg-onbg-color-dk bg-clip-padding border border-solid border-gray-300 dark:border-[#40649D] rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-variant-color-dk  focus:outline-none"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      value={emailValue}
                      onChange={onInputChange}
                      placeholder="Email"
                      name="email"
                      className="form-control block
                      dark:placeholder:text-blue-300  w-full  px-3  py-1.5  text-base  font-normal dark:text-gray-200  text-gray-700  bg-white  dark:bg-onbg-color-dk  bg-clip-padding  border border-solid border-gray-300  dark:border-[#40649D]  rounded  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-variant-color-dk  focus:outline-none"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      value={messageValue}
                      onChange={onInputChange}
                      name="message"
                      placeholder="Message"
                      className="
                      dark:placeholder:text-blue-300  form-control  block  w-full  px-3  py-1.5 dark:text-gray-200  text-base  font-normal  text-gray-700  bg-white  dark:bg-onbg-color-dk  bg-clip-padding  border border-solid border-gray-300  dark:border-[#40649D]  rounded  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-variant-color-dk focus:outline-none  "
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="p-3">
                    <input
                      checked={formData.storeData}
                      onChange={onInputChange}
                      type="checkbox"
                      id="storeData"
                      name="storeData"
                      value="true"
                    />
                    <label
                      className="text-gray-500 cursor-pointer text-base ml-2"
                      htmlFor="storeData"
                    >
                      Remember me
                    </label>
                  </div>
                  {error && (
                    <p className="text-sm text-red-500 mb-2">
                      All fields are mandatory
                    </p>
                  )}
                  <button
                    type="button"
                    data-type="post"
                    onClick={handlePostSubmission}
                    className="interactable w-full  px-6  py-2.5  bg-indigo-600  dark:bg-variant-color-dk  text-white  font-medium  text-xs  leading-tight  uppercase  rounded  shadow-md  hover:bg-indigo-400 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150  ease-in-out"
                  >
                    Send
                  </button>
                  {showSuccessMessage && (
                    <span className="text-sm float-right font-semibold mt-3 text-green-500">
                      You will get a reply on email soon
                    </span>
                  )}
                  
                </form>
                <ToastContainer />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12 mt-0 sm:mt-10 ">
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-indigo-700 dark:bg-variant-color-dk rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="headset"
                            className="w-5 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-black dark:text-white">
                          Technical support
                        </p>
                        <a href="mailto:vbit.stutalk@gmail.com">
                          <p className="text-gray-500">
                            vbit.stutalk@gmail.com
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-indigo-700 dark:bg-variant-color-dk rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="newspaper"
                            className="w-5 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-black dark:text-white">
                          Blog Listing
                        </p>
                        <p className="text-gray-500">
                          vbit.stutalk.bloglisting@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-indigo-700 dark:bg-variant-color-dk rounded-md shadow-md w-14 h-14 flex items-center justify-center text-white">
                          <HiOutlineUserAdd size={30} />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-black dark:text-white">
                          Join us
                        </p>
                        <p className="text-gray-500">joinstutalk@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-indigo-700 dark:bg-variant-color-dk rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bug"
                            className="w-5 text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-black dark:text-white">
                          Bug report
                        </p>
                        <p className="text-gray-500">
                          bugsreportstutalk@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Contact