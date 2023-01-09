import React, { useState } from "react";
import s from "./Feedback.module.scss";
import Email from "../../assets/footer-titles/footer-email.png";
import Message from "../../assets/footer-titles/footer-message.png";
import Person from "../../assets/footer-titles/footer-person.png";
import Phone from "../../assets/footer-titles/footer-phone.png";
import emailjs from 'emailjs-com';

export default function Feedback() {

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_0na934o', 'template_ko5fkaa', e.target, 'PdB5SydGhAzjvUUy_')
			.then(() => {
				alert("Ваше данные отправлены")
			}, (error) => {
				console.log(error.text);
			});
	}

	return (
		<React.Fragment>
			<section className={s.__Feedback}>
				<h1>
					ОБРАТНАЯ СВЯЗЬ
				</h1>
				<p>
					ВЫ МОЖЕТЕ ЗАДАТЬ НАМ ВОПРОС
					ИЛИ
					ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
				</p>
				<form onSubmit={sendEmail}>
					<div className={s.__Feedback__person__form}>
						<img src={Person.src} alt="" />
						<input placeholder="Ваше имя" name="user_name" type={'text'} />
					</div>
					<div className={s.__Feedback__person__form}>
						<img src={Phone.src} alt="" />
						<input placeholder="Номер телефона" name="user_number" type={'text'} />
					</div>
					<div className={s.__Feedback__person__form}>
						<img src={Email.src} alt="" />
						<input placeholder="Ваше почта" name="user_email" type={'text'} />
					</div>
					<div className={s.__Feedback__person__form}>
						<img src={Message.src} alt="" />
						<textarea placeholder="Ваше сообщения" name="message" type={'text'} />
					</div>

					<div className={s.__Feedback__button}>
						<input className={s.button} type="submit" value="Отправить" />
					</div>
				</form>
			</section>
		</React.Fragment>
	)
}