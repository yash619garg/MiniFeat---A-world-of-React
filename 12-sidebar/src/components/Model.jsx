import { RxCross2 } from "react-icons/rx";
import { useCustomContext } from "../context";
const Model = () => {
  const { showModel, closeModel } = useCustomContext();
  return (
    <div className={`model-overlay ${showModel && "showModel"}`}>
      <div className="model-container">
        <div className="content">Model Box</div>
        <button className="cancel" onClick={closeModel}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Model;
