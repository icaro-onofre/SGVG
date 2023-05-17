import { Navigate } from 'react-router-dom';
 const RouteGuard = ({ token, children }) => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default RouteGuard;
