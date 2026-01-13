
import { Button } from "./Button";
import { Modal } from "./Modal";

export const DeleteDialog = ({ Yes, No, cross }) => {
  return (
    <div>
      <Modal
        text={"Are you sure you would like to this task?"}
        buttonOne={<Button value={"YES"} className="mt-20 bg-[orange]" onClick={Yes} />}
        buttonTwo={<Button value={"NO"} className="mt-20 bg-[orange]" onClick={No}/>}
      onClick={cross}
      
      />
    </div>
  );
}