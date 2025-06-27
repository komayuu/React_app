import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Product型を定義
  type Product = {
    name: string,
    category: string,
    price: number,
  }
  const products:Array<Product> = [
    {name: "TV", category: "家電", price: 100000},
    {name: "Play Station 5", category: "ゲーム", price: 50000},
    {name: "ノートパソコン", category: "家電", price: 200000},
    {name: "Nintendo Switch", category: "ゲーム", price: 30000},
  ];
	
  return (
    <>
      <table>
        <thead>
          <th>商品名</th>
          <th>カテゴリー</th>
          <th>価格</th>
          <th>10万円以上？</th>
        </thead>
        <tbody>
          {products.map((product, index) => {
            if (product.price >= 100000) {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>YES</td>
                </tr>
              )
            } else {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>NO</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
