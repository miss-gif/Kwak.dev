import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const useJoinAndPost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const joinAndPost = async (
    projectData: Record<string, string>,
    docsData: Record<string, string>,
  ) => {
    const combinedData = { ...projectData, ...docsData };
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "projects"), combinedData);
      console.log("Document written with ID: ", docRef.id);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  return { joinAndPost, isSubmitting };
};

export default useJoinAndPost;
