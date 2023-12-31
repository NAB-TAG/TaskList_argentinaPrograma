/* eslint-disable react/prop-types */
import { FaRegCircle } from "react-icons/fa";
import { NewContext } from "../context/contenxt";
import { useEffect } from "react";

// eslint-disable-next-line no-unused-vars
export const Row = ({ rowId, rowData }) => {
  const { Delete, id } = NewContext();
  const rowIdNotFound = id.indexOf(rowId) === -1;
  useEffect(() => { }, [rowIdNotFound]);


  return (
    <>

      <div className="w-full h-10 flex py-5 mb-1 border-b-2 relative overflow-hidden">

        <div className="hover:bg-gray-50 flex items-center relative">
          {!rowIdNotFound && (
            <div className={`absolute left-0 right-0 h-px top-1/2 transition-opacity ${Delete && !rowIdNotFound ? "opacity-100" : "opacity-0"}`} />
          )}
          {Delete ? (

            <div className="crux"></div>) : (

            <FaRegCircle className="mx-2 text-xl text-blue-900" />
          )}
          <span className={`py-2 text-lg font-sans ${!rowIdNotFound ? "text-gray-500" : ""}`}>
            <p style={{ userSelect: 'none' }}>{rowData.title}</p>
          </span>
        </div>
      </div>
    </>
  );
};
