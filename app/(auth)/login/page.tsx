import Image from "next/image";
import AppLogo from "@/components/svg/AppLogo";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
      <div className="hidden md:block relative w-full lg:w-1/2 h-[50vh] lg:h-[95vh] m-0 lg:m-5">
        <h1 className="absolute top-5 left-5 z-10 text-rose-700 text-xl md:text-2xl font-bold">Marqdown.</h1>
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

      <LoginForm />
    </section>
  );
}
