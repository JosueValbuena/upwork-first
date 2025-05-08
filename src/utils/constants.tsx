import type { NavigationLink } from "@/types";

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
  ]