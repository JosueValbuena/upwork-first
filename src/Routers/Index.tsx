import Dashboard from "@/pages/dashboard/Index"
import Settings from "@/pages/settins/Index";
import { Navigate, Route, Routes } from "react-router-dom"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
};

export default Routers;