import { AppLayout } from "./layout/AppLayout";
import { useEffect, useState } from "react";
import { store } from "./store";

export const App = () => {
	const [, setState] = useState({});

	useEffect(() => {
		const unsubscribe = store.subscribe(() => setState(store.getState()));
		return () => unsubscribe();
	}, []);

	return <AppLayout />;
};
