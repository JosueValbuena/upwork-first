import Dashboard from "@/pages/dashboard/Index"
import Settings from "@/pages/settins/Index";
import { Route, Routes } from "react-router-dom"
const Routers = () => {
    return (
        <Routes>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
};

export default Routers;