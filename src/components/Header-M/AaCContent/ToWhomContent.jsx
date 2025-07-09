import React from 'react';
import './ToWhomContent.css'

function ToWhomContent() {
    return (
        <div className="to-whom-content">
            <div className='to-whom'>
                <div className='t-w'>Кому</div>
                <div className='t-w-list'>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Для мужчин</div>
                        <div className='t-w-i2'>123</div>
                    </div>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Для женщин</div>
                        <div className='t-w-i2'>63</div>
                    </div>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Папе</div>
                        <div className='t-w-i2'>120</div>
                    </div>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Сотрудникам</div>
                        <div className='t-w-i2'>30</div>
                    </div>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Мужу</div>
                        <div className='t-w-i2'>120</div>
                    </div>
                    <div className='t-w-item'>
                        <div className='t-w-i1'>Корпоративный</div>
                        <div className='t-w-i2'>100</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToWhomContent;