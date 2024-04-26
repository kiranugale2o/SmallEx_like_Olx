import redis from "redis";

const createRedisClient = async () => {
  const client = redis.createClient({
    password: "XJLFG35w2VcHvQJI4J3q002zKmnDWgcI",
    socket: {
      host: "redis-14676.c305.ap-south-1-1.ec2.redns.redis-cloud.com",
      port: 14676,
    },
  });

  // Handle connection errors
  client.on("error", (err) => {
    console.error("Redis Error:", err);
  });

  // Handle client reconnecting
  client.on("reconnecting", () => {
    console.log("Redis client reconnecting...");
  });
  await client.connect();

  return client;
};

export default createRedisClient;
