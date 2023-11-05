import React from "react";

declare global {
    type TCustomMotionDivProps = HTMLMotionProps<"div"> & {
        initial: "initial" | "final" | "spring";
        // any other thing
    };

    type TFramer = {
        children: React.ReactNode;
        isActive?: boolean;
    };
    type TDataFooter = {
        title: string;
        href: string;
        icon: () => JSX.Element;
        id: number;
    }[];
}
