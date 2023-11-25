import { Row } from "../components/row";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin7Line } from "react-icons/ri";
import { NewContext } from "../context/contenxt";
import { useEffect } from "react";

export const Table = () => {
  const { Delete, setDelete, setId, id: idArray } = NewContext();

  const DeleteClick = () => {
    setDelete(!Delete);
    setId([]);
  };

  const DeleteFilaClick = (id) => {
    if (Delete) {
      // Verificar si el id ya está presente en el array
      if (idArray.includes(id)) {
        setId((prevIds) => prevIds.filter((prevId) => prevId !== id));
      } else {
        setId((prevIds) => [...prevIds, id]);
      }
    } else {
      return;
    }
  };

  const fakeData = [
    { id: 1, text: "Date 1" },
    { id: 2, text: "Date 2" },
    { id: 3, text: "Date 3" },
  ];

  useEffect(() => {
  }, [Delete, idArray]);

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
              <p className="mt-1 animate-ping" style={{ userSelect: 'none' }}>
                {idArray.length}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex-col justify-center items-center">
        <div className="w-full h-auto flex-col justify-center items-center">
          {fakeData.map((item) => (
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
