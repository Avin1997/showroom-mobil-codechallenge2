import Image from "next/image";

export default function page() {
  return (
    <div>
      <section id="our-team" className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-primary mb-8 text-center text-3xl font-bold">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="my-6 rounded-lg bg-white p-6 text-center shadow-md">
              <Image
                src="/1.jpg"
                width="500"
                height="500"
                className="mb-3 w-full rounded-full"
                alt="mobil section"
                priority={true}
                quality={100}
              ></Image>
              <h3 className="mb-2 text-xl font-semibold">John Doe</h3>
              <p className="text-gray-700">Role: Software Engineer</p>
            </div>

            <div className="my-6 rounded-lg bg-white p-6 text-center shadow-md">
              <Image
                src="/2.jpg"
                width="500"
                height="500"
                className="mb-4 w-full rounded-full"
                alt="mobil section"
                priority={true}
                quality={100}
              ></Image>
              <h3 className="mb-2 text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-700">Role: Graphic Designer</p>
            </div>

            <div className="my-6 rounded-lg bg-white p-6 text-center shadow-md">
              <Image
                src="/3.jpg"
                width="500"
                height="500"
                className="mb-4 w-full rounded-full"
                alt="mobil section"
                priority={true}
                quality={100}
              ></Image>
              <h3 className="mb-2 text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-700">Role: Marketing Manager</p>
            </div>

            <div className="my-6 rounded-lg bg-white p-6 text-center shadow-md">
              <Image
                src="/4.jpg"
                width="500"
                height="500"
                className="mb-4 w-full rounded-full"
                alt="mobil section"
                priority={true}
                quality={100}
              ></Image>
              <h3 className="mb-2 text-xl font-semibold">Peter Johnson</h3>
              <p className="text-gray-700">Role: Seo specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
