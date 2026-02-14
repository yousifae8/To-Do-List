import { useState } from "react";
import { useEffect } from "react";

import { DeleteDialog } from "./DisplayDeleteDialog";
import { Display } from "./DisplayAddDialog";
import uuid4 from "uuid4";
import { Button } from "./Button";
import CloseIcon from "@mui/icons-material/Close";

export const Dashboard = () => {

  const [todo, setTodo] = useState(() => {
  try {
    const value = localStorage.getItem("todo");
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
});
  const [item, setItem] = useState("")



useEffect(()=>{
  localStorage.setItem("todo", JSON.stringify(todo))
},[todo])

  const [addDialog, setAddDialog] = useState(false)
  const [removeDialog, setRemoveDialog] = useState(false)


  const [addDialogDisplay,setAddDialogDisplay] = useState("none")
  const [removeDialogDisplay,setRemoveDialogDisplay] = useState("none")

  const [text, setText] = useState("");
  const [description, setDescription] = useState("");





  const handleCancel = () => {
    setAddDialog(!addDialog)
    setAddDialogDisplay("none")
     setText("");
     setDescription("");
  }
  

  
  const handleSave = () => {

    if (text !== "" && description !== "") {
      
    

      const id = uuid4()
      setTodo([...todo, { id: id, task: text, description: description }]);
   

    



      setAddDialog(!addDialog)
      setAddDialogDisplay("none")
      setText("")
      setDescription("")
   
      
    
    } 

  }
  const handleYes = () => {
    const filteredData = todo.filter((_) => _.id !== item);
    
    
    setTodo(filteredData);

    setRemoveDialog(!removeDialog)
    setRemoveDialogDisplay("none")
  }

  const handleNo = () => {
    setRemoveDialog(!removeDialog)
    setRemoveDialogDisplay("none")
  }
  const handleCross = () => {
    if (addDialog) {
      setAddDialog(!addDialog);
      setAddDialogDisplay("none");
      
    }

    setRemoveDialog(!removeDialog)
    setRemoveDialogDisplay("none")
  }


  return (
    <div>
      
      {
        <Button
          className={"bg-[#BDE8F5] cursor-pointer  absolute right-3 top-3"}
          value="ADD"
          onClick={() => {
            setAddDialogDisplay("block");
            setAddDialog(true);
          }}
        />
      }
      <div className="container">
        <div
          style={{
            display: addDialogDisplay,
          }}>
          {addDialog && (
            <Display
              Cancel={handleCancel}
              Save={handleSave}
              onChangeText={setText}
              onChangeDescription={setDescription}
              cross={handleCross}
            />
          )}
        </div>
        <div  style={{ display: removeDialogDisplay }}>
          {removeDialog && (
            <DeleteDialog Yes={handleYes} No={handleNo} cross={handleCross} />
          )}
        </div>

        <div className=" container">
          {todo?.map((task) => {
            return (
              <div
                key={task.id}
                className=" card rounded text-[black] border bg-amber-50 inline-block relative">
                <div>
                  <input
                  
                    type="checkbox"
                    className=" absolute right-9 top-4 cursor-pointer checkbox "
                    checked={!!task.completed}
                    
                    onClick={() => {
                      task.completed
                        ? (task.completed = false)
                        : (task.completed = true);
                      setTodo([...todo]);
                    }}
                  />

                  <h1
                    className="text-2xl mb-15 text-[black] border-b-1 break-words mt-5 "
                    style={{
                      textDecoration: task.completed
                        ? "line-through 3px orangered"
                        : "none",
                    }}>
                    {task.task}
                  </h1>

                  <div className="  mt-10 border-b-1  break-words  ">
                    {task.description}
                  </div>
                </div>
                <div>
                  
                    <button
                      className="cursor-pointer absolute right-2 top-3.5 "
                      onClick={() => {
                        setRemoveDialogDisplay("block");
                        setRemoveDialog(true);
                        setItem(task.id);
                      }}>
                      
                      <CloseIcon sx={{ color: "red"}} />

                    </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
