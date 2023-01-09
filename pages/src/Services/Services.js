import React from "react";
import s from "./Services.module.scss";
import ServicesImage from "../../assets/main-images/lower-main-image.png";
import FirstImage from "../../assets/main-images/first-image.png";
import SecondImage from "../../assets/main-images/second-image.png";
import ThirdImage from "../../assets/main-images/thirst-image.png";

export default function Services() {
	return (
		<React.Fragment>
			{/* FIRST SERVICE */}
			<section className={s.__Services}>
				<div className={s.__Services__first__block}>
					<p>
						«ABC» — это современный детский логопедический центр в городе Алматы,
						специализирующийся на диагностике, коррекции и реабилитации детей от 2,5 лет
						с когнитивными и нарушениями речевой деятельности. Мы помогаем со следующими проблемами:
					</p>
				</div>
				<div className={s.__Services__second__block}>
					<img src={ServicesImage.src} alt="" />
				</div>
				<div className={s.__Services__third__block}>
					<ul>
						<li>
							Задержка речевого развития
						</li>
						<li>
							Задержка психического развития
						</li>
						<li>
							Общее недоразвитие речи
						</li>
						<li>
							Алалия
						</li>
						<li>
							Дисграфия
						</li>
						<li>
							Дислексия
						</li>
						<li>
							Ринолалия
						</li>
						<li>
							Дизартрия
						</li>
						<li>
							Логоневроз
						</li>
						<li>
							Синдром дефицита внимания и гиперактивности (СДВГ)
						</li>
					</ul>
				</div>
			</section>
			{/* SECOND SERVICE */}
			<section className={s.__Services__original__titles}>
				<h1>
					Наши услуги
				</h1>
				<p>
					Мы предлагаем эффективные образовательные и
					коррекционные программы для детей всех возрастов
				</p>
			</section>
			{/* THIRD SERVICE */}
			<section className={s.__Services__professionals}>
				<div className={s.__Services__professionals__profession}>
					<img src={FirstImage.src} alt="" />
					<div className={s.__Services__professionals__profession__titles}>
						<h1>ЛОГОПЕД</h1>
						<p>Занятия с логопедом – необходимость,
							возникающая при целом ряде проблем развития речи у детей.
							Любое, даже незначительное нарушение на первый взгляд, требует
							профессионального подхода при коррекции.</p>
					</div>
				</div>
				<div className={s.__Services__professionals__profession}>
					<div className={s.__Services__professionals__profession__titles__another}>
						<h1>ДЕФЕКТОЛОГ</h1>
						<p>Часто родители замечают,
							что посещение обычных центров детского развития
							не дает ожидаемой картины, так как малыш с трудом запоминает цифры,
							буквы, не может рисовать линии, не называет количество предметов и т.д,
							то в этом случае занятие с дефектологом просто необходимы.</p>
					</div>
					<img src={SecondImage.src} alt="" />
				</div>
				<div className={s.__Services__professionals__profession}>
					<img src={ThirdImage.src} alt="" />
					<div className={s.__Services__professionals__profession__titles}>
						<h1>ЛОГОПЕДИЧЕСКИЙ МАССАЖ</h1>
						<p>Показанием к логопедическому массажу является дизартрия,
							заикание, ринолалия, нарушения голоса, нарушение тонуса
							мышц артикуляционного аппарата. Его полезно проводить детям с ДЦП,
							повышенным слюноотделением, невнятным звукопроизношением.</p>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}