import css from './ImageCard.module.css'
interface ImageData{
  imageSrc: string;
  imageDescription: string;
  imageAltDescription: string;
  imageAutor: string;
  imageLikes: number;
}

interface Props {
  image: {
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
    description: string;
    user: {
      name: string;
    };
    likes: number;
  };
  handleImageClick: (data: ImageData) => void;
}

const ImageCard: React.FunctionComponent<Props> = ({ image, handleImageClick }) => {
  const imageData = {
    imageSrc: image.urls.regular,
    imageDescription: image.description,
    imageAltDescription: image.alt_description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };
  return (
    <div className={css.imageCard}>
<img  className={css.image} src={image.urls.small} alt={image.alt_description} onClick={()=>handleImageClick(imageData)}/>

    </div>
    
  )
}
export default ImageCard;
