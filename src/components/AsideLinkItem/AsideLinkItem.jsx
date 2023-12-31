import s from "./AsideLinkItem.module.css";

export function AsideLinkItem({ link }) {
	return (
		<li>
			<a
				className={`${s.aside__link} ${s[link.img ? "code" : ""] || ""}`}
				href={link.href}
				target={link.target}
				aria-label={link.label}
			>
				{link.icon ? (
					<div className={s.icon}>
						<i className={link.icon} aria-hidden="true" />
					</div>
				) : (
					<img src={link.img} alt={link.alt} />
				)}
				<span>{link.text}</span>
			</a>
			{link.content ? (
				<ul className={s.values_list}>
					{link.content.map((elem, index) => (
						<li key={index}>
							{Object.keys(elem)}
							<span
								className={`${s.values_item} ${
									s[link.alt === "code" ? "skills" : ""] || ""
								}`}
							>
								{Object.values(elem)}
							</span>
						</li>
					))}
				</ul>
			) : (
				""
			)}
		</li>
	);
}
