import { Navigate, Outlet } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Private = () => {
    const { store } = useGlobalReducer();

    if (!store.token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};