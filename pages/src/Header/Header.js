import React from "react";
import logotype from '../../assets/header-titles/logotype.png';
import Phone from '../../assets/header-titles/header-phone.png';
import Oclock from '../../assets/header-titles/header-oclock.png';
import Location from '../../assets/header-titles/header-Location.png';
import s from './Header.module.scss';

export function Header() {

	return (
		<React.Fragment>
			<div className={s.bigHeader}>
				<header className={s.__header}>
					<div className={s.__header_logotype}>
						<img src={logotype.src} alt="" />
						<p>ЛОГОПЕДИЧЕСКИЙ  ЦЕНТР</p>
					</div>
					<div className={s.__header_logotype}>
						<img src={Phone.src} alt="" />
						<a href="tel:8(747) 865-03-52">8(747) 865-03-52</a>
					</div>
					<div className={s.__header_logotype}>
						<img src={Oclock.src} alt="" />
						<p>09:00 - 17:00</p>
					</div>
					<div className={s.__header_logotype}>
						<img src={Location.src} alt="" />
						<p>Каскелен</p>
					</div>
				</header>
				<nav className={s.__navigations}>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 0)
					}}>ГЛАВНАЯ</p>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 150)
					}}>О НАС </p>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 1280)
					}}>УСЛУГИ</p>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 2300)
					}}>ЗАНЯТИЯ</p>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 3100)
					}}>ОТЗЫВЫ</p>
					<p className={s.__navigations__elem} onClick={() => {
						window.scrollTo(0, 3600)
					}}>КОНТАКТЫ</p>
				</nav>

				{/* burger */}

				{/* <div className={s.__header__burger}>
					<span></span>
					<ul>
						<li>ГЛАВНАЯ</li>
						<li>О НАС</li>
						<li>УСЛУГИ</li>
						<li>ЗАНЯТИЯ</li>
						<li>ОТЗЫВЫ</li>
						<li>КОНТАКТЫ</li>
					</ul>
				</div> */}

			</div>
		</React.Fragment>
	)
}