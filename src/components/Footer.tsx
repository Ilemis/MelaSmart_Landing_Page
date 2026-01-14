import iconMelasmart from "@/assets/icon-melasmart.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img
            src={iconMelasmart}
            alt="MelaSmart"
            className="h-12 w-12 rounded-xl"
          />
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MelaSmart. Tutti i diritti riservati.</p>
            <a
              href="#privacy"
              className="hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
