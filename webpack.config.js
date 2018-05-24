import path from "path";

export const context = path.join(__dirname, "src");
export const entry = {
    client: "./client/main.js"
};
export const output = {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
};
export const module = {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
    }]
};
export const resolve = {
    modules: [path.join(__dirname, "node_modules")]
}
