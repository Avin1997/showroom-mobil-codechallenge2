"use client";

import Link from "next/link";
import Image from "next/image";

export default function Card({ sorum }) {
  const { tittle, thumbnail } = sorum.fields;
  const id = sorum.sys.id;
  return (
    <article>
      <div>
        <div className="mb-10 mt-20 h-40">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt="thumbnail image"
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div>
          <h2 className="justify- text-2xl font-bold">Toyota {tittle}</h2>
          <div className="mt-4 grid grid-cols-2 font-bold">
            <button className="object-fill text-start hover:text-red-500">
              Lihat Detail
            </button>
            <Link href={`/service/${id}`} className="hover:text-red-500">
              Beli Sekarang
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
