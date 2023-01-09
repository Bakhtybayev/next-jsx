import Head from "next/head";
import { Mainlayout } from "../components/MainLayot";
import Feedback from "./src/Feedback/Feedback";
import Footer from "./src/Footer/Footer";
import { Header } from "./src/Header/Header";
import Lessons from "./src/Lessons/Lessons";
import Main from "./src/Mainblock/Main";
import Reviews from "./src/Reviews/Reviews";
import Services from "./src/Services/Services";

export default function Index() {
	return (
		<Mainlayout>
			<Head>
				<meta name="keywords" content="next,js,java,php" />
				<meta name="description" content="this is youtube" />
				<meta charSet="utf-8" />
			</Head>
			<Header />
			<Main />
			<Services />
			<Lessons />
			<Reviews />
			<Feedback />
			<Footer />
		</Mainlayout>
	);
};