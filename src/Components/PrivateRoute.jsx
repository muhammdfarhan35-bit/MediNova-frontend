import { Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element }) {
  const user = JSON.parse(localStorage.getItem('user'));  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Element />;
}

export default PrivateRoute;
