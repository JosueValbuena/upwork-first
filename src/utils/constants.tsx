import type { CurrencyList, DashboardMetric, NavigationLink, RiskItem, RiskStatus, TimeList } from "@/types";
import {
  IconActiveInvetoryOutlinedPurple, IconAgedInventoryOutlinedPurple, IconAmazonOutlinedPurple,
  IconArrowDownOutlinedPurple, IconArrowUpOutlinedPurple, IconBoxFstOutlinedPurple, IconBoxScndOutlinedPurple,
  IconCartOutlinedPurple, IconChart4OutlinedPurple, IconChartFstOutlinedPurple,
  IconChartScndOutlinedPurple, IconChartTrdOutlinedPurple, IconCheckListOutlinedPurple, IconClockOutlinedPurple,
  IconCurrencyFrstOutlinedPurple, IconCurrencyScndOutlinedPurple, IconDocumentOutlinedPurple,
  IconDocumentScndOutlinedPurple, IconExcessiveInventoryOutlinedPurple, IconHouseFstOutlinedPurple,
  IconHouseScndOutlinedPurple, IconInboundShipmentsOutlinedPurple, IconinventoryByBrandOutlinedPurple,
  IconInventoryTurnoverOutlinedPurple, IconInventoryValuationOutlinedPurple, IconMinusContainedGray,
  IconProfitAndLossStatementPurple, IconRefundAndReturnsOutlinedPurple, IconRepeatScndOutlinedGPurple,
  IconRepriceChangeHistoryOutlinedPurple, IconSalesByBrandOutlinedPurple, IconSalesByCategoryOutlinedPurple,
  IconSalesByMarketplaceOutlinedPurple, IconSalesByPerformanceByChildAsinOutlinedPurple,
  IconSalesByPerformanceByParentAsinOutlinedPurple, IconSalesByPerformanceOutlinedPurple,
  IconUserGearOutlinedPurple, IconWarningContainedRed, IconWarningContainedYellow
} from "./icons";
import type { AnalyticsItem } from "@/types/utils";

export const paths = {
  dashoard: '/dashboard',
  login: '/login',
  signup: '/signup',
  accountEmailConfirm: '/account-email-confirm',
  connectAmazonAccount: '/connect-amazon-account',
  accountSettings: '/account-settings',
  settings: '/settings',
  connectAmazonAccountSuccessfully: '/connect-amazon-account-successfully',
};

export const pathsRoute = {
  dashoard: paths.dashoard,
  login: paths.login,
  signup: paths.signup,
  accountEmailConfirm: paths.accountEmailConfirm,
  connectAmazonAccount: paths.connectAmazonAccount,
  accountSettings: `${paths.dashoard}${paths.accountSettings}`,
  settings: `${paths.dashoard}${paths.settings}`,
  connectAmazonAccountSuccessfully: paths.connectAmazonAccountSuccessfully
};

export const navigationLinks: NavigationLink[] = [
  {
    label: 'Dashboard',
    path: paths.dashoard,
    icon: 'home'
  },
  {
    label: 'Listings',
    path: 'listings',
    icon: 'list'
  },
  {
    label: 'Uploads',
    path: 'uploads',
    icon: 'upload'
  },
  {
    label: 'Strategies',
    path: 'strategies',
    icon: 'lightbulb'
  },
  {
    label: 'Analytics',
    path: 'analytics',
    icon: 'chart'
  },
  {
    label: 'Recommendations',
    path: 'recommendations',
    icon: 'star'
  },
  {
    label: 'Test Page',
    path: 'test-page',
    icon: 'star'
  },
];

