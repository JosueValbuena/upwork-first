import AccountSettings from "@/pages/account-settings/AccountSettings";
import Dashboard from "@/pages/dashboard/Index"
import Settings from "@/pages/general-settings/Settings";
import NotFoundPage from "@/pages/not-found/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom"
import LogIn from '../pages/log-in/LogIn';
import ContentWrapper from "./contentWrapper/ContentWrapper";
import SignUp from "@/pages/sign-up/SignUp";
import AccountEmailConfirm from "@/pages/account-email-confirm/AccountEmailConfirm";
import ConnectAmazonAccount from "@/pages/connect-amazon-account/ConnectAmazonAccount";
import { paths } from "@/utils/constants";
import ConnectAmazonAccountSuccessfull from "@/pages/connect-amazon-account-successfull/ConnectAmazonAccountSuccessfull";
import TestPage from "@/pages/test-page/TestPage";
import Analytics from "@/pages/analytics/Analytics";

const Routers = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to={paths.login} replace />} /> */}
            <Route path={paths.login} element={<LogIn />} />
            <Route path={paths.signup} element={<SignUp />} />
            <Route path={paths.accountEmailConfirm} element={<AccountEmailConfirm />} />
            <Route path={paths.connectAmazonAccount} element={<ConnectAmazonAccount />} />
            <Route path={paths.connectAmazonAccountSuccessfully} element={<ConnectAmazonAccountSuccessfull />} />

            <Route path="/" element={<Navigate to={paths.dashoard} replace />} />
            <Route path="/dashboard" element={<ContentWrapper />}>
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account-settings" element={<AccountSettings />} />
                <Route path="test-page" element={<TestPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};

export default Routers;