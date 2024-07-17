import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "66950e3b003a812d8d63";
const COLLECTION_ID = "66950e460016d4f7d09c";

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66950dbe0039ca362e4f");

export const databases = new Databases(client);

export { client, DB_ID, COLLECTION_ID };