export const timeList: TimeList[] = [
  { value: "12:00AM", label: "12:00AM" },
  { value: "12:30AM", label: "12:30AM" },
  { value: "01:00AM", label: "01:00AM" },
  { value: "01:30AM", label: "01:30AM" },
  { value: "02:00AM", label: "02:00AM" },
  { value: "02:30AM", label: "02:30AM" },
  { value: "03:00AM", label: "03:00AM" },
  { value: "03:30AM", label: "03:30AM" },
  { value: "04:00AM", label: "04:00AM" },
  { value: "04:30AM", label: "04:30AM" },
  { value: "05:00AM", label: "05:00AM" },
  { value: "05:30AM", label: "05:30AM" },
  { value: "06:00AM", label: "06:00AM" },
  { value: "06:30AM", label: "06:30AM" },
  { value: "07:00AM", label: "07:00AM" },
  { value: "07:30AM", label: "07:30AM" },
  { value: "08:00AM", label: "08:00AM" },
  { value: "08:30AM", label: "08:30AM" },
  { value: "09:00AM", label: "09:00AM" },
  { value: "09:30AM", label: "09:30AM" },
  { value: "10:00AM", label: "10:00AM" },
  { value: "10:30AM", label: "10:30AM" },
  { value: "11:00AM", label: "11:00AM" },
  { value: "11:30AM", label: "11:30AM" },
  { value: "12:00PM", label: "12:00PM" },
  { value: "12:30PM", label: "12:30PM" },
  { value: "01:00PM", label: "01:00PM" },
  { value: "01:30PM", label: "01:30PM" },
  { value: "02:00PM", label: "02:00PM" },
  { value: "02:30PM", label: "02:30PM" },
  { value: "03:00PM", label: "03:00PM" },
  { value: "03:30PM", label: "03:30PM" },
  { value: "04:00PM", label: "04:00PM" },
  { value: "04:30PM", label: "04:30PM" },
  { value: "05:00PM", label: "05:00PM" },
  { value: "05:30PM", label: "05:30PM" },
  { value: "06:00PM", label: "06:00PM" },
  { value: "06:30PM", label: "06:30PM" },
  { value: "07:00PM", label: "07:00PM" },
  { value: "07:30PM", label: "07:30PM" },
  { value: "08:00PM", label: "08:00PM" },
  { value: "08:30PM", label: "08:30PM" },
  { value: "09:00PM", label: "09:00PM" },
  { value: "09:30PM", label: "09:30PM" },
  { value: "10:00PM", label: "10:00PM" },
  { value: "10:30PM", label: "10:30PM" },
  { value: "11:00PM", label: "11:00PM" },
  { value: "11:30PM", label: "11:30PM" },
];

export const currencyList: CurrencyList[] = [
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "GBP", label: "GBP - British Pound" },
  { value: "AUD", label: "AUD - Australian Dollar" },
  { value: "CAD", label: "CAD - Canadian Dollar" },
  { value: "INR", label: "INR - Indian Rupee" },
  { value: "JPY", label: "JPY - Japanese Yen" },
  { value: "CNY", label: "CNY - Chinese Yuan" },
  { value: "AED", label: "AED - UAE Dirham" },
  { value: "SAR", label: "SAR - Saudi Riyal" },
  { value: "TRY", label: "TRY - Turkish Lira" },
  { value: "ZAR", label: "ZAR - South African Rand" },
  { value: "CHF", label: "CHF - Swiss Franc" },
  { value: "KRW", label: "KRW - South Korean Won" },
];

//mocks

export const statesList: RiskStatus[] = [
  {
    label: 'warning',
    icon: <IconWarningContainedYellow />
  },
  {
    label: 'alert',
    icon: <IconMinusContainedGray />
  },
  {
    label: 'error',
    icon: <IconWarningContainedRed />
  },
]

export const riskdData: RiskItem[] = [
  {
    value: "120",
    label: "InActive SKU's",
    state: statesList,
    info: "i",
    icon: <IconCheckListOutlinedPurple />,
  },
  {
    value: "127",
    label: "Missing Min/Max/Cost",
    state: statesList,
    info: "i",
    icon: <IconCurrencyFrstOutlinedPurple />,
  },
  {
    value: "127",
    label: "At Max Price",
    state: statesList,
    info: "i",
    icon: <IconChartTrdOutlinedPurple />,
  },
  {
    value: "120",
    label: "At Min Price",
    state: statesList,
    info: "i",
    icon: <IconArrowUpOutlinedPurple />,
  },
  {
    value: "120",
    label: "Competition Below Min",
    state: statesList,
    info: "i",
    icon: <IconArrowDownOutlinedPurple />,
  },
  {
    value: "120",
    label: "Stranded Units",
    state: statesList,
    info: "i",
    icon: <IconChart4OutlinedPurple />,
  },
  {
    value: "120",
    label: "Buybox ownership",
    state: statesList,
    info: "i",
    icon: <IconCartOutlinedPurple />,
  },
  {
    value: "120",
    label: "No Sales(30 Days)",
    state: statesList,
    info: "i",
    icon: <IconCurrencyScndOutlinedPurple />,
  },
  {
    value: "120",
    label: "Overstock SKU",
    state: statesList,
    info: "i",
    icon: <IconDocumentScndOutlinedPurple />,
  },
];

export const daysTimelapse: string[] = [
  '3 Days',
  '30 Days',
  '90 Days',
  'Custom Rang'
];

