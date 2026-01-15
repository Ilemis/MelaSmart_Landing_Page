import screenshotAssistente from "@/assets/screenshot-assistente.jpg";
import screenshotMagazzino from "@/assets/screenshot-magazzino.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  {
    image: screenshotAssistente,
    title: "Assistente Agronomo",
    description: "IA che ti guida nella creazione di miscele e trattamenti ottimali.",
  },
  {
    image: screenshotMagazzino,
    title: "Magazzino Predittivo",
    description: "Monitora scorte, costi e ricevi suggerimenti intelligenti per gli acquisti.",
  },
];

const ScreenshotCard = ({ screenshot }: { screenshot: typeof screenshots[0] }) => (
  <div className="group relative h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-melasmart-green/10 to-transparent rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative glass rounded-4xl p-6 hover-lift h-full">
      <div className="relative overflow-hidden rounded-3xl bg-secondary/30 flex justify-center">
        <img
          src={screenshot.image}
          alt={screenshot.title}
          className="w-auto max-h-[500px] object-contain"
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
        <p className="text-muted-foreground">{screenshot.description}</p>
      </div>
    </div>
  </div>
);

const AppPreviewSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
            Anteprima App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Un'esperienza <span className="text-gradient-green">intuitiva e potente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interfaccia pensata per il campo: veloce, chiara e sempre a portata di mano.
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <ScreenshotCard screenshot={screenshot} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
