type AppLogoProps = {
  className: string;
};

export default function AppLogo({ className }: AppLogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Notepad outline */}
      <path
        d="M6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top tabs/spiral binding */}
      <path d="M8 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Note lines */}
      <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 18H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
