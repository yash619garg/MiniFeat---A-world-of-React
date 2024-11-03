
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';
import Welcome from './components/Welcome';
import ContextProvider from './context';

function App() {
  return (
    <div className="main-container">
      <ContextProvider>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
        <Welcome />
      </ContextProvider>
    </div>
  );
}

export default App;
