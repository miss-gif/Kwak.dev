import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const verifyPassword = async (
  inputPassword: string,
): Promise<boolean> => {
  const docRef = doc(db, "admin", "password");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const storedPassword = docSnap.data().password; // Firestore에 저장된 password 값
    return storedPassword === inputPassword;
  } else {
    throw new Error("Password document not found in Firestore.");
  }
};
