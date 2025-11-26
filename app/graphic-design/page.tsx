"use client";
import { GraphicDesignSection } from '@/components/graphic-deisgn/graphic-design-section';
import { ServicesSection } from '@/components/graphic-deisgn/services-section';
import { TrainingSection } from '@/components/graphic-deisgn/training-section';
import React from 'react'

const page = () => {
  return (
    <div>
        <GraphicDesignSection />
        <TrainingSection />
        <ServicesSection />
    </div>
  )
}

export default page