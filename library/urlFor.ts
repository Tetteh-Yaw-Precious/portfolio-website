import { client } from "@/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client as any)

function urlFor(source: any) {
  return builder.image(source)
}

export default urlFor