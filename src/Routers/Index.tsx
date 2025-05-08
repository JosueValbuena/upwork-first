import Dashboard from "@/pages/dashboard/Index"
import { Route, Routes } from "react-router-dom"
const Routers = () => {
    return (
        <Routes>
            <Route index path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
};

export default Routers;