// Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css'
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import LogoIcon from './icons/LogoIcon';
import MenuIcon from './icons/MenuIcon';
import TelegramIcon from './icons/TelegramIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import StockIcon from './icons/StockIcon';
import HotOfferIcon from './icons/HotOfferIcon';
import GiftSetsIcon from './icons/GiftSetsIcon';
import EventsIcon from './icons/EventsIcon';
import OurBrandsIcon from './icons/OurBrandsIcon';
import LanguageIcon from './icons/LanguageIcon';
import HeartIcon from './icons/HeartIcon';
import HunterIcon from './icons/HunterIcon';
import BoxIcon from './icons/BoxIcon';
import PlusIcon from './icons/PlusIcon';
import PhoneIconB from './icons/PhoneIconB';
import LaptopIcon from './icons/LaptopIcon';
import TvIcon from './icons/TvIcon';
import SpeakerIcon from './icons/SpeakerIcon';
import FireIcon from './icons/FireIcon';
import NewIcon from './icons/NewIcon';
import RightIcon from './/icons/RightIcon';

import SmartphonesContent from './MenuContent/SmartphonesContent';
import LaptopsContent from './MenuContent/LaptopsContent';
import TVsContent from './MenuContent/TVsContent';
import AudioEquipmentContent from './MenuContent/LaptopsContent';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
    const handleClickOutside = (event) => {
    const isClickInsideMenu = event.target.closest('.menu') || 
    event.target.closest('.dropdown-menu') || 
    event.target.closest('.search-input') || 
    event.target.closest('.telegram') || 
    event.target.closest('.whatsapp');
    
    if (isMenuOpen && !isClickInsideMenu) {
        setIsMenuOpen(false);
    }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [isMenuOpen]);

    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [previousActive, setPreviousActive] = useState(null);

    const handleMenuItemClick = (itemName) => {
    if (activeMenuItem !== itemName) {
        // Сначала сбрасываем предыдущий активный элемент
        setPreviousActive(activeMenuItem);
        // Затем устанавливаем новый активный элемент
        setTimeout(() => {
        setActiveMenuItem(itemName);
        }, 10); // Небольшая задержка для правильной последовательности анимаций
    } else {
        setActiveMenuItem(null);
        setPreviousActive(null);
    }
    };

    useEffect(() => {
    // Очищаем previousActive после завершения анимации
    if (previousActive && activeMenuItem) {
        const timer = setTimeout(() => {
        setPreviousActive(null);
        }, 300); // Должно совпадать с длительностью анимации
        
        return () => clearTimeout(timer);
    }
    }, [activeMenuItem, previousActive]);
    
    return (
        <header className="header">
            <div className='info'>
                <div className='info-left'>
                    <div className='location'>
                        <LocationIcon/>
                        <div className='text'>Сайлент-Хилл</div>
                    </div>
                    <div className='phone'>
                        <PhoneIcon/>
                        <div className='text'>+7 555 555-37-50</div>
                    </div>
                </div>
                <div className='info-center'>
                    <div className='text'>Ежедневно</div>
                    <div className='text'>9:00 — 21:00</div>
                </div>
                <div className='info-right'>
                    <div className='info-text'>Доставка</div>
                    <div className='info-text'>Оплата</div>
                    <div className='info-text'>Контакты</div>
                </div>
            </div>
            <div className='elements'>
                <div className='logo-div'>
                    <a href=""><LogoIcon/></a>
                </div>
                <div className='menu-elements'>
                    <div className='elements-top'>
                        <div className='menu' onClick={toggleMenu}>
                            <MenuIcon/>
                        </div>
                        {/* Выпадающее меню */}
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                <div className="menu-container">
                                    <div className="dn-menu-elements">
                                        <div className={`menu-elements-size ${activeMenuItem === 'smartphones' ? 'active' : ''} ${previousActive === 'smartphones' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('smartphones')}>
                                            <div className='block1'>
                                                <PhoneIconB className={activeMenuItem === 'smartphones' ? 'active-icon' : ''}/>
                                            </div>
                                            <div className='block2'>Смартфоны и гаджеты</div>
                                            <div className='block3'>
                                                <RightIcon className={activeMenuItem === 'smartphones' ? 'active-icon' : ''}/>
                                            </div>
                                        </div>
                                        <div className={`menu-elements-size ${activeMenuItem === 'laptops' ? 'active' : ''} ${previousActive === 'laptops' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('laptops')}>
                                            <div className='block1'>
                                                <LaptopIcon className={activeMenuItem === 'laptops' ? 'active-icon' : ''}/>
                                            </div>
                                            <div className='block2'>Ноутбуки и компьютеры</div>
                                            <div className='block3'>
                                                <RightIcon className={activeMenuItem === 'laptops' ? 'active-icon' : ''}/>
                                            </div>
                                        </div>
                                        <div className={`menu-elements-size ${activeMenuItem === 'tvs' ? 'active' : ''} ${previousActive === 'tvs' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('tvs')}>
                                            <div className='block1'>
                                                <TvIcon className={activeMenuItem === 'tvs' ? 'active-icon' : ''}/>
                                            </div>
                                            <div className='block2'>Телевизоры и цифровое ТВ</div>
                                            <div className='block3'>
                                                <RightIcon className={activeMenuItem === 'tvs' ? 'active-icon' : ''}/>
                                            </div>
                                        </div>
                                        <div className={`menu-elements-size ${activeMenuItem === 'audioequipment' ? 'active' : ''} ${previousActive === 'audioequipment' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('audioequipment')}>
                                            <div className='block1'>
                                                <SpeakerIcon className={activeMenuItem === 'audioequipment' ? 'active-icon' : ''}/>
                                            </div>
                                            <div className='block2'>Аудиотехника</div>
                                            <div className='block3'>
                                                <RightIcon className={activeMenuItem === 'audioequipment' ? 'active-icon' : ''}/>
                                            </div>
                                        </div>
                                        <div className = 'menu-elements-size'>
                                            <div className='block1'>
                                                <FireIcon />
                                            </div>
                                            <div className='block2'>Акции</div>
                                            <div className='block3'></div>
                                        </div>
                                        <div className = 'menu-elements-size'>
                                            <div className='block1'>
                                                <NewIcon />
                                            </div>
                                            <div className='block2'>Новинки</div>
                                            <div className='block3'></div>
                                        </div>
                                    </div>
                                    {activeMenuItem && (
                                        <div className="menu-content">
                                            {activeMenuItem === 'smartphones' && <SmartphonesContent />}
                                            {activeMenuItem === 'laptops' && <LaptopsContent />}
                                            {activeMenuItem === 'tvs' && <TVsContent />}
                                            {activeMenuItem === 'audioequipment' && <AudioEquipmentContent />}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        <div className='search'>
                            <input type="text" placeholder='Поиск товаров...' className='search-input'/>
                            <button className='search-button'>Найти</button>
                        </div>
                        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                            <div className='telegram'>
                                <TelegramIcon/>
                            </div>
                        </a>
                        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className='whatsapp'>
                                <WhatsAppIcon/>
                            </div>
                        </a>
                    </div>
                    <div className='elements-bottom'>
                        <div className='stock'>
                            <StockIcon/>
                            <p>Акции</p>
                        </div>
                        <div className='hot-offer'>
                            <HotOfferIcon/>
                            <p>Горячее предложение</p>
                        </div>
                        <div className='gift-sets'>
                            <GiftSetsIcon/>
                            <p>Подарочные наборы</p>
                        </div>
                        <div className='events'>
                            <EventsIcon/>
                            <p>События</p>
                        </div>
                        <div className='our-brands'>
                            <OurBrandsIcon/>
                            <p>Наши бренды</p>
                        </div>
                    </div>
                </div>
                <div className='languages'>
                    <LanguageIcon/>
                    <div className='RE'>
                        <span className='RU'>RU</span> <span className='n'>|</span> <span className='EN'>EN</span>
                    </div>
                </div>
                <div className='elements-end'>
                    <div className='icons'>
                        <div className='heart'>
                            <HeartIcon/>
                        </div>
                        <div className='hunter'>
                            <HunterIcon/>
                        </div>
                        <div className='box'>
                            <BoxIcon/>
                        </div>
                    </div>
                    <div className='button-AaC'>
                        <PlusIcon/>
                        <div className='AaC'>Собрать компьютер</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;