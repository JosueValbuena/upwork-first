import Dashboard from "@/pages/dashboard/Index"
import NotFoundPage from "@/pages/not-found/NotFoundPage";
import Settings from "@/pages/settins/Index";
import { Navigate, Route, Routes } from "react-router-dom"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};

export default Routers;