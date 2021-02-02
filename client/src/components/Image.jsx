const Image = ({ image }) => {
  return (
    <img
      src={image.urls.thumb}
      alt={image.alt_description}
      className="single-photo"
    />
  );
};

export default Image;
