// Import the Sanity client

import client from "../utils/sanity/client";



// Define the GROQ query outside of the getContent function for better readability
const CONTENT_QUERY = `
  *[_type == "project"] {
    ...,
    coverImage {
      ...,
      asset->
    },
    duration {
      ...
    },
    tags[],
    body
  }
`;

// Async function to fetch content from Sanity
export async function getContent() {
  try {
    // Fetching content using the Sanity client
    const content = await client.fetch(CONTENT_QUERY);
    return content;
  } catch (error) {
    // Log errors to the console
    console.error("Failed to fetch content:", error);
    throw new Error('Failed to retrieve data'); // Rethrow or handle error as needed
  }
}

// Optionally, if you want to log the content when debugging, you could call getContent and log it separately
// This should not be in production code.
if (process.env.NODE_ENV === 'development') {
  getContent().then(console.log).catch(console.error);
}
