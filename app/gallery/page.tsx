import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from The PT Room, a private training studio on North John Street, St Helens.",
};

export default function GalleryPage() {
  return (
    <article>
      <div className="wrap page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>The room.</h1>
        <p className="prose">
          A short set from the studio, instead of the old page of a hundred
          near-identical video frames.
        </p>
      </div>
      <div className="wrap-wide gallery-grid">
        {gallery.map((photo) => (
          <figure key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1100px) 33vw, (min-width: 760px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>
    </article>
  );
}
