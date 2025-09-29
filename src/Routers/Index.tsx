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
import AnalyticsSalesPerformanceByDate from "@/pages/analytics-sales-performance-by-date/AnalyticsSalesPerformanceByDate";
import AnalyticsSalesPerformanceByParentAsin from "@/pages/analytics-sales-performance-by-parent-asin/AnalyticsSalesPerformanceByParentAsin";
import AnalyticsSalesPerformanceByChildAsin from "@/pages/analytics-sales-performance-by-child-asin/AnalyticsSalesPerformanceByChildAsin";
import AnalitycsAgedInventory from "@/pages/analytics-aged-inventory/AnalitycsAgedInventory";
import AnalyticsSalesByMarketplace from "@/pages/AnalyticsSalesByMarketPlace/AnalyticsSalesByMarketplace";
import AnalyticsSalesByBrand from "@/pages/analytics-sales-by-brand/AnalyticsSalesByBrand";
import AnalyticsSalesByCategory from "@/pages/analytics-sales-by-category/AnalyticsSalesByCategory";
import AnalyticsInventoryValuation from "@/pages/analytics-inventory-valuation/AnalyticsInventoryValuation";
import AnalyticsActiveInventoryReport from "@/pages/analytics-active-inventory-report/AnalyticsActiveInventoryReport";
import AnalyticsRepricingHistoryLog from "@/pages/analytics-repricing-history-log/AnalyticsRepricingHistoryLog";
import AnalyticsInventoryByBrand from "@/pages/analytics-inventory-by-brand/AnalyticsInventoryByBrand";
import AnalyticsExcessInventory from "@/pages/analytics-excess-inventory/AnalyticsExcessInventory";
import AnalyticsRefundsAndReturns from "@/pages/analytics-refunds-and-returns/AnalitycsRefundsAndReturn";
import AnalyticsInboundShipments from "@/pages/analytics-inbound-shipments/AnalyticsInboundShipments";
import AnalitycsInventoryTurnOver from "@/pages/analitycs-inventory-turnover/AnalitycsInventoryTurnOver";
import AnalitycsProfitAndLossStatementforGivenDateRange from "@/pages/analitycs-profit-and-loss-statement-for-given-date-range/AnalitycsProfitAndLossStatementforGivenDateRange";

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
                <Route path="settings" element={<Settings />} />
                <Route path="account-settings" element={<AccountSettings />} />
                <Route path="test-page" element={<TestPage />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="analytics/sales-performance" element={<AnalyticsSalesPerformanceByDate />} />
                <Route path="analytics/sales-performance-by-parent-asin" element={<AnalyticsSalesPerformanceByParentAsin />} />
                <Route path="analytics/sales-performance-by-child-asin" element={<AnalyticsSalesPerformanceByChildAsin />} />
                <Route path="analytics/aged-inventory" element={<AnalitycsAgedInventory />} />
                <Route path="analytics/sales-by-marketplaces" element={<AnalyticsSalesByMarketplace />} />
                <Route path="analytics/sales-by-brand" element={<AnalyticsSalesByBrand />} />
                <Route path="analytics/sales-by-category" element={<AnalyticsSalesByCategory />} />
                <Route path="analytics/inventory-valuation" element={<AnalyticsInventoryValuation />} />
                <Route path="analytics/active-inventory-report" element={<AnalyticsActiveInventoryReport />} />
                <Route path="analytics/reprice-change-history" element={<AnalyticsRepricingHistoryLog />} />
                <Route path="analytics/inventory-by-brand" element={<AnalyticsInventoryByBrand />} />
                <Route path="analytics/excess-inventory" element={<AnalyticsExcessInventory />} />
                <Route path="analytics/refunds-and-return" element={<AnalyticsRefundsAndReturns />} />
                <Route path="analytics/inbound-shipments" element={<AnalyticsInboundShipments />} />
                <Route path="analytics/inventory-turnover" element={<AnalitycsInventoryTurnOver />} />
                <Route path="analytics/profit-and-loss-statement-for-given-date-range" element={<AnalitycsProfitAndLossStatementforGivenDateRange />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Routers;