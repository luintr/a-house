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

    type TNavItem = {
        title: string;
        href: string;
        content: string;
        img: string;
    };
    type TNavItemSelected = {
        data: TNavItem;
        setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
        index: number;
        selectedIndicator: string;
    };

    type TFooter = {
        isOpen?: boolean;
    };
}
