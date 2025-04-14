"use server";

import { SignupData, SignupResponse } from "@/types/auth";
import { axiosPublic } from "@/utils/axiosInstance";

export async function signupAction(prevState: SignupResponse, formData: FormData): Promise<SignupResponse> {
  const signupData = Object.fromEntries(formData.entries()) as SignupData;

  if (signupData.password !== signupData.confirmPassword) {
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

  if (signupData.acceptedTerms !== "on") {
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
    const response = await axiosPublic.post<SignupResponse>("/auth/register", signupData);
    return response.data;
  } catch (error: any) {
    return error.response.data as SignupResponse;
  }
}
