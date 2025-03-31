import { reducer } from "./reducer";
import { legacy_createStore } from "redux";

export let store = legacy_createStore(reducer);
