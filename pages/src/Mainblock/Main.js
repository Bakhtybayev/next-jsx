import React from "react";
import s from './Main.module.scss';
import MainImage from '../../assets/main-images/main-image.png';

export default function Main() {
	return (
		<React.Fragment>
			<section className={s.__MainBlock}>
				<img src={MainImage.src} alt="" />
				<p className={s.__MainBlock__title}>
					ЛОГОПЕДИЧЕСКИЙ ЦЕНТР
				</p>
				<p className={s.__MainBlock__center__title}>
					Современные методы коррекции в работе с детьми с задержками речевого,
					психоречевого развития, расстройствами аутистического спектра и заиканием.
				</p>
			</section>
		</React.Fragment>
	)
}