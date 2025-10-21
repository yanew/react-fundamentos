//nao usa ES Modules pq vai rodar direto no Node e o Node nao reconhece ES Modules sem configuração
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  performance: {
    hints: false,  // Desativa o warning sobre o limite de tamanho de arquivo
  },
  mode: 'development', 
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // faz babel-loader rodar para js ou jsx ou /\.jsx$/ para apenas arquivos JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 
              {loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 
              {loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              'sass-loader', 
            ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
  }
};
