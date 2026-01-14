import logoMelasmart from "@/assets/logo-melasmart.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-center">
          <img
            src={logoMelasmart}
            alt="MelaSmart"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
