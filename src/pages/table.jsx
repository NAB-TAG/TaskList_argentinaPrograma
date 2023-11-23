import { Row } from "../components/row";
import { RiDeleteBinLine } from "react-icons/ri";
import { NewContext } from "../context/contenxt";
import { useEffect } from "react";

export const Table = () => {
  const { eliminar, setEliminar, setId, id: idArray } = NewContext();

  const eliminarClick = () => {
    setEliminar(!eliminar);
    setId([]);
  };

  const eliminarFilaClick = (id) => {
    if (eliminar) {
      // Verificar si el id ya está presente en el array
      if (idArray.includes(id)) {
        // Si está presente, eliminarlo
        setId((prevIds) => prevIds.filter((prevId) => prevId !== id));
      } else {
        // Si no está presente, agregarlo
        setId((prevIds) => [...prevIds, id]);
      }
    } else {
      return;
    }
  };

  const fakeData = [
    { id: 1, text: "Dato 1" },
    { id: 2, text: "Dato 2" },
    { id: 3, text: "Dato 3" },
    // Puedes agregar más elementos según sea necesario
  ];

  useEffect(() => {
    // Puedes realizar alguna lógica cuando cambie el estado de eliminar o id
  }, [eliminar, idArray]);

  return (
    <>
      <div className="flex justify-between w-full h-auto items-center mb-4 mt-2">
        <h1 className="text-5xl font-semibold">Todo List</h1>
        <div>

        </div>

        <div className="relative inline-block" onClick={eliminarClick}>
          <RiDeleteBinLine
            className="h-full w-9 text-slate-400 relative transition-shadow"
            
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
            1
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex-col justify-center items-center">
        <div className="w-full h-auto flex-col justify-center items-center">
          {fakeData.map((item) => (
            <div
              key={item.id}
              onClick={() => eliminarFilaClick(item.id)}
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
