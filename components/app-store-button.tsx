import Link from "next/link"

export function AppStoreButton() {
  return (
    <Link
      href="https://apps.apple.com"
      target="_blank"
      className="inline-flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
    >
      <div className="mr-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.0415 12.5C17.0415 9.83 19.0415 8.33 19.0415 8.33C19.0415 8.33 17.6665 6.33 15.5415 6.33C13.4165 6.33 12.9165 7.83 11.0415 7.83C9.16651 7.83 7.54151 6.33 5.87484 6.33C4.20818 6.33 2.04151 8 2.04151 12.5C2.04151 17 5.87484 22 7.54151 22C9.20818 22 9.58318 20.5 11.4582 20.5C13.3332 20.5 13.7082 22 15.3748 22C17.0415 22 20.0415 18.5 20.0415 15"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 2C13.5 2.5 12.5 4 12.5 5.5C12.5 7 13.5 8.5 15 9"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div className="text-xs">Download on the</div>
        <div className="text-lg font-semibold leading-tight">App Store</div>
      </div>
    </Link>
  )
}
