import { useRef, useState, ReactNode, Fragment, useEffect } from "react";
import { motion } from "framer-motion";

export default function Framer({ children, isActive }: TFramer) {
	const ref = useRef<TCustomMotionDivProps>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: any) => {
		const { clientX, clientY } = e;
		const { height, width, left, top } =
			ref.current && ref?.current.getBoundingClientRect();
		const middleX = clientX - (left + width);
		const middleY = clientY - (top + height);
		setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};
	const { x, y } = position;

	return (
		<motion.div
			style={{ position: isActive ? "unset" : "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={isActive ? undefined : { x, y }}
			transition={
				isActive
					? undefined
					: { type: "spring", stiffness: 350, damping: 5, mass: 0.5 }
			}
		>
			{children}
		</motion.div>
	);
}
