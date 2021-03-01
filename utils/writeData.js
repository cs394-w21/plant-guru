import { db} from "../utils/firebase";

const writeUserData = (userID, userData) => {
    db.ref("users").child(userID).set(userData);
}

export default writeUserData;