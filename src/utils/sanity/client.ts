import { createClient } from "@sanity/client"

const client = createClient({
   projectId: "bjwjshqa", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   // Set to `true` for production environments
   useCdn: false, 
})
export default client