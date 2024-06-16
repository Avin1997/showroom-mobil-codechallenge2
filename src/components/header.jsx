import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-between border-8 px-8">
        <Image
          src="/logo.jpg"
          width="200"
          height="200"
          alt="logo mobil"
          priority={true}
          className="h-auto w-auto"
        ></Image>
        <h1 className="text-4xl font-bold shadow-xl">Auotomatic Sport</h1>
        <nav>
          <ul className="mr-5 flex gap-8 text-xl">
            {[
              ["HOME", "/"],
              ["ABOUT US", `/about`],
              ["SERVICE", `/service`],
              ["TEAM", `/team`],
            ].map((menu) => (
              <li>
                <Link href={menu[1]} className="font-bold hover:text-blue-500">
                  {menu[0]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
