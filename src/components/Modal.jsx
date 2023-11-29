/* eslint-disable react/prop-types */
import { IoIosCloseCircle } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NewContext } from "../context/contenxt"
import { useState } from "react";
export const ModalTask = ({ isOpen, closeModal }) => {
  const { setTasks } = NewContext()
  const [showMessage, setShowMessage] = useState(false);


  function createStorageTasks() {
    // Verificar si ya existe 
    if (localStorage.getItem('tasks') === null) {
      // Si no existe crear un nuevo array y lo guarda en el localstorage
      const newStorageTask = [];
      localStorage.setItem('tasks', JSON.stringify(newStorageTask));
      return newStorageTask;
    } else {
      // Si ya existe, retornalo
      const arrayExistente = JSON.parse(localStorage.getItem('tasks'));
      return arrayExistente;
    }
  }

  function agregarTarea(newTask) {
    const tasksArray = createStorageTasks();
    tasksArray.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    setTasks(tasksArray);
  }
  function generateUniqueIntegerId() {
    const timestamp = new Date().getTime();
    const randomInt = Math.floor(Math.random() * 1000000);
    const uniqueId = timestamp * 1000000 + randomInt;
    return uniqueId;
  }

  const formik = useFormik({
    initialValues: {
      title: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: async (data) => {
      const uniqueId = generateUniqueIntegerId(); 
      agregarTarea({ ...data, id: uniqueId }); 
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        closeModal(false);
      }, 1000);
    },
  });
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-blur-lg z-10">
          <div className="w-full md:w-1/2 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-black p-1 text-white flex justify-between items-center">
              <h1 className="ml-3 text-2xl font-semibold">New Task</h1>
              <IoIosCloseCircle
                onClick={closeModal}
                className="text-red-400 hover:text-red-500 h-full w-14 cursor-pointer"
              />
            </div>
            <form onSubmit={formik.handleSubmit} className="p-4 flex flex-col items-center">
              <div className="my-4 w-full">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  id="title"
                  name="title"
                  {...formik.getFieldProps('title')}
                  className="mt-1 p-2 w-full rounded-md border-gray-300"
                  placeholder="Enter a title for the task"
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-red-500 text-sm">{formik.errors.title}</div>
                )}
              </div>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110">
                Submit
              </button>
              {showMessage && (
                <div className="text-center text-green-500 mt-4">
                  <p className="text-lg font-bold">¡Task successfully added!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};
