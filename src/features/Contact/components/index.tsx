import { useState } from "react";
import ContactForm from "./ContactForm";
import ThankYouMessage from "./ThankYouMessage";

const Contact = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmitSuccess = () => setIsComplete(true);
  const handleReset = () => setIsComplete(false);

  return (
    <div className="flex w-full justify-center">
      {isComplete ? <ThankYouMessage onReset={handleReset} /> : <ContactForm onSubmitSuccess={handleSubmitSuccess} />}
    </div>
  );
};

export default Contact;
