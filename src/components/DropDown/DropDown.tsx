import { FC, RefObject, useEffect, useRef } from 'react';
import { MenuItemType } from '../App/App';
import menuImageTypeOpen from '../../images/close.svg';
import menuImageTypeClose from '../../images/menu.svg';

type PropsType = {
  id: number
  menuItems: MenuItemType[]
  currentOpenedMenu: number
  pageHeigth: number
  pageWidth: number
  handleSetOpenMenu: (id: number) => void
  type?: string
}

const DropDown: FC<PropsType> = (
  {
    id,
    currentOpenedMenu,
    menuItems,
    pageHeigth,
    pageWidth,
    handleSetOpenMenu,
    type,
  }) => {

  const menuRef = useRef() as RefObject<HTMLElement>;
  const listRef = useRef() as RefObject<HTMLUListElement>;

  const closedMenuHeight = 24;

  useEffect(() => {
    setMenuPositions();
  }, [currentOpenedMenu]);

  const handleMenuToggle = () => {
    if (currentOpenedMenu === id) {
      handleSetOpenMenu(0);
    } else {
      handleSetOpenMenu(id);
    }
  };

  const handleOpenCurrentMenu = () => {
    handleSetOpenMenu(id);
  };

  const willMenuMoveUp = (menuPosition: DOMRect, menuHeigth: number) => {
    if (pageHeigth - menuPosition.y < menuHeigth) {
      const menuTranslateValue = pageHeigth - menuHeigth - menuPosition.y;
      menuRef.current!.style.transform = `translateY(${menuTranslateValue}px)`;
    }
  };

  const willMenuMoveDown = (menuPosition: DOMRect, menuHeigth: number) => {
    if (menuHeigth > menuPosition.y) {
      const menuTranslateValue = menuHeigth - menuPosition.y + 20;
      menuRef.current!.style.transform = `translateY(${menuTranslateValue}px)`;
    }
  };

  const setMenuPositions = () => {
    const menuItems = listRef!.current;
    const menuPosition = menuRef.current!.getBoundingClientRect();
    const menuItemsHeight = listRef?.current!.clientHeight;
    const menuHeigth = menuItemsHeight + closedMenuHeight;

    if ((menuPosition.x < pageWidth / 2) && menuPosition.y < pageHeigth / 2) {
      willMenuMoveUp(menuPosition, menuHeigth);
      menuItems!.style.left = '0';
      menuItems!.style.top = '100%';
      menuItems!.style.transform = 'translate(0, 0)';
    } else if ((menuPosition.x < pageWidth / 2) && menuPosition.y >= pageHeigth / 2) {
      willMenuMoveDown(menuPosition, menuHeigth);
      menuItems!.style.left = '0%';
      menuItems!.style.top = '0%';
      menuItems!.style.transform = 'translate(0, -100%)';
    } else if ((menuPosition.x > pageWidth / 2) && menuPosition.y < pageHeigth / 2) {
      willMenuMoveUp(menuPosition, menuHeigth);
      menuItems!.style.left = '100%';
      menuItems!.style.top = '100%';
      menuItems!.style.transform = 'translate(-100%, 0)';
    } else if ((menuPosition.x >= pageWidth / 2) && menuPosition.y >= pageHeigth / 2) {
      willMenuMoveDown(menuPosition, menuHeigth);
      menuItems!.style.left = '100%';
      menuItems!.style.top = '0';
      menuItems!.style.transform = 'translate(-100%, -100%)';
    }
  };

  return (
    <nav onMouseEnter={handleOpenCurrentMenu} ref={menuRef} className={`menu ${`menu_type_${type}`}`}>
      <button
        onClick={handleMenuToggle}
        type='button'
        className='menu__button'
      >
        <img
          src={currentOpenedMenu === id ? menuImageTypeOpen : menuImageTypeClose}
          alt='Menu'
          className='menu__image'
        />
      </button>
      <ul
        ref={listRef}
        className={`menu__items ${currentOpenedMenu === id ? 'menu__items_type_visible' : ''}`}
      >
        {
          menuItems.map((menuItem) => {
            return (
              <li
                key={menuItem.id}
                className='menu__item'
              >
                {menuItem.id}. {menuItem.title}
                <img
                  src={menuItem.image}
                  alt={menuItem.title}
                  className='menu__item-image' />
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
};

export default DropDown;