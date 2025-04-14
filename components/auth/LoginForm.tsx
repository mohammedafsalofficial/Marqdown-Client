import Image from "next/image";
import Link from "next/link";
import Input from "../UI/Input";
import googleLogo from "@/public/icons8-google.svg";
import facebookLogo from "@/public/icons8-facebook.svg";
import appleLogo from "@/public/icons8-apple.svg";

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full px-4">
      <div className="bg-white p-4 md:p-8 space-y-4 md:space-y-5 w-full max-w-[500px]">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10 text-center text-rose-700">Login</h1>
        <Input label="Email" name="email" type="email" placeholder="Enter Email" />
        <Input label="Password" name="password" type="password" placeholder="Enter Password" />
        <div>
          <Link href={"/forgot-password"} className="flex justify-end">
            <span className="text-rose-500 text-sm md:text-base relative group">
              Forgot Password?
              <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          <button className="w-full text-center bg-rose-400 hover:bg-[#f86377] transition-colors duration-300 text-white mt-3 py-2 rounded-md text-sm md:text-base">
            Log in
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

          <div className="flex justify-center gap-2 md:gap-4">
            <button className="p-2 md:p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <Image src={googleLogo} alt="Google Logo" height={20} width={20} />
            </button>
            <button className="p-2 md:p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <Image src={facebookLogo} alt="Facebook Logo" height={20} width={20} />
            </button>
            <button className="p-2 md:p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <Image src={appleLogo} alt="Apple Logo" height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
