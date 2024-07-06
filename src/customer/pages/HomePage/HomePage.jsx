import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/mens_kurta'
import { men_shirt } from '../../../Data/Men/men_shirt'
import { men_jeans } from '../../../Data/Men/men_jeans'
import { men_page1 } from '../../../Data/Pants/men_page1'
import { shoes } from '../../../Data/Shoes/shoes'
import { women_dress } from '../../../Data/Women/women_dress'
import { women_jeans } from '../../../Data/Women/women_jeans'
import { women_top } from '../../../Data/Women/women_top'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men Kurta"}/>
            <HomeSectionCarousel data={men_shirt} sectionName={"Men Shirt"}/>
            <HomeSectionCarousel data={men_jeans} sectionName={"Men Trousers"}/>
            <HomeSectionCarousel data={men_page1} sectionName={"Men Jeans"}/>
            <HomeSectionCarousel data={shoes} sectionName={"Men Shoes"}/>
            <HomeSectionCarousel data={women_dress} sectionName={"Women Dress"}/>
            <HomeSectionCarousel data={women_jeans} sectionName={"Women Jeans"}/>
            <HomeSectionCarousel data={women_top} sectionName={"Women Tops"}/>
        </div>
    </div>
  )
}

export default HomePage