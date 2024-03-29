import React,{useState} from 'react';
import ProfileImageModal from './ProfileImageModel';


const ProfileCard = (props) => {

  const [modal, setModal] = React.useState(false);
  return (
    <>
      <ProfileImageModal  {...{ modal, setModal,props}} />
      <div className="sm:w-[40vw] px-10 py-6 mx-4 mt-20 bg-white dark:bg-onbg-color-dk rounded-lg custom_bg_shadow dark:shadow-none md:mx-auto border-1 items-center justify-center">
        <div className="flex flex-col items-start w-full m-auto sm:flex-row">
          <div className="flex mx-auto sm:mr-10 sm:m-0">
            <div className="items-center justify-center w-20 h-20 m-auto mr-4 sm:w-32 sm:h-32">
              <img
                alt="profil"
                src={props.data.photo.url}
                className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32 cursor-pointer p-1 ring-2 ring-gray-300 dark:ring-[#0f1c32]" 
                onClick={() => setModal((modal) => !modal)}
              />
            </div>
          </div>
          <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
            <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
              <h2 className="flex pr-4 text-xl font-semibold text-black dark:text-variant-color-dk sm:text-3xl cursor-default">
                @{props.data.username}
              </h2>
              
            </div>
            <div className="flex items-center justify-center mt-3 space-x-2">
              <div className="flex">
                <span className="mr-1 font-semibold">{props.count}</span>Blogs
                <span className="bg-blue-200 text-blue-800 text-sm font-medium ml-4 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{props.data.class}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <h1 className="text-lg font-semibold text-black dark:text-white sm:text-xl">
            {props.data.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">Blogger</p>
          <p className="text-sm text-black dark:text-white md:text-base">{props.data.bio}</p>
        </div>
      </div>

    </>
  );
}

export default ProfileCard