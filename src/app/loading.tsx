import React from "react";

// Assets
import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="animate-bounce">
                <Loader2 className="h-52 w-52 animate-spin text-primary" />
            </div>
        </div>
    );
};

export default Loading;
