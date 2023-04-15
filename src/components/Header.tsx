import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-gray-700">
      <Link href='/'>
        <h1 className="text-white p-5 text-center">Home</h1>
      </Link>
    </div>
  )
}