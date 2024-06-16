import Image from "next/image";
import Video from "next-video";
import mobilVideo from "/videos/FORTUNER.mp4";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <section>
        <div>
          <Image
            src="/hero1.jpg"
            width="500"
            height="500"
            className="h-full w-full"
            alt="mobil section"
            priority={true}
            quality={100}
          ></Image>
        </div>
      </section>
      <section className="-mt-10 bg-black">
        <div className="bg-b mx-4 mt-10 grid grid-cols-2 gap-8 p-6 text-white">
          <div>
            <h2 className="pt-8 text-2xl">
              <span className="font-bold text-blue-600">Automatic Sport</span>{" "}
              hadir dengan <span className="font-bold">inovasi</span> baru dan
              menjadi pilihan terbaik bagi anda yang mencari kenyamanan
              berkendara{" "}
            </h2>
            <p className="mt-8 text-xl">
              kepuasaan anda adalah prioritas utama kami, automatic sport sudah
              menjadi langganan bagi banyak pecinta mobil sejak tahun 1980, dan
              kami terus melakukan invosi agar selalu bisa menjadi yang terbaik{" "}
              <Link
                href="/about"
                className="rounded-full border bg-white px-2 font-bold text-black hover:bg-transparent hover:text-white"
              >
                Learn about us
              </Link>
            </p>
          </div>
          <div>
            <Video src={mobilVideo}></Video>
          </div>
        </div>
        <div></div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-8 p-8">
          <div className="">
            <h3 className="text-3xl font-bold">
              Jangan lewatkan <span className="text-blue-700">promo</span>{" "}
              menarik di tahun ini
            </h3>
            <p className="mt-8 text-xl">
              hey car lover, ada kabar gembira nih untuk kalian. Sekarang
              <span className="font-bold"> Automatic Sport</span> sedang
              mengadakan <span className="font-bold">promo</span> besar besaran
              di tahun ini, tunggu apa lagi dapatkan mobil impian anda dengan{" "}
              <span className="font-bold">dp 0%</span> serta dapatkan{" "}
              <span className="font-bold">free</span> accesories serta garansi
              sampai dengan 5 tahun <br />
              <br />
              <Link
                href="/service"
                className="rounded-full border bg-blue-700 p-3 text-white hover:bg-transparent hover:text-blue-700"
              >
                Lihat product
              </Link>
            </p>
          </div>
          <div>
            <Image
              src="/big_deals.png"
              width="500"
              height="500"
              className="h-full w-full"
              alt="mobil section"
              priority={true}
              quality={100}
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
