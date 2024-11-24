import { useState } from "react";
import ProgressMobileStepper from "./ProgressMobileStepper";
import Preview from "./Preview";
import Overview from "./Overview";
import Description from "./Description";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {activeStep === 0 ? <Preview /> : null}
      {activeStep === 1 ? <Overview /> : null}
      {activeStep === 2 ? <Description /> : null}

      <ProgressMobileStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default MultiStepForm;
