import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const authToken = request.cookies.get("authToken")?.value;

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    return NextResponse.next();
  } catch (error: any) {
    cookieStore.set({
      name: "authError",
      value: error.response?.data?.message || "Authentication failed",
      httpOnly: true,
      path: "/",
    });

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!login|signup|_next/static|_next/image|favicon.ico).*)"],
};
