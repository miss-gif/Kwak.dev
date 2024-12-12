import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Contact from "../components";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  const props = {
    title: "Contact",
    subtitle: "✨ 문의사항을 남겨주세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="my-5 flex flex-col gap-5 md:flex-row">
          <ContactInfo />
          <Contact />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ContactPage;
