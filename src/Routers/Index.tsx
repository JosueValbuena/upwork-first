import AccountSettings from "@/pages/account-settings/AccountSettings";
import Dashboard from "@/pages/dashboard/Index"
import Settings from "@/pages/general-settings/Settings";
import NotFoundPage from "@/pages/not-found/NotFoundPage";
import { /* Navigate, */ Route, Routes } from "react-router-dom"
import LogIn from '../pages/log-in/LogIn';
import ContentWrapper from "./contentWrapper/ContentWrapper";
import SignUp from "@/pages/sign-up/SignUp";

const Routers = () => {
    return (
        <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/dashboard" element={<ContentWrapper />}>
                {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
                <Route index element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account-settings" element={<AccountSettings />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};

export default Routers;