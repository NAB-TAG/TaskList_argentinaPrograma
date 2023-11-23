/* eslint-disable react/prop-types */
import { FaRegCircle } from "react-icons/fa";
import { NewContext } from "../context/contenxt";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

export const Row = ({ rowId }) => {
  const { eliminar, id } = NewContext();

  const rowIdNotFound = id.indexOf(rowId) === -1;

  useEffect(() => {}, [rowIdNotFound]);

  return (
    <>
      <div className="w-full h-10 flex py-5 mb-1 border-b-2 relative">
        <div className="hover:bg-gray-50 flex items-center relative">
          {!rowIdNotFound && (
            <div className={`border-t-2 border-black absolute left-0 right-0 h-px top-1/2 transition-opacity ${
                eliminar && !rowIdNotFound ? "opacity-100" : "opacity-0"}`} />
          )}
          {eliminar ? (
            <IoCloseSharp className={`mx-2 text-xl ${!rowIdNotFound && "hidden"}`}/> ) : (
            <FaRegCircle className="mx-2 text-xl text-blue-700" />
          )}
          <p
            className={`py-2 text-lg font-sans ${
              !rowIdNotFound ? "text-gray-500" : ""
            }`}>
            Dato {rowId}
          </p>
        </div>
      </div>
    </>
  );
};
