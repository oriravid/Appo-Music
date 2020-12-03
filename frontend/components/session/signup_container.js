//ext
import { connect } from "react-redux";
//int - actions
import { createNewUser } from "../../actions/session";
//int - containers
import Signup from "./signup";

const mapDTP = (dispatch) => ({
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDTP)(Signup);
