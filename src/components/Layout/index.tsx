"use client";
import { ReactNode, useRef, Fragment } from "react";
import Header from "./header";
import Cursor from "../stickyCursor";
import Footer from "./footer";
import { useRefs } from "@/hooks/useRefs";

export default function Layout({ children }: { children: ReactNode }) {
	const stickyElement = useRef<TCustomMotionDivProps>(null);
	const footerRef = useRef<TCustomMotionDivProps>(null);
	return (
		<Fragment>
			<Header ref={stickyElement} />
			<Cursor stickyElement={stickyElement} footerElements={footerRef} />
			{children}
			<Footer ref={footerRef} />
		</Fragment>
	);
}
