import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
            <HomeSectionCarousel data={mens_kurta}/>
        </div>
    </div>
  )
}

export default HomePage