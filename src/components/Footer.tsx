import Container from "@/components/common/Container";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="mt-20 flex flex-col items-center justify-center bg-black bg-opacity-10 py-8">
      <Container>
        <p>ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
