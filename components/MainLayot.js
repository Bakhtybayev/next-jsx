import React from "react"
import Head from "next/head";
import s from '../styles/MainLayot.module.scss';

export function Mainlayout({ children }) {
	return (
		<React.Fragment>
			<Head>
				<title>Логопедический Центр</title>
			</Head>
			<main className={s.Container}>
				{children}
			</main>
		</React.Fragment>
	)
}