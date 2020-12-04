const path = require("path");

module.exports = {
    entry: "./frontend/index.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
            assets: path.resolve("./app/assets"),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
        ],
    },
};
