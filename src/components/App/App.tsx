import './App.css';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';
import shareImage from '../../images/share.svg';
import editImage from '../../images/edit.svg';
import deletImage from '../../images/delete.svg';

export type MenuItemType = {
  title: string
  id: number
  image: string
}

const menuItems: MenuItemType[] = [
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 3,
    image: `${deletImage}`,
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 4,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 5,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 6,
    image: `${deletImage}`,
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 7,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 8,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 9,
    image: `${deletImage}`,
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 10,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 11,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 12,
    image: `${deletImage}`,
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 13,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 14,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 15,
    image: `${deletImage}`,
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 16,
    image: `${shareImage}`,
  },
  {
    title: 'Редактировать страницу',
    id: 17,
    image: `${editImage}`,
  },
  {
    title: 'Удалить страницу',
    id: 18,
    image: `${deletImage}`,
  },
];

function App() {

  const [currentOpenedMenu, setCurrentOpenedMenu] = useState(0);

  const handleCloseMenus = (e: any) => {
    if (e.target.classList.contains('page') && !e.target.classList.contains('menu__items')) {
      setCurrentOpenedMenu(0);
    }
  };

  const handleSetOpenMenu = (id: number) => {
    setCurrentOpenedMenu(id);
  };

  const pageHeigth = window.innerHeight;
  const pageWidth = window.innerWidth;

  return (
    <div onClick={handleCloseMenus} className='page'>
      <DropDown
        id={1}
        menuItems={menuItems}
        currentOpenedMenu={currentOpenedMenu}
        pageHeigth={pageHeigth}
        pageWidth={pageWidth}
        handleSetOpenMenu={handleSetOpenMenu}
        type='tl'
      />
      <DropDown
        id={2}
        menuItems={menuItems}
        currentOpenedMenu={currentOpenedMenu}
        pageHeigth={pageHeigth}
        pageWidth={pageWidth}
        handleSetOpenMenu={handleSetOpenMenu}
        type='tr'
      />
      <DropDown
        id={3}
        menuItems={menuItems}
        currentOpenedMenu={currentOpenedMenu}
        pageHeigth={pageHeigth}
        pageWidth={pageWidth}
        handleSetOpenMenu={handleSetOpenMenu}
        type='bl'
      />
      <DropDown
        id={4}
        menuItems={menuItems}
        currentOpenedMenu={currentOpenedMenu}
        pageHeigth={pageHeigth}
        pageWidth={pageWidth}
        handleSetOpenMenu={handleSetOpenMenu}
        type='br'
      />
    </div>
  );
}

export default App;
