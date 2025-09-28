import React from 'react'
import Carousel from './Carousel'
import Cards from './Cards'
import { Edit } from 'lucide-react'
import EditorsPicks from './EditorsPicks'
import MostSavedItems from './MostSavedItems'
import ExcellentValues from './ExcellentValues'
import BestsellingDesigns from './BestsellingDesigns'
import SaleSection from './SaleSection'
import TodayTopDeals from './TodayTopDeals'
import FeaturedSeller from './FeaturedSeller'
import MagazineSection from './MagazineSection'
import InteriorDesigners from './InteriorDesigners'

const Home = () => {
  return (
      <>
        <Carousel />
          <Cards /> 
          <EditorsPicks />
          <MostSavedItems /> 
          <ExcellentValues />
          <BestsellingDesigns />
          <SaleSection />
          <TodayTopDeals />
          <FeaturedSeller />
          <MagazineSection />
          <InteriorDesigners />
  
      </>
  )
}

export default Home