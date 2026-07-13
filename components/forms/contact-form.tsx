"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { submitContactForm } from "@/app/contact/actions";
import { trackEvent } from "@/lib/analytics";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { TurnstileWidget } from "@/components/forms/turnstile-widget";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      consent: undefined as unknown as true,
      website: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage(null);

    const result = await submitContactForm({ ...values, turnstileToken });

    if (result.status === "success") {
      setStatus("success");
      trackEvent("Contact Form Submitted");
    } else {
      setStatus("error");
      setErrorMessage(result.message);
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-2xl border border-lime/40 bg-lime/10 p-6 text-ink">
        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" />
        <p className="leading-relaxed">
          Thank you for reaching out. We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {status === "error" && errorMessage && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
        {errors.fullName?.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        {errors.email?.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" aria-invalid={!!errors.message} {...register("message")} />
        {errors.message?.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <Checkbox id="contact-consent" aria-invalid={!!errors.consent} {...register("consent")} />
          <Label htmlFor="contact-consent" className="mb-0 font-normal">
            I consent to IntentNorth Solutions contacting me about this message.
          </Label>
        </div>
        {errors.consent?.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      <TurnstileWidget onVerify={setTurnstileToken} onExpire={() => setTurnstileToken("")} />

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
