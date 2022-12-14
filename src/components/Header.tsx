import React from 'react';
import { Link } from 'react-router-dom';

import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setClosedDrawer } from '../redux/fetchCartSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state: RootState) => state.fetchCartSlice);
  return (
    <header className="d-flex justify-between align-center p-40">
      {/*верхний блок логотип сайта и название*/}
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers 2023</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        {/*верхний блок корзины на главной*/}
        <li className="mr-30 cu-p" onClick={() => dispatch(setClosedDrawer())}>
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} р.</span>
        </li>

        {/*верхний блок лого закладок*/}
        <Link to="/favorite">
          <li className="mr-20 cu-p">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </li>
        </Link>

        {/*верхний блок лого пользователя*/}
        <Link to="/orders">
          <li className="cu-p">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
