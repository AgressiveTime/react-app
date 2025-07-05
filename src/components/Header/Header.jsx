// Header.jsx
import React from 'react'
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

function Header() {
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
            <a href="">
                <div className='logo-div'>
                    <LogoIcon/>
                </div>
            </a>
            <div className='menu-elements'>
                <div className='elements-top'>
                    <div className='menu'>
                        <MenuIcon/>
                    </div>
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