 import UserReducer  from "../reducer/userReducer";
import { legacy_createStore as createStore } from "redux";

 let Store = createStore(UserReducer);

 export default Store;