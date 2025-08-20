"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }: { children: ReactNode }) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: true,
                dedupingInterval: 5000,
                refreshInterval: 600000
            }}
        >
            {children}
        </SWRConfig>
    );
}