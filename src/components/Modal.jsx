
import { Cross } from "./Cross";


export const Modal = ({text, buttonOne, buttonTwo, taskInput, descriptionInput, onClick}) => {
 
  return (
    <div className="modal relative">
      <div className="text-[black] text-[20px] pt-10 w-96 h-96 rounded-2xl m-auto p-10 bg-blue-200 mt-30 relative ">
        <div>
          <Cross onClick={onClick}/>
        </div>
        <br />
        <br />

        <div className=" flex flex-col items-center ">
          <p className="text-[white]">
          {text}
          </p>
          {taskInput}
          {descriptionInput}
        </div>
        
        <br />
        <br />

        <div className="flex flex-row-reverse buttons pr-10 pl-10 ">
          {buttonOne}
          {buttonTwo}
        </div>
      </div>
    </div>
  );
}