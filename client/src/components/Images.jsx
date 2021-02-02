import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

const Images = () => {
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);
  const [count, setCount] = useState(30);

  const fetchImages = () => {};

  useEffect(() => {
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="images">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
