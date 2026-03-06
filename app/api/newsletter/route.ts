import { NextResponse } from "next/server";
import { emailSchema } from "@/lib/validations";

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

    // Placeholder: log for now. Replace with HighLevel or separate newsletter tool.
    console.log("[Newsletter] New five-minute reads subscriber:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
