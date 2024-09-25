import Navbar from './components/ui/Navbar';
import { Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;