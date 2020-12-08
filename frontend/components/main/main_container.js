//ext
import { connect } from "react-redux";
//int - containers
import Main from "./main";

const mapSTP = ({ session }) => ({
    currentUser: session.currentUser,
});

export default connect(mapSTP)(Main);
