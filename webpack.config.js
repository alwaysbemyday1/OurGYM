const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "./src/client/js/";

module.exports = {
  mode: "development",
  entry: {
    main: BASE_JS + "main.js",
    home: BASE_JS + "home.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/[name].js", // entry에 있는 이름을 가져가서..
    path: path.resolve(__dirname, "assets"),
    clean: true, // 웹팩 실행 시 assets 폴더 자동삭제, 삭제 후 디렉토리 수정 반영
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};