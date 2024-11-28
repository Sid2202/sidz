import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import { min } from 'date-fns'
import { styled } from '../stitches.config'
import stripHtml from '../lib/strip-html'
import GalleryGrid from '../components/GalleryGrid'

export async function getStaticProps() {
  const meta = {
    title: 'Gallery // Sidhanti Patil',
    tagline: 'Meh .',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

const GalleryWrapper = styled('div', {
  padding: '2rem', // Desktop default
  '@media (max-width: 1024px)': {
    padding: '1.5rem', // Tablet
  },
  '@media (max-width: 768px)': {
    padding: '1rem', // Mobile
  },
  '@media (max-width: 480px)': {
    padding: '0.5rem', // Phones
  },
});

function Gallery(props) {
  const { title, image } = props
  const description = ''

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://sidzzz.com/projects" property="og:url" />
        <meta content={`https://sidzzz.com${image}`} property="og:image" />
      </Head>

      A curated gallery of my daily life.
      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} /> 
        <GalleryWrapper>
          <GalleryGrid />
        </GalleryWrapper>
      </AnimateSharedLayout>

    </>
  )
}

Gallery.Layout = Base

export default Gallery
