import React, { useState, useRef } from 'react'
import TagCard from '../tagCard/TagCard';
import './TagsContainer.scss';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const TagsContainer = () => {
  const [ distance, setDistance ] = useState(0);
  const tagsListRef = useRef(null); 

  const handleArrowClick= (direction) => {
    const tagsListContainerWidth = tagsListRef.current.clientWidth - 1000;
    if (direction === "left" && distance !== 0) {
      let newDistance = distance;
      setDistance(prevDistance => prevDistance + 100);
      newDistance += 100;
      tagsListRef.current.style.transform = `translateX(${newDistance}px)`
    } else if (direction === "right" && distance > -tagsListContainerWidth) {
      let newDistance = distance;
      setDistance(prevDistance => prevDistance - 100);
      newDistance -= 100;
      tagsListRef.current.style.transform = `translateX(${newDistance}px)`;
    }
  }

  const dummyTags = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <div className="tags_list">
      <div className="tags_wrapper">
        <button 
          className='arrow left'
          onClick={() => handleArrowClick("left")}>
          <ArrowBackIos 
            fontSize='small' />
        </button>
        <div className='tags_container' ref={tagsListRef}>
          {
              dummyTags.map((item, index) => (
                  <TagCard />
              ))
          }
        </div>
        <button 
          className='arrow right'
          onClick={() => handleArrowClick("right")}>
          <ArrowForwardIos 
            fontSize='small'/>
        </button>
      </div>
    </div>
  )
}

export default TagsContainer