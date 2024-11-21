import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Contact from "@/features/Contact/components/Contact";
import ContactInfo from "@/features/Contact/components/ContactInfo";

const ContactPage = () => {
  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="flex w-full justify-between gap-10">
          <ContactInfo />
          <Contact />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ContactPage;
