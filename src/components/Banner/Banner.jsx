// Banner.jsx
import React from 'react'
import './Banner.css'
import { useMenu } from '../MenuContext'

function Banner() {
  
  const { toggleMenu } = useMenu();

  return (
    <div className='banner'>
        <div className='banner-texts-and-btn'>
            <div className='text1'>Отправляйся в приключения с нашими<br/>
            эпическими лут-корзинами и наборами!</div>
            <div className='text2'>Развивай свои навыки, следуя мудрым стратегиям мастеров, и<br/>
                поднимайся на новый уровень мастерства! С нашей поддержкой<br/>
                каждое твое действие станет частью великого искусства, а победы —<br/>
                результатом точного плана и безупречной подготовки!</div>
            <div className='button-catalog' onClick={toggleMenu}>
                <div className='text3'>В каталог</div>
            </div>
        </div>
    </div>
  )
}

export default Banner;