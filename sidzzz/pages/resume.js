import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import { min } from 'date-fns'
import { styled } from '../stitches.config'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Resume // Sidhanti Patil',
    tagline: 'Work .',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Resume(props) {
  const { title, image } = props
  const description = 'Preview and Download my Resume here'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://sidzzz.com/resume" property="og:url" />
        <meta content={`https://sidzzz.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <ResumePreview />
      </AnimateSharedLayout>
    </>
  )
}

const ResumePreview = () => {
  const driveId = '1r-oKQOsme4w-Jq0MjFTXQUp-hF7mCKCk';
  const embedUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;
  
  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <PreviewContainer>
      <ResumeCard onClick={handleDownload}>
        <iframe
          src={embedUrl}
          title="Resume Preview"
          allowFullScreen
        />
      </ResumeCard>
    </PreviewContainer>
  );
};

Resume.Layout = Base

export default Resume

const PreviewContainer = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '1rem',
  display: 'flex', // Added to center the content
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center', // Centers vertically if possible

  '@media (max-width: 768px)': {
    padding: '0.5rem',
  },

  variants: {
    size: {
      default: {
        height: 'calc(100vh - 200px)',
        '@media (max-width: 768px)': {
          height: 'calc(100vh - 150px)',
        },
        '@media (max-width: 480px)': {
          height: 'calc(100vh - 120px)',
        },
      },
    },
  },

  defaultVariants: {
    size: 'default',
  },
});

const ResumeCard = styled('div', {
  width: '100%',
  maxWidth: '700px', // Added max width to prevent overflow on larger screens
  height: '100%',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '@media (max-width: 768px)': {
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  '&:hover': {
    '@media (hover: hover)': {
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    },
  },

  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none',

    '@media (max-width: 768px)': {
      minHeight: '500px',
    },

    '@media (max-width: 480px)': {
      minHeight: '400px',
    },
  },
});
