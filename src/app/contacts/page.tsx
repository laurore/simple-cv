import Modal from "../components/modal";
import Contacts from "./contacts";


function ContactsModal() {
    return (
        <Modal show={true}>
           <Contacts></Contacts>
        </Modal>
    )
}

export default ContactsModal;