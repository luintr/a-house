/* eslint-disable react/display-name */

import { DATA_FOOTER } from "@/constants/data-footer";
import s from "./styles.module.scss";
import { forwardRef } from "react";
import Framer from "../../framer";
import { useImperativeHandle } from "react";
import { useRefs } from "@/hooks/useRefs";
import Link from "next/link";

const Footer = forwardRef<TCustomMotionDivProps, TCustomMotionDivProps>(
	(props, ref) => {
		const { refs, setRef } = useRefs();

		// set refs footer
		useImperativeHandle(ref, () => ({
			refs,
		}));

		return (
			<footer className={s.sectionFooter}>
				<div className={s.inner}>
					{DATA_FOOTER.map((df, index) => {
						const Icon = df.icon;
						return (
							<Framer key={index}>
								<Link href={df.href} className={s.itemFooter}>
									<Icon />
									<div
										ref={element => setRef(`${index}`, element)}
										className={`${s.bounds}`}
									></div>
								</Link>
							</Framer>
						);
					})}
				</div>
			</footer>
		);
	}
);

export default Footer;
