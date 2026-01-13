
import { Button } from "./Button";
import { Modal } from "./Modal";

export const Display = ({ Cancel, Save, onChangeText, onChangeDescription, cross }) => {


  const handleText = (event) => {
  
    onChangeText(event.target.value);
  };
  const handleDescription = (event) => {
    onChangeDescription(event.target.value);
  };



 
  
  return (
    <div>
      <Modal
        taskInput={
          <input
            type="text"
            placeholder="add a task"
            onChange={handleText}
      
            className="bg-white mt-2 border-black border-b-2 h-10 w-70 p-2 focus:outline-none rounded"
          />
        }
        descriptionInput={
          <input
            type="textarea"
            placeholder="Add Some Description"
            name="description"
            onChange={handleDescription}
            className="bg-white mt-2 border-b-2 border-black h-20 p-2 w-70 focus:outline-none rounded"
          />
        }
        buttonOne={
          <Button value={"SAVE"} onClick={Save} className={`bg-[orange]`} />
        }
        buttonTwo={<Button value={"CANCEL"} onClick={Cancel}  className={`bg-[orange]`}/>}
        onClick={cross}
      />
    </div>
  );
};