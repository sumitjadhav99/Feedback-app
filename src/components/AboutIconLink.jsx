import {FaQuestion} from 'react-icons/fa'
// import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <a href='/about'>
        <FaQuestion size={30} />
        </a>
    </div>
  )
}

export default AboutIconLink