import type { CurrencyList, NavigationLink, TimeList } from "@/types";

export const navigationLinks: NavigationLink[] = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: 'home'
    },
    {
        label: 'Listings',
        path: '/listings',
        icon: 'list'
    },
    {
        label: 'Uploads',
        path: '/uploads',
        icon: 'upload'
    },
    {
        label: 'Strategies',
        path: '/strategies',
        icon: 'lightbulb'
    },
    {
        label: 'Analytics',
        path: '/analytics',
        icon: 'chart'
    },
    {
        label: 'Recommendations',
        path: '/recommendations',
        icon: 'star'
    },
];

//mocks

export const metrics = [
    {
      value: "435",
      label: "Total Active SKUs",
      /* icon: FileText, */
      hasInfo: true,
      color: "text-indigo-500",
    },
    {
      value: "54%",
      label: "Profit Margin",
      /* icon: Wallet, */
      hasInfo: true,
      timeframe: "30 days",
      hasTimeframeDropdown: true,
      color: "text-indigo-500",
      tag: "Pro",
    },
    {
      value: "124",
      label: "Est. Days Of Inventory Left",
      /* icon: Package, */
      hasInfo: true,
      color: "text-indigo-500",
    },
    {
      value: "$100,000",
      label: "Profit",
      /* icon: BarChart3, */
      timeframe: "30 days",
      hasTimeframeDropdown: true,
      color: "text-indigo-500",
    },
    {
      value: "157",
      label: "Total Units on Hand",
      /* icon: User, */
      hasInfo: true,
      color: "text-indigo-500",
    },
    {
      value: "67",
      label: "Inventory Cost",
      /* icon: Home, */
      hasInfo: true,
      color: "text-indigo-500",
    },
    {
      value: "100",
      label: "Total Amazon Balance",
      /* icon:, */
      hasInfo: true,
      hasRefresh: true,
      refreshTime: "12-1-23 7:12 PM",
      color: "text-indigo-500",
    },
    {
      value: "120",
      label: "Buy Box Ownership %",
      /* icon: Box, */
      hasInfo: true,
      timeframe: "30 days",
      hasTimeframeDropdown: true,
      color: "text-indigo-500",
    },
    {
      value: "127",
      label: "Sell-Through Rate",
/*       icon: TrendingUp, */
      hasInfo: true,
      timeframe: "30 days",
      hasTimeframeDropdown: true,
      color: "text-indigo-500",
    },
    {
      value: "107",
      label: "ASIN Reprice Changes",
      /* icon: RefreshCw, */
      hasInfo: true,
      color: "text-indigo-500",
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