import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user ,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace={true} />;
    }
    return children;
};

export default PrivateRoute;