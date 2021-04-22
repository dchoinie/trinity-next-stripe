import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "cv1xiyya",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-04-21",
});
