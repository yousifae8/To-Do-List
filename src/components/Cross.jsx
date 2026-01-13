import CloseIcon from "@mui/icons-material/Close";

export const Cross = ({ onClick }) => {
  return (
    <button
      className="absolute right-4 top-4 cursor-pointer "
      onClick={onClick}>
      <CloseIcon sx={{color: "red"}}  />
    </button>
  );
};
