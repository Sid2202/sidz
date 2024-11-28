import React from 'react';
import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
import Base from '../layouts/Base';
import { styled } from '../stitches.config';
import stripHtml from '../lib/strip-html';
import { motion } from 'framer-motion';

const GalleryContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr', // Phone: 1 column
    gap: '0.5rem',
  },
});

const GalleryItem = styled(motion.div, {
  borderRadius: '4px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  img: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '4px',
  },
  variants: {
    // '@media (max-width: 1024px)': {
      span: {
        1: {
          gridColumn: 'span 1',
        },
        2: {
          gridColumn: 'span 2',
        },
        3: {
          gridColumn: 'span 3',
        },
      },
    // },
    // '@media (max-width: 768px)': {
    //   span: {
    //     1: {
    //       gridColumn: 'span 1',
    //     },
    //     2: {
    //       gridColumn: 'span 2',
    //     },
    //     3: {
    //       gridColumn: 'span 3',
    //     },
    //   },
    // },
    // '@media (max-width: 480px)': {
    //   span: {
    //     1: {
    //       gridColumn: 'span 1',
    //     },
    //     2: {
    //       gridColumn: 'span 1',
    //     },
    //     3: {
    //       gridColumn: 'span 1',
    //     },
    //   },
    // },
    
  },
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  },
  '@media (max-width: 768px)': {
    gridColumn: 'span 1 !important',
  },
});

const ImageDescription = styled('p', {
  margin: '0.5rem 0 0',
  fontSize: '0.875rem',
  color: '#999',
});


export async function getStaticProps() {
  const meta = {
    title: 'Gallery // Sidhanti Patil',
    tagline: 'Meh .',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  };

  return { props: meta };
}

function GalleryGrid(props) {
  const { title, image } = props;
  const description = '';

  // Sample data with varying size hints
  const galleryData = [
    { id: 1, imgSrc: '/static/images/gallery/sunset.jpeg', desc: '', span: 3 }, 
    { id: 2, imgSrc: '/static/images/gallery/rainbow.jpeg', desc: '', span: 1 },
    { id: 3, imgSrc: '/static/images/gallery/brunch.jpeg', desc: '', span: 1 },
    { id: 4, imgSrc: '/static/images/gallery/plant.jpeg', desc: '', span: 1 },
  ];

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

      <AnimateSharedLayout>
      <GalleryContainer>
        {galleryData.map((item) => (
          <GalleryItem
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            span={item.span} // Dynamically apply the span
          >
            <img src={item.imgSrc} alt={item.desc} />
            <ImageDescription>{item.desc}</ImageDescription>
          </GalleryItem>
        ))}
      </GalleryContainer>
      </AnimateSharedLayout>
    </>
  );
}

GalleryGrid.Layout = Base;

export default GalleryGrid;
