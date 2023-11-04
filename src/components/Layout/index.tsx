"use client";
import { ReactNode, useRef, Fragment } from "react";
import Header from "../header";
import Cursor from "../stickyCursor";

export default function Layout({ children }: { children: ReactNode }) {
	const stickyElement = useRef<TCustomMotionDivProps>(null);

	return (
		<Fragment>
			<Header />
			<Cursor stickyElement={stickyElement} />
			{children}
		</Fragment>
	);
}
