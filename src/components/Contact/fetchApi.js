import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../../firebase";

const db = getFirestore(app);

const sendContactData = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "contact"), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default sendContactData;