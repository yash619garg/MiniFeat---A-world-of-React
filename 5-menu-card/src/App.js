import { useState } from "react";
import Components from "./components";
import menu from "./data";
import Menu from "./menu";
import Header from "./Header";
const categories = menu.map((menu) => {
  return menu.category;
});
const newCategories = ["all", ...new Set(categories)];
function App() {
  const [menuItems, setMenu] = useState(menu);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(menu);
      return;

    }
    const newItems = menu.filter((items) => {
      return category === items.category;
    })
    setMenu(newItems);
  }
  return (
    <div className="main-container">
      <Header />
      <Components filterItems={filterItems} category={newCategories} />
      <div className="menu-container">
        {menuItems.map((items) => {
          return <Menu items={items} key={items.id} />
        })}
      </div>

    </div>
  );
}

export default App;
