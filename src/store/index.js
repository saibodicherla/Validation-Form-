import { createStore } from "redux";

import reducers from "./reducers";

const store = createStore(reducers);

// subscribe it to stor values in localstorage
// store.subscribe(() => {console.log("subscirbe : ", store.getState())});

export default store;
