import React, { useState } from "react";

const initialData = {
  todo: [
    { id: "task-1", label: "Task 1" },
    { id: "task-2", label: "Task 2" },
  ],
  inprogress: [{ id: "task-3", label: "Task 3" }],
  done: [{ id: "task-4", label: "Task 4" }],
};

const DragAndDropList = () => {

  const [columns, setColumns] = useState(initialData);

  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task); 
  };

  const handleDrop = (col) => {
    if (!draggedTask) return; 

    const newColumns = { ...columns }; 

    for (const key of Object.keys(newColumns)) {
      newColumns[key] = newColumns[key].filter((t) => t.id !== draggedTask.id);
    }

    newColumns[col] = [...newColumns[col], draggedTask];
    setColumns(newColumns); 
    setDraggedTask(null); 
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6">
        {}
        {(["todo", "inprogress", "done"]).map((col) => (
          <div
            key={col} 
            className="column bg-gray-50 rounded-lg p-4 shadow-md border border-gray-200 flex flex-col"
            onDragOver={handleDragOver} 
            onDrop={() => handleDrop(col)} 
          >
            {}
            <h3 className="text-xl font-semibold mb-4 text-gray-700 uppercase border-b-2 border-indigo-300 pb-2">
              {col.toUpperCase()}
            </h3>
            {}
            {columns[col].map((task) => (
              <div
                key={task.id} 
                className="task bg-white p-3 mb-3 rounded-md shadow-sm border border-gray-100 cursor-grab active:cursor-grabbing
                           hover:shadow-md transition-shadow duration-200 flex items-center justify-between"
                draggable 
                onDragStart={() => handleDragStart(task)} 
              >
                {task.label} {}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropList;