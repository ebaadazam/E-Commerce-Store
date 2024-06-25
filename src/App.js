
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">

      <Routes>
        {/* Customer Route */}
        <Route path='/*' element={<CustomerRouters/>}></Route>
        {/* Admin Route */}
        {/* nothing to show now for admin as we have not implemented the dashboard */}
      </Routes>
  

    </div>
  );
}

export default App;
