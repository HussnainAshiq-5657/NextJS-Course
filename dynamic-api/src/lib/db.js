const { username, password } = process.env;
export const ConnectDB = `mongodb+srv://${username}:${password}@cluster0.qztwctv.mongodb.net/ProductsDB?appName=Cluster0`;
