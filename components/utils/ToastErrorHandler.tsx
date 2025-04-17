"use client";

import { clearAuthErrorCookie } from "@/actions/auth";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ToastErrorHandler({ errorMessage }: { errorMessage?: string }) {
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }

    clearAuthErrorCookie();
  }, [errorMessage]);

  return null;
}
