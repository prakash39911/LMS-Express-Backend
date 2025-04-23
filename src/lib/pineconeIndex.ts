import { pineconeClient } from "./PineconeClient";

export async function createPineconeIndexIfNotExist(indexName: string) {
  try {
    const indexes = await pineconeClient.listIndexes();
    const indexList = indexes.indexes;

    const indexExist = indexList?.some((index) => index.name === indexName);

    if (!indexExist) {
      await pineconeClient.createIndex({
        name: indexName,
        vectorType: "dense",
        dimension: 1536,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-east-1",
          },
        },
        deletionProtection: "disabled",
      });
    }
  } catch (error) {
    console.error("Error managing Pinecone index:", error);
  }
}