export const metrics: DashboardMetric[] = [
  {
    value: "435",
    label: "Total Active SKUs",
    icon: <IconDocumentOutlinedPurple />,
    info: '',
  },
  {
    value: "54%",
    label: "Profit Margin",
    icon: <IconHouseFstOutlinedPurple />,
    info: '',
    metrics: ['Roi', 'Profit'],
    timeframe: daysTimelapse,
  },
  {
    value: "124",
    label: "Est. Days Of Inventory Left",
    icon: <IconBoxFstOutlinedPurple />,
    info: '',
  },
  {
    value: "$100,000",
    label: "Profit",
    icon: <IconChartFstOutlinedPurple />,
    info: '',
    timeframe: daysTimelapse,
  },
  {
    value: "157",
    label: "Total Units on Hand",
    icon: <IconUserGearOutlinedPurple />,
    info: '',
  },
  {
    value: "67",
    label: "Inventory Cost",
    icon: <IconHouseScndOutlinedPurple />,
    info: '',
  },
  {
    value: "100",
    label: "Total Amazon Balance",
    icon: <IconAmazonOutlinedPurple />,
    info: '',
    scheduleIcon: <IconClockOutlinedPurple />,
    hasRefresh: true,
    refreshTime: "12-1-23 7:12 PM",
    refreshIcon: <IconRepeatScndOutlinedGPurple />
  },
  {
    value: "120",
    label: "Buy Box Ownership %",
    icon: <IconBoxScndOutlinedPurple />,
    info: '',
    timeframe: daysTimelapse,
  },
  {
    value: "127",
    label: "Sell-Through Rate",
    icon: <IconChartScndOutlinedPurple />,
    info: '',
    timeframe: daysTimelapse,
  },
  {
    value: "107",
    label: "ASIN Reprice Changes",
    icon: <IconRepeatScndOutlinedGPurple />,
    info: ''
  },
];

export const analyticsItem: AnalyticsItem[] = [
  {
    title: "Sales Performance",
    text: "Shows total sales over a selected date range, grouped by week, month, or year to analyze trends.",
    icon: <IconSalesByPerformanceOutlinedPurple />,
    to: 'sales-performance'
  },
  {
    title: "Sales Performance by Parent ASIN",
    text: "Summarizes sales for each Parent ASIN within a chosen date range to track overall product family performance.",
    icon: <IconSalesByPerformanceByParentAsinOutlinedPurple />,
    to: 'sales-performance-by-parent-asin'
  },
  {
    title: "Sales Performance by Child ASIN",
    text: "Breaks down sales by individual Child ASINs over a selected period for detailed SKU-level analysis.",
    icon: <IconSalesByPerformanceByChildAsinOutlinedPurple />,
    to: 'sales-performance-by-child-asin'
  },
  {
    title: "Sales by Brand",
    text: "Reports sales totals for each brand over a selected date range to evaluate brand-level performance.",
    icon: <IconSalesByBrandOutlinedPurple />,
    to: ''
  },
  {
    title: "Sales by Marketplace",
    text: "Displays sales performance broken down by marketplace/country for comparative analysis.",
    icon: <IconSalesByMarketplaceOutlinedPurple />,
    to: ''
  },
  {
    title: "Sales by Category",
    text: "Displays sales totals by category over a selected date range to analyze category-level trends.",
    icon: <IconSalesByCategoryOutlinedPurple />,
    to: ''
  },
  {
    title: "Profit and Loss Statement",
    text: "Provides a clear summary of revenue, costs, and profit over a selected date range, grouped by week, month, or year.",
    icon: <IconProfitAndLossStatementPurple />,
    to: ''
  },
  {
    title: "Inventory Valuation",
    text: "Calculates the current total cost value of all active inventory on a specific date.",
    icon: <IconInventoryValuationOutlinedPurple />,
    to: ''
  },
  {
    title: "Inventory By Brand",
    text: "Lists current inventory quantities and details grouped by brand to track stock levels per brand.",
    icon: <IconinventoryByBrandOutlinedPurple />,
    to: ''
  },
  {
    title: "Aged Inventory",
    text: "Displays on hand inventory at risk of long-term storage fees.",
    icon: <IconAgedInventoryOutlinedPurple />,
    to: ''
  },
  {
    title: "Active Inventory",
    text: "Lists all in-stock SKUs with quantities and key details for inventory tracking.",
    icon: <IconActiveInvetoryOutlinedPurple />,
    to: ''
  },
  {
    title: "Reprice Change History",
    text: "Displays a log of all price changes made by the repricer over time for auditing and review.",
    icon: <IconRepriceChangeHistoryOutlinedPurple />,
    to: ''
  },
  {
    title: "Excess Inventory",
    text: "Displays SKUs with inventory levels exceeding expected demand or sales velocity.",
    icon: <IconExcessiveInventoryOutlinedPurple />,
    to: ''
  },
  {
    title: "Refunds & Returns",
    text: "Displays all return and refund activity for your products.",
    icon: <IconRefundAndReturnsOutlinedPurple />,
    to: ''
  },
  {
    title: "Inbound Shipments",
    text: "Displays inbound shipments and their receiving status.",
    icon: <IconInboundShipmentsOutlinedPurple />,
    to: ''
  },
  {
    title: "Inventory Turnover",
    text: "Shows the rate at which inventory is sold and replaced over a given time period.",
    icon: <IconInventoryTurnoverOutlinedPurple />,
    to: ''
  }
];