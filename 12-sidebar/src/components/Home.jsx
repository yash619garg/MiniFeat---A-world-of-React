import { FiMenu } from "react-icons/fi";
import { useCustomContext } from "../context";

const Home = () => {
  const { openModel, openSidebar } = useCustomContext();
  return (
    <div className="button-container">
      <button className="toggle" onClick={openSidebar}>
        <FiMenu />
      </button>
      <button className="btn" onClick={openModel}>
        Show Model
      </button>
    </div>
  );
};

export default Home;
