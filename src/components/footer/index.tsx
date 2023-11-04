import { DATA_FOOTER } from "@/constants/data-footer";
import s from "./styles.module.scss";

export default function Footer() {
	return (
		<footer className={s.sectionFooter}>
			<div className={s.inner}>
				{DATA_FOOTER.map((df, index) => {
					const Icon = df.icon;
					return (
						<span key={index}>
							<Icon />
						</span>
					);
				})}
			</div>
		</footer>
	);
}
