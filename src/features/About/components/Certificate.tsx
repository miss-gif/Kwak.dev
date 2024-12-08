import { useState } from "react";
import CertificateCard from "./Certificate-Card";
import { Card } from "@/components/ui/card";
import { certificateInfos, certificateInfosSub } from "@/data/certificateInfos";

const Certificate = () => {
  const [isCard, setIsCard] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4 py-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {certificateInfos.map((certificateInfo, index) => (
        <CertificateCard
          key={index}
          type={certificateInfo.certificateType}
          title={certificateInfo.certificateName}
          organization={certificateInfo.issuingOrganization}
          date={certificateInfo.date}
        />
      ))}
      {!isCard && (
        <Card
          className="flex h-[320px] cursor-pointer items-center justify-center border-2 border-blue-500 bg-white text-blue-500 transition-all delay-100 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsCard((prev) => !prev)}
        >
          그 외 자격증
        </Card>
      )}

      {isCard &&
        certificateInfosSub.map((certificateInfo, index) => (
          <CertificateCard
            key={index}
            type={certificateInfo.certificateType}
            title={certificateInfo.certificateName}
            organization={certificateInfo.issuingOrganization}
            date={certificateInfo.date}
            color="sky"
          />
        ))}
    </div>
  );
};

export default Certificate;
