import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import { min } from 'date-fns'
import { styled } from '../stitches.config'
import stripHtml from '../lib/strip-html'
import FeaturedEvents from '../components/FeaturedEvents'

export async function getStaticProps() {
  const meta = {
    title: 'Tech // Sidhanti Patil',
    tagline: 'Meh .',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Tech(props) {
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
{/* 
      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} /> */}

        {/* <FeaturedEvents></FeaturedEvents> */}

      {/* </AnimateSharedLayout> */}

    </>
  )
}

Tech.Layout = Base

export default Tech
