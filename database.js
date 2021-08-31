const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://dbuser:codedcouches@cluster0.ylr6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await createUser(client, {
      name: "Zach",
      password: "zachpassword",
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function createUser(client, newUser) {
  const result = await client
    .db("codedCouchesCompany")
    .collection("users")
    .insertOne(newUser);

  console.log(`New user created with the following id: ${result.insertedId}`);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
