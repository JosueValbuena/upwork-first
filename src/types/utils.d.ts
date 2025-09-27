export interface DashboardMetric {
    value: string | number;
    label: string;
    icon: React.ReactNode;
    info: string;
    metrics?: string[];
    timeframe?: string[];
    scheduleIcon?: React.ReactNode;
    hasRefresh?: boolean;
    refreshIcon?: React.ReactNode;
    refreshTime?: string;
};

export interface RiskStatus {
    label: string,
    icon: React.ReactNode
};

export interface RiskItem {
    value: string;
    label: string;
    state: RiskStatus[];
    icon: React.ReactNode;
    info?: string;
};

export interface AnalyticsItem {
    title: string;
    text: string;
    icon: React.ReactNode;
    to: string
};

export interface SelectListItem {
    value: string,
    label: string,
};