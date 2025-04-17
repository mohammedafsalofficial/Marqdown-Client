"use client";

import Link from "next/link";
import Input from "../UI/Input";
import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import OAuth from "./OAuth";

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
    user: undefined,
    errors: undefined,
    token: undefined,
    redirectUrl: undefined,
    metadata: undefined,
  });

  useEffect(() => {
    if (state.success) {
      state.message && toast.success(state.message);

      if (state.redirectUrl) {
        setTimeout(() => router.push(state.redirectUrl as string), 1000);
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
        <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10 text-center text-rose-700">Login</h1>

        {getFieldError("general") && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md text-sm">
            {getFieldError("general")}
          </div>
        )}

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
          placeholder="Enter Password"
          error={getFieldError("password")}
          disabled={isPending}
        />
        <div>
          <Link href={"/forgot-password"} className="flex justify-end">
            <span className="text-rose-500 text-sm md:text-base relative group">
              Forgot Password?
              <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="w-full text-center bg-rose-400 hover:bg-[#f86377] transition-colors duration-300 text-white mt-3 py-2 rounded-md text-sm md:text-base flex items-center justify-center"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="inline-block">
              <span className="text-rose-500 relative group">
                Signup
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
