import { createClient } from "contentful";
import Card from "@/components/card";
import Image from "next/image";

async function getMobil() {
  try {
    const client = createClient({
      space: "1rmnwsc8cted",
      accessToken: "0PfmijHaMNyyrbBj-aQderHlr3zv5gIf3U0R4lgwpTw",
    });
    const res = await client.getEntries({ content_type: "sorumMobil" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Service() {
  const sorums = await getMobil();
  return (
    <div>
      <div>
        <Image
          src="/baner.jpg"
          width="500"
          height="500"
          className="h-full w-full"
          alt="mobil section"
          priority={true}
          quality={100}
        ></Image>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sorums.map((sorum) => (
          <Card key={sorum.id} sorum={sorum} />
        ))}
      </div>
    </div>
  );
}
