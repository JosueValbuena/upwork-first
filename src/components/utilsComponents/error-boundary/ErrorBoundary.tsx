import React, { Component, type ReactNode } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    /* DialogTrigger, */
} from "@/components/ui/dialog";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Dialog open={this.state.hasError} >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {/* <p className="font-semibold">Something went wrong</p> */}
                            </DialogTitle>
                            <DialogDescription>

                                <div className="p-6 text-center text-red-500">
                                    <h2 className="text-xl font-bold">Algo salió mal.</h2>
                                    <p>Error description: </p>
                                    <p>{this.state.error?.message}</p>
                                    <button
                                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                                        onClick={() => this.setState({ hasError: false, error: null })}
                                    >
                                        Retry
                                    </button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;