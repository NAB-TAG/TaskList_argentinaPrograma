import { Row } from "../components/taskItem";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";
import { NewContext } from "../context/contenxt";
import { useEffect, useState } from "react";
import { RiAddLine } from 'react-icons/ri';
import { ModalTask } from "../components/taskForm";
export const Table = () => {
  const { Delete, setDelete, setId, id: idArray, Task, setTasks } = NewContext();
  const [modalOpen, setModalOpen] = useState(false);

  const [ activateDeleting, setActivateDeleting ] = useState(false);
  
  


  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  function eliminarTareasPorId(idArray) {
    const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
    const nuevoArrayTasks = tasksArray.filter(task => !idArray.includes(task.id));
    localStorage.setItem('tasks', JSON.stringify(nuevoArrayTasks));
    setTasks(nuevoArrayTasks);
    return nuevoArrayTasks;
  }
  
  const DeleteClick = () => {
    if (Delete && idArray.length > 0) {
      eliminarTareasPorId(idArray);
      setId([]); // Limpiar idArray después de eliminar tareas
    }
    setDelete(!Delete);
    setActivateDeleting(!activateDeleting)

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

  function createStorageTasks() {
    if (localStorage.getItem('tasks') === null) {
      const newStorageTask = [];
      localStorage.setItem('tasks', JSON.stringify(newStorageTask));
      return newStorageTask;
    } else {
      const arrayExistente = JSON.parse(localStorage.getItem('tasks'));
      return arrayExistente;
    }
  }


  useEffect(() => {
  }, [Delete, idArray]);

  useEffect(() => {
    const tasksArray = createStorageTasks();
    setTasks(tasksArray);
  }, [setTasks]);


  return (
    <>
      <ModalTask isOpen={modalOpen} closeModal={closeModal} />
      <div className="relative flex justify-between w-full items-center mb-4 mt-2">
        <h1 className="text-2xl md:text-5xl font-semibold">Todo List</h1>
        <div className="flex justify-center p-2">

          <div className="relative " onClick={DeleteClick}>

            {idArray.length > 0 && Delete ? (
              <RiDeleteBin7Line
                className="h-full w-9 text-red-400 relative cursor-pointer"
              />
            ) : (
              <RiDeleteBinLine
                className="h-full w-9 text-slate-400 relative cursor-pointer"
              />
            )}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent cursor-pointer">
              {idArray.length > 0 && (
                <h1 className=" mt-1 text-red-400" style={{ userSelect: 'none' }}>
                  {idArray.length}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={openModal}
        className="h-10 w-36  bg-green-500 hover:bg-green-600 text-white font-bold rounded flex justify-start p-4 items-center transform transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <RiAddLine className="h-6 w-6" />
        Add task
      </button>
      <div className="w-full h-auto flex-col justify-center items-center">
        <div className="w-full h-auto flex-col justify-center items-center">
          {Task.map((item) => (
            <div
              key={item.id}
              onClick={() => DeleteFilaClick(item.id)}
              className="w-full h-auto"
              id={item.id}
            >
              <Row rowId={item.id} rowData={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
