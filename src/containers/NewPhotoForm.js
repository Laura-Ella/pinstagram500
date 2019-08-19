import { connect } from "react-redux";
import AddPhoto from "../components/AddPhoto/AddPhoto";

const wrapperFunction = connect();
const NewPhotoForm = wrapperFunction(AddPhoto);

export default NewPhotoForm;
