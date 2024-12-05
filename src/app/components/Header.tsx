import Link from "next/link";
import b2b from "@/app/resources/logo/logo.svg";
import EESTEC from "@/app/resources/logo/LC_Skopje_red.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white px-12 w-full">
      <nav className="flex md:justify-between items-center justify-center">
        <Link href={"/"}>
          <Image
            src={EESTEC}
            alt="EESTEC Logo"
            width={100}
            height={100}
            className="py-3"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={b2b}
            alt="EA Logo"
            width={100}
            height={100}
            className="py-3"
          />
        </Link>

        <h3 className="max-md:hidden font-eestec text-eestec text-3xl font-semibold pt-2">
          Power Your Future
        </h3>
      </nav>
    </header>
  );
}
