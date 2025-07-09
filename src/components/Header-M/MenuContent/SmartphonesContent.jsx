import React from 'react';
import './SmartphonesContent.css';
import RightIcon from '../icons/RightIcon';

const SmartphonesGadgetsContent = () => {
  return (
    <div className="smartphones-gadgets-content">
        <div className='smartphones'>
            <div className='s'>Смартфоны</div>
            <div className='s-list'>
                <div className='item item1'>
                    <div className='i i1'>Apple iPhone</div>
                    <div className='i i2'>123</div>
                </div>
                <div className='item item2'>
                    <div className='i i1'>Смартфоны</div>
                    <div className='i i2'>227</div>
                    <div className='i i3'><RightIcon/></div>
                </div>
                <div className='item item3'>
                    <div className='i i1'>iPhone 16</div>
                    <div className='i i2'>120</div>
                </div>
                <div className='item item4'>
                    <div className='i i1'>Складные</div>
                    <div className='i i2'>30</div>
                </div>
                <div className='item item5'>
                    <div className='i i1'>realme</div>
                    <div className='i i2'>120</div>
                </div>
                <div className='item item6'>
                    <div className='i i1'>Huawei Mate X6</div>
                    <div className='i i2'>100</div>
                </div>
                <div className='item item7'>
                    <div className='i i1'>Кнопочные</div>
                    <div className='i i2'>23</div>
                </div>
                <div className='item item8'>
                    <div className='i i1'>Домашние</div>
                    <div className='i i2'>17</div>
                </div>
                <div className='item item9'>
                    <div className='i i1'>Samsung</div>
                    <div className='i i2'>27</div>
                </div>
            </div>
        </div>
        <div className='gadgets'>
            <div className='g'>Гаджеты</div>
            <div className='g-list'>
                <div className='item item1'>
                    <div className='i i1'>Смарт-часы</div>
                    <div className='i i2'>15</div>
                </div>
                <div className='item item2'>
                    <div className='i i1'>Смарт-кольца</div>
                    <div className='i i2'>34</div>
                </div>
                <div className='item item3'>
                    <div className='i i1'>Наушники</div>
                    <div className='i i2'>21</div>
                </div>
                <div className='item item4'>
                    <div className='i i1'>Гарнитуры</div>
                    <div className='i i2'>12</div>
                </div>
                <div className='item item5'>
                    <div className='i i1'>Портативное аудио</div>
                    <div className='i i2'>42</div>
                </div>
                <div className='item item6'>
                    <div className='i i1'>Умные гаджеты</div>
                    <div className='i i2'>46</div>
                </div>
                <div className='item item7'>
                    <div className='i i1'>Очки VR</div>
                    <div className='i i2'>49</div>
                </div>
                <div className='item item8'>
                    <div className='i i1'>Для блогеров</div>
                    <div className='i i2'>32</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SmartphonesGadgetsContent;