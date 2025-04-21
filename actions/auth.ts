"use server";

import { SignupFormData, AuthResponse, LoginFormData } from "@/types/auth";
import { axiosInstance } from "@/utils/axiosInstance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signupAction(prevState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  const cookieStore = await cookies();
  const signupPayload = Object.fromEntries(formData.entries()) as SignupFormData;

  if (signupPayload.password !== signupPayload.confirmPassword) {
    return {
      ...prevState,
      success: false,
      message: "Passwords do not match",
      errors: [
        {
          field: "confirmPassword",
          message: "Passwords do not match",
        },
      ],
    };
  }

  if (signupPayload.acceptedTerms !== "on") {
    return {
      ...prevState,
      success: false,
      message: "You must accept the terms and conditions to proceed.",
      errors: [
        {
          field: "acceptedTerms",
          message: "Please accept the terms and conditions.",
        },
      ],
    };
  }

  try {
    const response = await axiosInstance.post<AuthResponse>("/auth/register", signupPayload);

    if (response.data.token) {
      cookieStore.set({
        name: "authToken",
        value: response.data.token,
        httpOnly: true,
        path: "/",
      });
    }

    return response.data;
  } catch (error: any) {
    return error.response.data as AuthResponse;
  }
}

export async function loginAction(prevState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  const loginPayload = Object.fromEntries(formData.entries()) as LoginFormData;
  const cookieStore = await cookies();

  cookieStore.set({
    name: "authToken",
    value: "My Auth Token",
    httpOnly: true,
    path: "/",
  });

  try {
    const response = await axiosInstance.post<AuthResponse>("/auth/login", loginPayload);

    if (response.data.token) {
      cookieStore.set({
        name: "authToken",
        value: response.data.token,
        httpOnly: true,
        path: "/",
      });
    }

    return response.data;
  } catch (error: any) {
    return error.response.data as AuthResponse;
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
  redirect("/login");
}

export async function clearAuthErrorCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("authError");
}
