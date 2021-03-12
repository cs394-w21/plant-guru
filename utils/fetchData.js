import { useState, useCallback, useEffect } from "react";
import { db as database} from "../utils/firebase";
const getUserData = (appData, userID) => {
    if (appData === undefined) return null;
    const { users } = appData;
    if (users === undefined) return null;
    return users[userID];
  };
  
  const fetchUserData = (userID) => {
    const [userData, updateUserDataInternal] = useState("");
  
    const updateUserData = useCallback(
      (snap) => {
        const val = snap.val();
        return val && updateUserDataInternal(val);
      },
      [updateUserDataInternal]
    );
  
    useEffect(() => {
      const db = database.ref();
      db.on("value", updateUserData, window.alert);
  
      return () => {
        db.off("value", updateUserData);
      };
    }, [updateUserData]);
  
    return {
      loading: !userData,
      userData: getUserData(userData, userID),
    };
  };

export default fetchUserData;