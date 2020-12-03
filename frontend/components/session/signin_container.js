//ext
import { connect } from "react-redux";
//int - actions
import { signin } from "../../actions/session";
//int - containers
import Signin from "./signin";

const mapDTP = (dispatch) => ({
    signin: (formUser) => dispatch(signin(formUser)),
});

export default connect(null, mapDTP)(Signin);
