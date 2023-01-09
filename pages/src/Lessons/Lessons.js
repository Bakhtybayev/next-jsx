import React from "react";
import s from "./Lessons.module.scss";
import FirstLessonsImage from "../../assets/lessons-images/lessons-first.png";
import SecondLessonsImage from "../../assets/lessons-images/lessons-second.png";
import ThirstLessonsImage from "../../assets/lessons-images/lessons-first-three.png";
import FouresLessonsImage from "../../assets/lessons-images/lessons-thirt.png";
import FivestLessonsImage from "../../assets/lessons-images/lessons-four.png";
import SixesstLessonsImage from "../../assets/lessons-images/lessons-five.png";

export default function Lessons() {
	return (
		<React.Fragment>
			<section className={s.__Lessons}>
				<h1>Занятия</h1>
				<div className={s.__Lessons__inner__line}>
					{/* FIRST */}
					<main className={s.__Lessons__main__block}>
						<img src={FirstLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 747 321 48 60" target={"_blank"} className={s.__Lessons__text__inner__image}>Подготовка к школе</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1 - 5
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								5 - 7
								<p>лет</p>
							</div>
						</div>
					</main>

					{/* TWO */}
					<main className={s.__Lessons__main__block}>
						<img src={SecondLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 777 700 33 01" target={"_blank"} className={s.__Lessons__text__inner__image}>Игротерапия</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1 - 5
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								3 - 5
								<p>лет</p>
							</div>
						</div>
					</main>

					{/* THREE */}
					<main className={s.__Lessons__main__block}>
						<img src={ThirstLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 777 700 33 01" target={"_blank"} className={s.__Lessons__text__inner__image}>Дисграфия и дислексия</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1 - 5
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								6 - 10
								<p>лет</p>
							</div>
						</div>
					</main>

					{/* FOUR */}
					<main className={s.__Lessons__main__block}>
						<img src={FouresLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 777 700 33 01" target={"_blank"} className={s.__Lessons__text__inner__image}>Нарушение произношения</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								4 - 8
								<p>лет</p>
							</div>
						</div>
					</main>

					{/* FIVE */}
					<main className={s.__Lessons__main__block}>
						<img src={FivestLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 777 700 33 01" target={"_blank"} className={s.__Lessons__text__inner__image}>Логоритмика</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1 - 3
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								3 - 7
								<p>лет</p>
							</div>
						</div>
					</main>

					{/* SIX */}
					<main className={s.__Lessons__main__block}>
						<img src={SixesstLessonsImage.src} alt="" />
						<a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+7 777 700 33 01" target={"_blank"} className={s.__Lessons__text__inner__image}>Запуск речи</a>
						<div className={s.__Lessons__main__block__inner__bottom__information}>
							<div className={s.__Lessons__bottom__first__block}>
								1 - 5
								<p>чел</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								40
								<p>минут</p>
							</div>
							<div className={s.__Lessons__bottom__first__block}>
								4+
								<p>лет</p>
							</div>
						</div>
					</main>
				</div>
			</section>
		</React.Fragment>
	)
}