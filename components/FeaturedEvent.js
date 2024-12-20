import { styled } from '../stitches.config'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';

export default function FeaturedEvent(props) {
  const { project } = props


  return (
    // <Event
    //   href={project.url}
    //   target="_blank"
    // >
    //   {/* <Animation index={props.index}> */}
    //     <Body>
    //       <Preview>
    //         <img src= {`/static${project.preview}`} alt={project.title} />
    //       </Preview>
    //       <Title>{project.title}</Title>
    //       <Description>{project.description}</Description>
    //     </Body>
    //   {/* </Animation> */}
    // </Event>
    <h1></h1>
  )
}

// function Animation(props) {
//   const [hovered, setHovered] = useState('')
//   const isHovered = hovered === props.index

//   return (
//     <AnimContainer
//       onHoverStart={() => setHovered(props.index)}
//       onHoverEnd={() => setHovered('')}
//     >
//       {isHovered && (
//         <AnimHovered
//           layoutId="featuredProjects"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         />
//       )}

//       {props.children}
//     </AnimContainer>
//   )
// }

const Project = styled('a', {
  display: 'flex',
  transition: 'opacity $duration ease-in-out',
  border: '0',
  borderRadius: '$borderRadius',
  textDecoration: 'none',
  width: 'auto',
  margin: '30px 0',
  '&:hover': { opacity: 1 },
  // '@bp2': { width: 180 },
})

const Body = styled('div', {
  flex: '1 1 auto',
})

const Preview = styled('div', {
  position: 'relative',
  borderRadius: '$borderRadius',
  overflow: 'hidden', // Ensures the image respects border radius
  marginBottom: 10,
  width: '100%',
  aspectRatio: '16 / 9', // Adjust based on your desired image ratio
  background: '$hover',

  // Styling the image inside Preview
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Makes sure the image covers the entire area without distortion
    borderRadius: '$borderRadius',
    transition: 'transform 0.3s ease-in-out',
  },

  // Optional hover effect
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

const Title = styled('p', {
  color: '$primary',
  margin: '0',
  fontSize: '18px',
})

const Description = styled('p', {
  margin: '0',
  color: '$secondary',
  lineHeight: '24px',
})

const Stats = styled('p', {
  margin: '5px 0 0',
  color: '$primary',
  textTransform: 'uppercase',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '1.2px',
  fontSize: '12px',
})

const AnimContainer = styled(motion.span, {
  position: 'relative',
  width: '100%',
  padding: '20px',
})

const AnimHovered = styled(motion.span, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})
