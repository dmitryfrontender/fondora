import React, { useState } from "react";
import { storagePhotos } from "../../../Data/StoragePhoto";
// import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import './AddPhotos.scss'
import SVGIcon from "../../../assets/icons/svgComponent";



interface IPhoto {
    src: string;
    alt: string;
  }
  
  interface IProps {
    addPhoto: (photo: IPhoto[]) => void;
  }
  
  const AddPhoto = ({ addPhoto }: IProps) => {
    const [selectedPhotos, setSelectedPhotos] = useState<IPhoto[]>([]);
  
    const handlePhotoClick = (photo: IPhoto) => {
      setSelectedPhotos((prevSelectedPhotos) => {
        if (prevSelectedPhotos.includes(photo)) {
          return prevSelectedPhotos.filter((selectedPhoto) => selectedPhoto !== photo);
        } else {
          return [...prevSelectedPhotos, photo];
        }
      });
    };

    const defaultStyle = {
        border: '4px solid transparent',
        borderRadius: '15px'

        // borderRadius: '50%'
    }
    const activeStyle = {
        
        border: `4px solid #DF3C5E`,
        borderRadius: '15px'

        
    }

    const activeBtn = 'linear-gradient(135.00deg, rgb(132, 9, 56) -0.075%,rgb(242, 34, 113) 99.925%)';
    

  
    return (
      <div className="AddPhoto">
        <div className="btn" onClick={() => {
            selectedPhotos.length > 0 &&
            addPhoto([...selectedPhotos])
            setSelectedPhotos([])
            }}>
            {/* <DefaultBtn text="Отправить" background="red" arrow={false}/> */}
            <button style={{background: selectedPhotos.length > 0 ? activeBtn : ''}}>
              <SVGIcon name="sendTgBtn" width={20}/>

            </button>

        </div>
        <div className="photoWrapper">
          {storagePhotos.map((item, index) => {
            const isSelected = selectedPhotos.includes(item);
            return (
              <div
                className={`item ${isSelected ? 'activeItem' : ''}`}
                key={index}
                onClick={() => handlePhotoClick(item)}
                style={isSelected ? activeStyle : defaultStyle}
              >
                <img src={item.src} alt={item.alt} />
                <div className="addPhoto"></div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
  };
  
  export default AddPhoto;