import { NextResponse } from "next/server";
import { emailSchema } from "@/lib/validations";

const DEFAULT_SUBSCRIBE_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/1xL67wbkdWfGcuZvxmTX/webhook-trigger/76709a00-fd4d-47f2-bbd7-fd787546185d";

async function sendSubscribeWebhook(email: string): Promise<void> {
  const url =
    process.env.SUBSCRIBE_WEBHOOK_URL ?? DEFAULT_SUBSCRIBE_WEBHOOK_URL;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const errBody = (await res.json().catch(() => ({}))) as {
      status?: string;
      message?: string;
    };
    const detail =
      errBody.status ?? errBody.message ?? res.statusText ?? "Unknown error";
    throw new Error(`Webhook error (${res.status}): ${detail}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = emailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.flatten().fieldErrors.email?.[0] ?? "Invalid email",
        },
        { status: 400 },
      );
    }

    const { email } = parsed.data;

    await sendSubscribeWebhook(email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Subscribe] Error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
