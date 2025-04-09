import { Client } from "@elastic/elasticsearch";

const elasticClient = new Client({
  node: `${process.env.ELASTICSEARCH_URL}`,
  auth: {
    apiKey: `${process.env.ELASTIC_API_KEY}`,
  },
});

async function checkConnection() {
  try {
    const info = await elasticClient.info();
    console.log("Elastic Search Connected", info.version.number);
    return true;
  } catch (error) {
    console.error("Elastic search connection error", error);
    return false;
  }
}

async function createIndex(indexName: string) {
  try {
    const exists = await elasticClient.indices.exists({ index: indexName });

    if (!exists) {
      await elasticClient.indices.create({
        index: indexName,
        mappings: {
          dynamic: false,
          properties: {
            id: {
              type: "text",
            },
            title: {
              type: "text",
            },
            description: {
              type: "text",
            },
            createdAt: {
              type: "date",
              format: "yyyy-MM-dd",
            },
          },
        },
      });
      console.log(`Index ${indexName} created successfully`);
    } else {
      return;
    }
  } catch (error) {
    console.error(`Error creating index ${indexName}:`, error);
  }
}

export { elasticClient, checkConnection, createIndex };
