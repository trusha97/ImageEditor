"use client"
import React from 'react'
import Empower from './BackgroundRemoveTool/Empower'
import EditingTools from './BackgroundRemoveTool/EditingTools'
import GenerativeAi from './BackgroundRemoveTool/GenerativeAi'
import Faq from './BackgroundRemoveTool/Faq'
import SliderImage from './BackgroundRemoveTool/SliderImage'
import CardPlan from './BackgroundRemoveTool/CardPlan'
import Creativehorizons from './BackgroundRemoveTool/CreativeHorizons'
import ImageGenerator from './BackgroundRemoveTool/ImageGenerator'
import ObjectRemover from './BackgroundRemoveTool/ObjectRemover'

const BackgroundRemoveTool = () => {
  return (
    <>
      <Empower/>
      <Creativehorizons/>
      <EditingTools/>
      <ImageGenerator/>
      <ObjectRemover/>
      <GenerativeAi/>
      <Faq/>
      <CardPlan/>
      <SliderImage/>
    </>
  )
}

export default BackgroundRemoveTool
