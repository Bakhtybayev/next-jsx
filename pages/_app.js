import React from "react";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../redux-next/store";

export default function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Provider store={store}>
				<NextNProgress
					color="#29D"
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={true}
				/>
				<Component {...pageProps} />
			</Provider>
		</React.Fragment>
	)
}