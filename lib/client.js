import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "kt20zkmz",
  dataset: "production",
  apiVersion: "2022-05-13",
  useCdn: true,
  token:
    "skwFBkX8iHCCB8caeOAs8KvQAABY84jG2NzYVIIqhE0DOSA98Moz6iNr6c8pq8F7f9k95hlOBZhEf68bUrVXcDW4VQhSu1PziEBOKKxA8EXFoS0OzQhXI46HquLkds26VFlyDfL6vJOaSqsWgpZhcLSnhan1HFjzdofh0WdcXt1s4tMWUILM",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
