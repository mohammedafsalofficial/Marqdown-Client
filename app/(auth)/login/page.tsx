import Input from "@/components/UI/Input";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "@/public/icons8-google.svg";
import facebookLogo from "@/public/icons8-facebook.svg";
import appleLogo from "@/public/icons8-apple.svg";
import AppLogo from "@/components/svg/AppLogo";

export default function Login() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div className="hidden md:block relative w-full lg:w-1/2 h-[50vh] lg:h-[95vh] m-0 lg:m-5">
        <h1 className="absolute top-5 left-5 z-10 text-rose-700 text-xl md:text-2xl font-bold">Marqdown</h1>
        <Image
          className="object-cover object-center rounded-none lg:rounded-2xl"
          src={"/login.webp"}
          alt="Login Image"
          fill
        />
      </div>

      <div className="md:hidden py-6 w-full flex justify-center items-center relative">
        <div className="flex items-center">
          <AppLogo className="w-8 h-8 text-rose-700" />
          <h1 className="text-rose-700 text-2xl font-bold ml-2">Marqdown</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full px-4">
        <div className="bg-white p-4 md:p-8 space-y-4 md:space-y-5 w-full max-w-[500px]">
          <h1 className="font-bold text-2xl md:text-4xl mb-4 md:mb-10 text-center text-rose-700">Login</h1>
          <Input label="Email" type="email" placeholder="Enter Email" />
          <Input label="Password" type="password" placeholder="Enter Password" />
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
      </div>
    </section>
  );
}
