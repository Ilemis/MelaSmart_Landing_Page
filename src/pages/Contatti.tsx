import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Linkedin, Twitter, Bug } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import iconMelasmart from "@/assets/icon-melasmart.png";

const Contatti = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Per ora simuliamo l'invio - potrai integrare un servizio come Formspree
      const response = await fetch("https://formspree.io/f/xojewvgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Messaggio inviato!",
          description: "Ti risponderemo al più presto.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Errore nell'invio");
      }
    } catch {
      // Fallback: apri il client email
      const mailtoLink = `mailto:melasmart@proton.me?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      toast({
        title: "Apertura client email",
        description: "Il tuo client email si aprirà per inviare il messaggio.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={iconMelasmart}
                alt="MelaSmart"
                className="h-10 w-10 rounded-xl"
              />
              <span className="font-semibold text-lg text-foreground">MelaSmart</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Torna alla Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contattaci
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non solo una mail, ma un punto di riferimento. Siamo qui per ascoltarti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form di contatto */}
          <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Inviaci un messaggio</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Il tuo nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Oggetto</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Di cosa vuoi parlarci?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Messaggio</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Scrivi il tuo messaggio qui..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
              </Button>
            </form>
          </div>

          {/* Info laterali */}
          <div className="space-y-8">
            {/* Email diretta */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email diretta</h3>
                  <a
                    href="mailto:melasmart@proton.me"
                    className="text-primary hover:underline"
                  >
                    melasmart@proton.me
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Preferisci scriverci direttamente? Risponderemo entro 48 ore lavorative.
              </p>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Seguici sui social</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/emiliano-criscuoli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/ilemis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">X (Twitter)</span>
                </a>
              </div>
            </div>

            {/* Segnala un problema */}
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Bug className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Supporto Tecnico</h3>
                  <p className="text-sm text-muted-foreground">Hai trovato un bug?</p>
                </div>
              </div>
              <a
                href="mailto:melasmart@proton.me?subject=Segnalazione%20Bug%20-%20MelaSmart"
                className="inline-flex items-center gap-2 text-sm text-destructive hover:underline"
              >
                <Bug className="h-4 w-4" />
                Segnala un problema
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contatti;
