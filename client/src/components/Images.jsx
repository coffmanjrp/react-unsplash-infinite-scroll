import { useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);
  const [count, setCount] = useState(30);

  return <div></div>;
};

export default Images;
