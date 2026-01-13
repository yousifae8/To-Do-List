export const Button = ({value, onClick, className}) => {
  return (
    
    <button className={`w-25 custom h-12 rounded ${className} flex justify-center items-center`}  onClick={onClick}> 
{value}
  </button>

  )

    
    

    
}