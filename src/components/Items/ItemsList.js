import React from 'react';
import useServerGoods from './useServerGoods';
import { Link } from 'react-router-dom';

const ItemsList = () => {
  const { goods, isLoading, error, loadMore } = useServerGoods();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p>Ошибка соединения</p>}
      {isLoading && <p>Загрузка...</p>}
      <button onClick={loadMore}>Загрузить больше</button>
      <br></br>
      <Link to="/">Перейти на главную страницу</Link>
    </div>
  );
};

export default ItemsList;