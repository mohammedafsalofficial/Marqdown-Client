"use client";

import Link from "next/link";
import Input from "../UI/Input";
import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import OAuth from "./OAuth";

export default function SignupForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signupAction, {
    success: false,
    message: "",
    user: undefined,
    errors: undefined,
    token: undefined,
    requiresEmailVerification: false,
    redirectUrl: undefined,
    metadata: undefined,
  });

  useEffect(() => {
    if (state.success) {
      state.message && toast.success(state.message);

      if (state.redirectUrl) {
        setTimeout(() => router.push(state.redirectUrl as string), 2000);
      }
    } else {
      state.message && toast.error(state.message);

      if (state.errors) {
        toast.error(state.errors.find((error) => error.field === "general")?.message);
      }
    }
  }, [state]);

  function getFieldError(fieldName: string) {
    return state.errors?.find((error) => error.field === fieldName)?.message;
  }

  return (
    <form action={formAction} className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full px-4">
      <div className="bg-white p-4 md:p-8 space-y-4 md:space-y-5 w-full max-w-[500px]">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10 text-center text-rose-700">Sign Up</h1>

        <Input
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter Full Name"
          error={getFieldError("fullName")}
          disabled={isPending}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          error={getFieldError("email")}
          disabled={isPending}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Create Password"
          error={getFieldError("password")}
          disabled={isPending}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          error={getFieldError("confirmPassword")}
          disabled={isPending}
        />

        <div>
          <div className="flex items-center mb-1">
            <input
              id="terms"
              type="checkbox"
              name="acceptedTerms"
              className="w-4 h-4 text-rose-500 bg-gray-100 border-gray-300 rounded focus:ring-rose-500"
              disabled={isPending}
            />
            <label htmlFor="terms" className="ms-2 text-sm text-gray-700">
              I agree to the{" "}
              <Link href="/terms" className="inline-block">
                <span className="text-rose-500 relative group">
                  Terms and Conditions
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </label>
          </div>

          {getFieldError("acceptedTerms") && (
            <p className="text-xs text-red-500 mb-3">{getFieldError("acceptedTerms")}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full text-center bg-rose-400 hover:bg-[#f86377] transition-colors duration-300 text-white mt-3 py-2 rounded-md text-sm md:text-base flex items-center justify-center"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Signing up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="inline-block">
              <span className="text-rose-500 relative group">
                Log in
                <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>

          <div className="flex items-center my-4 md:my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-xs md:text-sm text-gray-500">or continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <OAuth isDisable={isPending} />
        </div>
      </div>
    </form>
  );
}
