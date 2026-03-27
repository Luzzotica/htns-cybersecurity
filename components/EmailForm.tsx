"use client";

import { track } from "@vercel/analytics";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailSchema, type EmailFormData } from "@/lib/validations";

type FormVariant = "first-chapter" | "newsletter" | "resource";

interface EmailFormProps {
  variant: FormVariant;
  submitLabel?: string;
  onSuccess?: () => void;
  resourceType?: string;
  successMessage?: string;
}

const API_ENDPOINTS: Record<FormVariant, string> = {
  "first-chapter": "/api/subscribe",
  newsletter: "/api/newsletter",
  resource: "/api/subscribe",
};

const CONVERSION_KEYS: Record<FormVariant, string> = {
  "first-chapter": "first_chapter_signup",
  newsletter: "newsletter_signup",
  resource: "resource_signup",
};

export function EmailForm({
  variant,
  submitLabel,
  onSuccess,
  resourceType,
  successMessage,
}: EmailFormProps) {
  const pathname = usePathname() ?? "/";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const defaultLabels: Record<FormVariant, string> = {
    "first-chapter": "Get the First Chapter",
    newsletter: "Subscribe",
    resource: "Get Access",
  };

  const label = submitLabel ?? defaultLabels[variant];

  const onSubmit = async (data: EmailFormData) => {
    setError(null);
    try {
      const body =
        variant === "resource" && resourceType
          ? { ...data, resourceType }
          : data;
      const res = await fetch(API_ENDPOINTS[variant], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          body.error ?? "Something went wrong. Please try again.",
        );
      }

      track("email_submission", {
        form: CONVERSION_KEYS[variant],
        path: pathname,
      });

      setIsSubmitted(true);
      if (variant === "first-chapter") {
        window.location.href = "/thank-you";
      } else {
        onSuccess?.();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const defaultSuccessMessage =
    variant === "newsletter"
      ? "You're subscribed! Check your inbox for the first five-minute read."
      : "Check your email—your resource is on the way.";
  const successMsg = successMessage ?? defaultSuccessMessage;

  if (isSubmitted && variant !== "first-chapter") {
    return (
      <p className="text-lg text-emerald-700 dark:text-emerald-400">
        {successMsg}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-zinc-100 dark:focus:ring-zinc-100"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        {isSubmitting ? "Submitting..." : label}
      </button>
    </form>
  );
}
