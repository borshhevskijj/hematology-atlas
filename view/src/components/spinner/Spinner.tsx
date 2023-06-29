import cl from "./spinner.module.css";
const Spinner = () => {
  return (
    <div>
      <span className={cl.loader}></span>
    </div>
  );
};

export default Spinner;
