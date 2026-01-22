import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
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
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/emiliano-criscuoli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn di Emiliano Criscuoli"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/ilemis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="X (Twitter) di Emiliano Criscuoli"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MelaSmart. Tutti i diritti riservati.</p>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
