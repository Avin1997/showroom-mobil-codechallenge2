import Image from "next/image";

import { createClient } from "contentful";

async function getSorum(id) {
  try {
    const client = createClient({
      space: "1rmnwsc8cted",
      accessToken: "0PfmijHaMNyyrbBj-aQderHlr3zv5gIf3U0R4lgwpTw",
    });
    const res = await client.getEntry(id);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }) {
  const sorum = await getSorum(params.id);
  const { tittle, feathureImage, specification, price, ulasan, rating } =
    sorum.fields;

  return (
    <div>
      <section className="mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold">Toyota {tittle}</h3>
        <p>Price: {price}</p>
        <div className="h-80">
          <Image
            src={`https:${feathureImage.fields.file.url}`}
            alt="Featured image."
            width={feathureImage.fields.file.details.image.width}
            height={feathureImage.fields.file.details.image.height}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="mb-2 text-xl font-extrabold">Specification</h4>
          <ul className="pl-4">
            {specification.map((spek) => (
              <li key={spek} className="list-disc">
                {spek}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-4xl">
        <div className="">
          <h4 className="mb-2 text-xl font-extrabold">Ulasan</h4>
          <ul className="">
            {ulasan.map((ulas) => (
              <li key={ulas} className="">
                ⭐⭐⭐⭐⭐ <br />
                {ulas}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
