import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Pronunciation from '../components/Pronunciation'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
import items from '../data/about'
// import Lottie from 'lottie-react'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export async function getServerSideProps() {
  const meta = {
    title: 'About // Sidhanti Patil',
    description:
      "",
    tagline: 'Build. Create. Repeat.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Sid"
            src="/static/images/avatar.jpeg"
            width="365"
            height="330"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PW..lpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hey, I'm Sidhanti Patil</strong><br />
            {/* <Pronunciation /> */}
            I am a Fullstack Developer who builds end to end applications. 
          </Paragraph>
          <Paragraph>
            I imagine creative solutions and bring them to life with code. Currently, 22 years old and contributing to the HealthTech industry as a <strong>Software Engineer</strong> at <strong>Datycs</strong>. Living in <strong>Bangalore, India</strong>, I am always up for a chat about technology, startups, and life in general.
          </Paragraph>
          <Paragraph>
            When I'm not working, I like planting in my garden, reading books, and watching movies.
          </Paragraph>
        </Section>
      </Container>
    )
  }


  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''
    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }else if (durationObj.months === 11){
      durationStr = `1 yr`
    }else{
      durationStr += `${durationObj.months+1} mos`
    }

    return durationStr
  }

  // const downloadHeadshot = () => {
  //   setToastTitle('Downloading...')
  //   setToastDescription('You can now add this photo to your fancy site.')
  //   setShowToast(true)
  // }

  // const copyBio = e => {
  //   e.preventDefault()
  //   navigator.clipboard.writeText(description)

  //   setToastTitle('Copied :D')
  //   setToastDescription('You can now paste it anywhere.')
  //   setShowToast(true)
  // }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://sidzzz.com/about" property="og:url" />
        <meta content={`https://sidzzz.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <strong>Interested in building something together or need a Fullstack Developer? Let's chat!</strong>
      {/* Call to Action Buttons */}
      <ButtonsContainer>
        <ButtonSecondary onClick={() => window.open('https://www.linkedin.com/in/sidhanti-patil', '_blank')}>
          Let's Connect
        </ButtonSecondary>
      </ButtonsContainer>

      <h2>Career</h2>
      
      {renderAll()}

      {/* <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      /> */}
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

// const ButtonsContainer = styled('p', {
//   display: 'flex',
//   alignItems: 'center',
// })

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

const ButtonsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
  '@bp2': {
    justifyContent: 'flex-start',
  },
});

const ButtonSecondary = styled('button', {
  backgroundColor: '#eaeaea',
  color: '#000',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  width: '100%', // Full width on mobile
  maxWidth: '300px', // Limit the width on larger screens
  transition: 'background-color 0.3s',
  // '@bp2': {
  //   width: 'fit-content', // Auto width on desktop
  // },
  '&:hover': {
    backgroundColor: '#c1c1c1',
  },
});

About.Layout = Base

export default About
