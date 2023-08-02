import { FC } from 'react';
import { MenuItemType } from '../App/App';
import menuImageTypeOpen from '../../images/close.svg';
import menuImageTypeClose from '../../images/menu.svg';
import shareImage from '../../images/share.svg';
import editImage from '../../images/edit.svg';
import deleImage from '../../images/delete.svg';

type PropsType = {
  menuItems: MenuItemType[]
  isMenuOpen: boolean
  listRef: any
  menuRef: any
  handleMenuClick: () => void
}

const DropDown: FC<PropsType> = (
  { 
    menuItems, 
    isMenuOpen, 
    handleMenuClick,
    menuRef,
    listRef,
  }) => {

  return (
    <nav ref={menuRef} className='menu'>
      <button
        onClick={handleMenuClick}
        type='button'
        className='menu__button'
      >
        <img
          src={isMenuOpen ? menuImageTypeOpen : menuImageTypeClose}
          alt='Menu'
          className='menu__image'
        />
      </button>
      <ul
        ref={listRef}
        className={`menu__items ${isMenuOpen ? 'menu__items_type_visible' : ''}`}
      >
        {
          menuItems.map((menuItem) => {
            return (
              <li
                key={menuItem.id}
                className='menu__item'
              >
                {menuItem.title}
                <img
                  src={`${menuItem.type === 'share' ? shareImage : menuItem.type === 'edit' ? editImage : deleImage}`}
                  alt={menuItem.type}
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