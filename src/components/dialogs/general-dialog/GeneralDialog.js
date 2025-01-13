import { createPortal } from "react-dom";

import NotificationsDialog from "../notifications-dialog/NotificationsDialog";

const GeneralDialog = ({ showModal, title, message, onClose }) => {

  return showModal && createPortal(<NotificationsDialog title={title} message={message} onClose={onClose} />, document.body);

};

export default GeneralDialog;
