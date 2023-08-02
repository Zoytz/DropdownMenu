import './App.css';
import DropDown from '../DropDown/DropDown';
import { useCallback, useEffect, useRef, useState } from 'react';

export type MenuItemType = {
  title: string
  id: number
  type: string
}

const menuItems: MenuItemType[] = [
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
  {
    title: 'Поделиться в социальных сетях',
    id: 1,
    type: 'share',
  },
  {
    title: 'Редактировать страницу',
    id: 2,
    type: 'edit',
  },
  {
    title: 'Удалить страницу',
    id: 3,
    type: 'delete',
  },
];

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef: any = useRef();
  const listRef: any = useRef();
  const pageRef: any = useRef();

  const closedMenuHeight = 28;

  const willMenuMoveUp = (pageHeigth: number, menuPosition: DOMRect, menuHeigth: number) => {
    if (pageHeigth - menuPosition.y < menuHeigth) {
      const menuTranslateValue = pageHeigth - menuHeigth - menuPosition.y;
      pageRef.current.style.transform = `translateY(${menuTranslateValue}px)`
    }
  };

  const willMenuMoveDown = (menuPosition: DOMRect, menuHeigth: number) => {
    if (menuHeigth > menuPosition.y) {
      const menuTranslateValue = menuHeigth - menuPosition.y + 20;
      pageRef.current.style.transform = `translateY(${menuTranslateValue}px)`;
    }
  };

  const setMenuPositions = () => {
    const menuItems = listRef.current;
    const menuPosition = menuRef.current.getBoundingClientRect();
    const menuItemsHeight = listRef.current.clientHeight;
    const menuHeigth = menuItemsHeight + closedMenuHeight;
    const pageHeigth = pageRef.current.clientHeight - 40;

    if (menuPosition.x <= 280 && (menuPosition.y < menuHeigth && menuPosition.y < pageHeigth / 2)) {
      willMenuMoveUp(pageHeigth, menuPosition, menuHeigth);
      menuItems.style.left = '0';
      menuItems.style.top = '100%';
      menuItems.style.transform = 'translate(0, 0)';
    } else if (menuPosition.x <= 280 && (menuPosition.y < menuHeigth && menuPosition.y > pageHeigth / 2)) {
      menuItems.style.left = '0%';
      menuItems.style.top = '0%';
      menuItems.style.transform = 'translate(0, -100%)';
      willMenuMoveDown(menuPosition, menuHeigth);
    } else if (menuPosition.x >= 280 && (menuPosition.y < menuHeigth && menuPosition.y < pageHeigth / 2)) {
      willMenuMoveUp(pageHeigth, menuPosition, menuHeigth);
      menuItems.style.left = '100%';
      menuItems.style.top = '100%';
      menuItems.style.transform = 'translate(-100%, 0)';
    } else if (menuPosition.x >= 280 && (menuPosition.y < menuHeigth && menuPosition.y > pageHeigth / 2)) {
      menuItems.style.left = '100%';
      menuItems.style.top = '0';
      menuItems.style.transform = 'translate(-100%, -100%)';
      willMenuMoveDown(menuPosition, menuHeigth);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setMenuPositions();
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div ref={pageRef} className='page'>
      <DropDown
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        menuRef={menuRef}
        listRef={listRef}
      />
    </div>
  );
}

export default App;
