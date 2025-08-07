import { BrowserRouter } from 'react-router-dom';
import CompleteRoutes from './Routes/CompleteRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter basename="/MediNova-frontend">
        <CompleteRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
