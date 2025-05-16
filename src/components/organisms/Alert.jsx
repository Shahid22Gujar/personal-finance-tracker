import { useRef } from "react";
export const Alert = ({alertText}) => {
    const alertRef = useRef(null);
    const handleCloseAlert=()=>{
        alertRef.current.parentElement.style.display='none';
    }
  return (
    <div className="alert">
      <span className="closebtn" ref={alertRef} onClick={handleCloseAlert}>
        &times;
      </span>
      {alertText}
    </div>
  );
};
