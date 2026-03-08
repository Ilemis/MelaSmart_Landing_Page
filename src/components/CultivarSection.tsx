import iconMeleto from "@/assets/icon-meleto.png";
import iconVigneto from "@/assets/icon-vigneto.png";

const cultivars = [
  {
    icon: iconMeleto,
    title: "Gestione Meleto",
    accent: "from-[hsl(90,50%,40%)] to-[hsl(120,40%,35%)]",
    border: "border-[hsl(90,50%,40%)]/20",
    bg: "bg-[hsl(90,50%,40%)]/5",
    items: [
      "Agronomo AI specializzato per pomacee",
      "Fasi fenologiche BBCH specifiche del melo",
      "Gestione ticchiolatura, carpocapsa e afidi",
      "Dosaggi calibrati su densità d'impianto",
    ],
  },
  {
    icon: iconVigneto,
    title: "Gestione Vigneto",
    accent: "from-[hsl(340,45%,35%)] to-[hsl(320,40%,30%)]",
    border: "border-[hsl(340,45%,35%)]/20",
    bg: "bg-[hsl(340,45%,35%)]/5",
    items: [
      "Agronomo AI dedicato alla viticoltura",
      "Fasi fenologiche BBCH specifiche della vite",
      "Gestione peronospora, oidio e botrite",
      "Strategie mirate per vitigno e zona climatica",
    ],
  },
];

const CultivarSection = () => {
  return (
    <div className="animate-fade-up-delay-2 mt-8">
      <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        Due colture, un unico ecosistema
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cultivars.map((c) => (
          <div
            key={c.title}
            className={`relative rounded-2xl ${c.border} border ${c.bg} backdrop-blur-sm p-5 md:p-6 shadow-lg overflow-hidden`}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={c.icon}
                alt={c.title}
                className="w-10 h-10 rounded-lg object-contain"
              />
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            </div>
            <ul className="space-y-2">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-gradient-to-br ${c.accent}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultivarSection;
