import { createStoreHook } from "react-redux";

import rootReducer from "./root-reducer";

const Store = createStoreHook(rootReducer);

export default Store;
