import { connect } from "react-redux";
import Add from "../components/Add/Add";

const wrapperFunction = connect();
const NewPhotoForm = wrapperFunction(Add);

export default NewPhotoForm;
