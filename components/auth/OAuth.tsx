import Image from "next/image";
import googleLogo from "@/public/icons8-google.svg";
import facebookLogo from "@/public/icons8-facebook.svg";
import appleLogo from "@/public/icons8-apple.svg";

type OAuthProps = {
  isDisable: boolean;
};

export default function OAuth({ isDisable }: OAuthProps) {
  return (
    <div className="flex justify-center gap-2 md:gap-4">
      <button
        type="button"
        disabled={isDisable}
        className={`p-2 md:p-3 rounded-full border border-gray-300 ${
          isDisable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
        } transition-colors`}
      >
        <Image src={googleLogo} alt="Google Logo" height={20} width={20} />
      </button>
      <button
        type="button"
        disabled={isDisable}
        className={`p-2 md:p-3 rounded-full border border-gray-300 ${
          isDisable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
        } transition-colors`}
      >
        <Image src={facebookLogo} alt="Facebook Logo" height={20} width={20} />
      </button>
      <button
        type="button"
        disabled={isDisable}
        className={`p-2 md:p-3 rounded-full border border-gray-300 ${
          isDisable ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
        } transition-colors`}
      >
        <Image src={appleLogo} alt="Apple Logo" height={20} width={20} />
      </button>
    </div>
  );
}
