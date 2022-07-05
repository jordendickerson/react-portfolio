import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faBan,
  faSpinner,
  faPlusCircle,
  faRectangleXmark,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faBan,
    faSpinner,
    faPlusCircle,
    faRectangleXmark,
    faEnvelope,
    faPhone
    );
}

export default Icons;
