// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
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
import RightIcon from './icons/RightIcon';

import SmartphonesContent from './MenuContent/SmartphonesContent';
import LaptopsContent from './MenuContent/LaptopsContent';
import TVsContent from './MenuContent/TVsContent';
import AudioEquipmentContent from './MenuContent/LaptopsContent';

import EventsContent from './shgeo-Content/EventsContent';

import GroupIcon from './icons/GroupIcon';
import AdventureGamesIcon from './icons/AdventureGamesIcon';
import ComputerCaseIcon from './icons/ComputerCaseIcon';
import ToWhomContent from './AaCContent/ToWhomContent';
import OccasionContent from './AaCContent/OccasionContent';
import FillingContent from './AaCContent/FillingContent';

import { useMenu } from '../MenuContext';

function Header() {
    // Menu
    const { isMenuOpen, toggleMenu } = useMenu();
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [previousActive, setPreviousActive] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickInsideMenu = event.target.closest('.menu') || 
            event.target.closest('.dropdown-menu') || 
            event.target.closest('.search-input') || 
            event.target.closest('.telegram') || 
            event.target.closest('.whatsapp');
            
            if (isMenuOpen && !isClickInsideMenu) {
                toggleMenu();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, toggleMenu]);

    const handleMenuItemClick = (itemName) => {
    if (activeMenuItem !== itemName) {
        
        setPreviousActive(activeMenuItem);
        
        setTimeout(() => {
        setActiveMenuItem(itemName);
        }, 10);
    } else {
        setActiveMenuItem(null);
        setPreviousActive(null);
    }
    };

    useEffect(() => {
        if (previousActive && activeMenuItem) {
            const timer = setTimeout(() => {
                setPreviousActive(null);
            }, 300);
            
            return () => clearTimeout(timer);
        }
    }, [previousActive, activeMenuItem]);

    // Item
    const [isItemOpen, setIsItemOpen] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const [previousItemActive, setItemPreviousActive] = useState(null);

    const toggleItem = () => {
        setIsItemOpen(!isItemOpen)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickInsideItem = event.target.closest('.events');

            if (isItemOpen && !isClickInsideItem) {
                setIsItemOpen(false)
                setActiveItem(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isItemOpen]);

    const handleItemClick = (itemName) => {
    if (activeItem !== itemName) {
        
        setItemPreviousActive(activeItem);
        
        setTimeout(() => {
        setActiveItem(itemName);
        }, 10);
    } else {
        setActiveItem(null);
        setItemPreviousActive(null);
    }
    };

    useEffect(() => {
    
    if (previousItemActive && activeItem) {
        const timer = setTimeout(() => {
        setItemPreviousActive(null);
        }, 300);
        
        return () => clearTimeout(timer);
    }
    }, [activeItem, previousItemActive]);

    // AaC-Item
    // Состояние для управления открытием/закрытием контейнера
    const [isAaCOpen, setIsAaCOpen] = useState(false);
    // Переход
    const [activeAaCItem, setActiveAaCItem] = useState(null);
    const [previousAaCItemActive, setAaCItemPreviousActive] = useState(null);
    // Обработчик для кнопки
    const toggleAaC = () => {
        setIsAaCOpen(!isAaCOpen);
    };
    // Обработчик клика вне контейнера
    useEffect(() => {
    const handleClickOutside = (event) => {
        const isClickInsideAaC = event.target.closest('.button-AaC') || 
        event.target.closest('.dropdown-AaC');
        
        if (isAaCOpen && !isClickInsideAaC) {
            setIsAaCOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [isAaCOpen]);
    // Переход
    const handleAaCItemClick = (itemName) => {
    if (activeAaCItem !== itemName) {
        
        setAaCItemPreviousActive(activeAaCItem);
        
        setTimeout(() => {
        setActiveAaCItem(itemName);
        }, 10);
    } else {
        setActiveAaCItem(null);
        setAaCItemPreviousActive(null);
    }
    };

    useEffect(() => {
    
    if (previousAaCItemActive && activeAaCItem) {
        const timer = setTimeout(() => {
        setAaCItemPreviousActive(null);
        }, 300);
        
        return () => clearTimeout(timer);
    }
    }, [activeAaCItem, previousAaCItemActive]);
    // Обработчик скролла
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const elementsTop = document.querySelector('.elements-top');
        if (elementsTop) {
            const rect = elementsTop.getBoundingClientRect();
            setIsScrolled(rect.top <= 0);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='header'>
            <div className='info'>
                <div className='info-left'>
                    <div className='location'>
                        <LocationIcon/>
                        <div className='info-text'>Сайлент-Хилл</div>
                    </div>
                    <div className='phone'>
                        <PhoneIcon/>
                        <div className='info-text'>+7 555 555-37-50</div>
                    </div>
                </div>
                <div className='info-center'>
                    <div className='info-text'>Ежедневно</div>
                    <div className='info-text'>9:00 — 21:00</div>
                </div>
                <div className='info-right'>
                    <div className='info-text'>Доставка</div>
                    <div className='info-text'>Оплата</div>
                    <div className='info-text'>Контакты</div>
                </div>
            </div>
            <div className='elements'>
                <div className='elements-top'>
                    <div className='element-t-logo'>
                        <div className='logo'>
                            <a href=""><LogoIcon/></a>
                        </div>
                    </div>
                    <div className='elements-t'>
                        <div className='menu' onClick={toggleMenu}>
                            <MenuIcon/>
                        </div>
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                <div className="dn-menu-elements">
                                    <div className={`menu-element-size ${activeMenuItem === 'smartphones' ? 'active' : ''} ${previousActive === 'smartphones' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('smartphones')}>
                                        <div className='block1'>
                                            <PhoneIconB className={activeMenuItem === 'smartphones' ? 'active-icon' : ''}/>
                                        </div>
                                        <div className='block2'>Смартфоны и гаджеты</div>
                                        <div className='block3'>
                                            <RightIcon className={activeMenuItem === 'smartphones' ? 'active-icon' : ''}/>
                                        </div>
                                    </div>
                                    <div className={`menu-element-size ${activeMenuItem === 'laptops' ? 'active' : ''} ${previousActive === 'laptops' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('laptops')}>
                                        <div className='block1'>
                                            <LaptopIcon className={activeMenuItem === 'laptops' ? 'active-icon' : ''}/>
                                        </div>
                                        <div className='block2'>Ноутбуки и компьютеры</div>
                                        <div className='block3'>
                                            <RightIcon className={activeMenuItem === 'laptops' ? 'active-icon' : ''}/>
                                        </div>
                                    </div>
                                    <div className={`menu-element-size ${activeMenuItem === 'tvs' ? 'active' : ''} ${previousActive === 'tvs' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('tvs')}>
                                        <div className='block1'>
                                            <TvIcon className={activeMenuItem === 'tvs' ? 'active-icon' : ''}/>
                                        </div>
                                    <div className='block2'>Телевизоры и цифровое ТВ</div>
                                        <div className='block3'>
                                            <RightIcon className={activeMenuItem === 'tvs' ? 'active-icon' : ''}/>
                                        </div>
                                    </div>
                                    <div className={`menu-element-size ${activeMenuItem === 'audioequipment' ? 'active' : ''} ${previousActive === 'audioequipment' ? 'previous-active' : ''}`} onClick={() => handleMenuItemClick('audioequipment')}>
                                        <div className='block1'>
                                            <SpeakerIcon className={activeMenuItem === 'audioequipment' ? 'active-icon' : ''}/>
                                        </div>
                                        <div className='block2'>Аудиотехника</div>
                                        <div className='block3'>
                                            <RightIcon className={activeMenuItem === 'audioequipment' ? 'active-icon' : ''}/>
                                        </div>
                                    </div>
                                    <div className = 'menu-element-size'>
                                        <div className='block1'>
                                            <FireIcon />
                                        </div>
                                        <div className='block2'>Акции</div>
                                        <div className='block3'></div>
                                    </div>
                                    <div className = 'menu-element-size'>
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
                        )}
                        <div className='search'>
                            <input type="text" placeholder='Поиск товаров...' className='search-input'/>
                            <button className='search-button'>Найти</button>
                        </div>
                        <div className='tg-wa'>
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
                        <div className='languages'>
                            <LanguageIcon/>
                            <div className='RE'><span className='RU'>RU</span> <span className='n'>|</span> <span className='EN'>EN</span></div>
                        </div>
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
                    </div>
                </div>
                <div className='elements-bottom'>
                    <div className='elements-b'>
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
                        <div className={`events-container ${activeItem === 'events' ? 'active' : ''} ${previousItemActive === 'events' ? 'previous-active' : ''}`} onClick={() => handleItemClick('events')}>
                            <div className='events' onClick={toggleItem}>
                                <EventsIcon/>
                                <p className={activeItem === 'events' ? 'active-text' : 'no-active-text'}>События</p>
                            </div>
                            {isItemOpen && (
                                <div className="dropdown-item-content">
                                    <EventsContent/>
                                </div>
                            )}
                        </div>
                        <div className='our-brands'>
                            <OurBrandsIcon/>
                            <p>Наши бренды</p>
                        </div>
                    </div>
                    <div className="element-b-button">
                        <div className='button-AaC-container'>
                            <div className='button-AaC' onClick={toggleAaC}>
                                <PlusIcon/>
                                <div className='AaC'>Собрать компьютер</div>
                            </div>
                            {isAaCOpen && (
                                <div className="dropdown-AaC">
                                    <div className="AaC-container">
                                        <div className="dn-AaC-elements">
                                            <div className={`AaC-element-size ${activeAaCItem === 'to-whom' ? 'active' : ''} ${previousAaCItemActive === 'to-whom' ? 'previous-active' : ''}`} onClick={() => handleAaCItemClick('to-whom')}>
                                                <div className='block1'>
                                                    <GroupIcon className={activeAaCItem === 'to-whom' ? 'active-icon' : ''}/>
                                                </div>
                                                <div className='block2'>Кому</div>
                                                <div className='block3'>
                                                    <RightIcon className={activeAaCItem === 'to-whom' ? 'active-icon' : ''}/>
                                                </div>
                                            </div>
                                            <div className={`AaC-element-size ${activeAaCItem === 'occasion' ? 'active' : ''} ${previousAaCItemActive === 'occasion' ? 'previous-active' : ''}`} onClick={() => handleAaCItemClick('occasion')}>
                                                <div className='block1'>
                                                    <AdventureGamesIcon className={activeAaCItem === 'occasion' ? 'active-icon' : ''}/>
                                                </div>
                                                <div className='block2'>Повод</div>
                                                <div className='block3'>
                                                    <RightIcon className={activeAaCItem === 'occasion' ? 'active-icon' : ''}/>
                                                </div>
                                            </div>
                                            <div className={`AaC-element-size ${activeAaCItem === 'filling' ? 'active' : ''} ${previousAaCItemActive === 'filling' ? 'previous-active' : ''}`} onClick={() => handleAaCItemClick('filling')}>
                                                <div className='block1'>
                                                    <ComputerCaseIcon className={activeAaCItem === 'filling' ? 'active-icon' : ''}/>
                                                </div>
                                                <div className='block2'>Наполнение</div>
                                                <div className='block3'>
                                                    <RightIcon className={activeAaCItem === 'filling' ? 'active-icon' : ''}/>
                                                </div>
                                            </div>
                                        </div>
                                        {activeAaCItem && (
                                            <div className="AaC-content">
                                                {activeAaCItem === 'to-whom' && <ToWhomContent />}
                                                {activeAaCItem === 'occasion' && <OccasionContent />}
                                                {activeAaCItem === 'filling' && <FillingContent />}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;