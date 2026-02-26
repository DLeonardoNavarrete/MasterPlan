import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, seccion }) => {
  if (!seccion) {
    return <Navigate to="/login" replace />;
  }
    return children;
};

export default ProtectedRoute;