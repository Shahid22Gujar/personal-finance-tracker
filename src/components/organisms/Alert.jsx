export const Alert = () => {
  return (
    <div className="alert">
      <span className="closebtn" onClick="this.parentElement.style.display='none';">
        &times;
      </span>
      This is an alert box.
    </div>
  );
};
