import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mlggddqq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Sei nella lista!</h3>
        <p className="text-muted-foreground">
          Ti contatteremo presto con l'accesso esclusivo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-4"
    >
      {/* Anti-spam honeypot */}
      <input type="text" name="_gotcha" className="hidden" />

      <Input
        type="email"
        name="email"
        placeholder="La tua email"
        required
        className="w-full"
      />

      <Input
        type="number"
        name="ettari"
        placeholder="Ettari gestiti (opzionale)"
        className="w-full"
        min="0"
      />

      <Select name="sfida">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sfida principale (opzionale)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sprechi">Sprechi</SelectItem>
          <SelectItem value="burocrazia">Burocrazia</SelectItem>
          <SelectItem value="malattie">Malattie delle piante</SelectItem>
          <SelectItem value="meteo">Condizioni meteo</SelectItem>
          <SelectItem value="costi">Costi di produzione</SelectItem>
          <SelectItem value="altro">Altro</SelectItem>
        </SelectContent>
      </Select>

      <Textarea
        name="message"
        placeholder="Messaggio (opzionale)"
        className="w-full"
        rows={3}
      />

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio in corso..." : "Prenota il tuo posto gratis"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        ⏰ Offerta limitata ai primi 20 iscritti
      </p>
    </form>
  );
};

export default WaitlistForm;
