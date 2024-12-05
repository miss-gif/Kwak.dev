import Inner from "./Inner";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="mt-20 grid bg-neutral-50 py-8 dark:bg-neutral-950">
      <Inner>
        <p className="text-sm">ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
      </Inner>
    </footer>
  );
};

export default Footer;
