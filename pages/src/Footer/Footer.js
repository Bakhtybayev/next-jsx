import React from "react";
import s from "./Footer.module.scss";
// import Instagram from "../../assets/social-icons/Instagram_icon.png.webp";
// import Whatsapp from "../../assets/social-icons/whatsapp.png";

export default function Footer() {
	return (
		<React.Fragment>
			<section className={s.__Footer}>
				<h1>A B S</h1>
				<footer className={s.__Footer__footer}>
					<div className={s.__Footer__footer__block}>
						<p> <span>Адрес:</span>
							г. Каскелен, Макашева Абылайхана
						</p>
						<p> <span>Телефон:</span> +77478650352</p>
					</div>
					<div className={s.__Footer__footer__block}>
						<p> <span>Время Работы:</span> Пн-ПТ с 09.00-20.00 </p>
						<p> <span>Instagram:</span> abc.logoped </p>
					</div>
				</footer>
			</section>
		</React.Fragment>
	)
}