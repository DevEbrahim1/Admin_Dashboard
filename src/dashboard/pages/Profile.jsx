import React from "react";
import { ImImages } from "react-icons/im";

const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-5 mt-5">

      {/* Profile Info */}
      <div className="bg-white gap-x-3 p-6 rounded flex justify-center items-center">
        <div>
          <label
            htmlFor="img"
            className="w-[150px] h-[150px] flex rounded text-[#040404] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
          >
            <div className="flex justify-center items-center flex-col gap-y-2">
              <span><ImImages /></span>
              <span className="text-2xl">Select Image</span>
            </div>
          </label>
          <input className="hidden" type="file" id="img" />
        </div>

        <div className="text-[#404040] flex flex-col gap-y-1 justify-center items-start ml-4">
          <span>Name : Md Ebrahim Kholil</span>
          <span>Email : iamebrahimkholil.com</span>
          <span>Category : Education</span>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white px-6 py-4 text-[#404040] w-full">
        <h2 className="text-lg font-semibold mb-3">Change Password</h2>

        <form>
          <div className="grid grid-cols-1 gap-y-5 w-full">

            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600">
                Old Password
              </label>
              <input
                type="password"
                placeholder="old password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-green-500 h-10 outline-0"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-md font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                placeholder="new password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-green-500 h-10 outline-0"
              />
            </div>

            <button className="w-fit px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Change Password
            </button>

          </div>
        </form>
      </div>

    </div>
  );
};

export default Profile;
