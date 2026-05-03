import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import copy from 'copy-text-to-clipboard';
import toast from "react-hot-toast";

const Gallary = ({ setShow, images }) => {

  const copy_url = (url)=>{
    copy(url)
    toast.success('copy success')
  }
  const [broken, setBroken] = useState([]);

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[9999]">
      <div className="w-full h-full relative">

        {/* overlay */}
        <div className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]" />

        {/* modal */}
        <div
          className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto
                     left-[50%] top-[50%] z-[999]
                     -translate-x-[50%] -translate-y-[50%]"
        >

          {/* header */}
          <div className="pb-3 flex justify-between items-center w-full">
            <h2 className="text-lg font-semibold">Gallery</h2>

            <div
              onClick={() => setShow(false)}
              className="text-xl cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>

          {/* upload box */}
          <div>
            <label
              htmlFor="img"
              className="w-full h-[180px] flex rounded text-[#040404] gap-2
                         justify-center items-center cursor-pointer
                         border-2 border-dashed"
            >
              <div className="flex justify-center items-center flex-col gap-y-2">
                <span className="text-3xl">
                  <MdCloudUpload />
                </span>
                <span className="text-2xl">Select Image</span>
              </div>
            </label>

            <input className="hidden" type="file" id="img" />
          </div>

          {/* gallery images */}
          <div className="grid grid-cols-4 gap-x-2 mt-3">
            {images
              ?.filter((img) => !broken.includes(img._id))
              .map((img) => (
                <div className="cursor-pointer" key={img._id} onClick={()=>copy_url(img.url)}>
                  <img
                    src={img.url.replace("http://", "https://")}
                    alt=""
                    className="w-full h-[100px] object-cover rounded"
                    onError={() =>
                      setBroken((prev) => [...prev, img._id])
                    }
                  />
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallary;
