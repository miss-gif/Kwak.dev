import Container from "@/components/common/Container";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="mt-20 flex flex-col items-center justify-center bg-black bg-opacity-5 py-8 dark:bg-white dark:bg-opacity-5">
      <Container>
        <p>ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
