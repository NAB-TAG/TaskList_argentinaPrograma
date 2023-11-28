import { Row } from "../components/Table/Row";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";
import { NewContext } from "../context/contenxt";
import { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import AlertInput from "../helpers/Alert";

export const Table = () => {
  const { Delete, setDelete, setId, id: idArray } = NewContext();
  const [ activateDeleting, setActivateDeleting ] = useState(false);
  const [ storage, setStorage ] = useStorage('tasklist', localStorage.getItem('tasklist')?localStorage.getItem('tasklist'):[])
  


  const DeleteClick = () => {
    setDelete(!Delete);
    setActivateDeleting(!activateDeleting)
    if (activateDeleting) {
      console.log(idArray)
      // setStorage(storage.push())
      alert("se han borrado todas las listas seleccionadas")
    }
    setId([]);
  };

  const DeleteFilaClick = (id) => {
    if (activateDeleting) {
      const divDelete = document.getElementById(id);
      divDelete.classList.add("active");
      
      if (Delete) {
        // Verificar si el id ya está presente en el array
        if (idArray.includes(id)) {
          divDelete.classList.remove("active");
          setId((prevIds) => prevIds.filter((prevId) => prevId !== id));
        } else {
          setId((prevIds) => [...prevIds, id]);
        }
      } else {
        return;
      }
    }
  };

  const handleClick = async () => {
    const alert = await AlertInput();
    console.log(alert)
    // setStorage(alert)
    
  }
  const fakeData = [
    { id: 1, text: "Date 1" },
    { id: 2, text: "Date 2" },
    { id: 3, text: "Date 3" },
  ];

  useEffect(() => {
  }, [Delete, idArray, storage]);

// useEffect(() => {
//   alert('sess')
// },[storage])
  return (
    <>
      <div className="flex justify-between w-full h-auto items-center mb-4 mt-2">
        <h1 className="text-5xl font-semibold">Todo List</h1>
        <div>
        </div>
        <div className="relative inline-block" onClick={DeleteClick}>
          {idArray.length > 0 && Delete ? (
            <RiDeleteBin7Line
              className="h-full w-9 text-slate-400 relative transition-shadow"
            />
          ) : (
            <RiDeleteBinLine
              className="h-full w-9 text-slate-400 relative transition-shadow"
            />
          )}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
            {idArray.length > 0 && (
              <p className="mt-1" style={{ userSelect: 'none' }}>
                {idArray.length}
              </p>
            )}
          </div>
        </div>
      </div>
        <button className="btn btn-success" onClick={() => handleClick()}><i className="fas fa-plus me-2"></i>Agregar Tarea</button>
      <div className="w-full h-auto flex-col justify-center items-center">
        <div className="w-full h-auto flex-col justify-center items-center">
          {storage.map((item) => (
            <div
              key={item.id}
              onClick={() => DeleteFilaClick(item.id)}
              className="w-full h-auto"
            >
              <Row rowId={item.id} rowData={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
