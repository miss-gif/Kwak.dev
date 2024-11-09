import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <PageLayout title="문의">
      <SectionWrapper>
        <div className="flex w-full justify-between">
          <ContactInfo />
          <Contact />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default ContactPage;
