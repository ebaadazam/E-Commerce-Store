
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="">

      <Routes>
        {/* Customer Route */}
        <Route path='/*' element={<CustomerRouters/>}></Route>

        {/* Admin Route */}
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
  

    </div>
  );
}

export default App;
