import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
interface Image{
    id:string,
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
}
interface Props {
 images: Image[],
  handleImageClick: (data: any) => void;
}

const ImageGallery: React.FunctionComponent<Props> = ({ images, handleImageClick}) => {
    return(
    <ul className={css.imageGalleryList}>
            {images.map((image) => 
                <li className={css.imageGalleryItem} key={image.id}>
                    <ImageCard image={image} handleImageClick={handleImageClick } />
                </li>
            )
            }
    </ul>
    )
}
export default ImageGallery;