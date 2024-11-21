import { useState } from "react";
import ContactForm from "./ContactForm";
import ThankYouMessage from "./ThankYouMessage";

const Contact = () => {
  const [complete, setComplete] = useState(false);

  const handleSubmitSuccess = () => {
    setComplete(true);
  };

  const handleReset = () => {
    setComplete(false);
  };

  return (
    <div className="flex w-full items-center justify-center py-4">
      {!complete ? (
        <ContactForm onSubmitSuccess={handleSubmitSuccess} />
      ) : (
        <ThankYouMessage onReset={handleReset} />
      )}
    </div>
  );
};

export default Contact;
