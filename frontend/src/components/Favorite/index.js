import "./index.css";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {loadFavorites, createFavorite, deleteFavorite} from "../../store/favorite"

const Favorite = ({listing}) => {

  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector(state => state.favorites)

  const handleClickEvent = async () => {
    if (favorites[listing.id]){
      await dispatch(deleteFavorite(favorites[listing.id].id))
      await dispatch(loadFavorites())
    }else {
      await dispatch(createFavorite(listing.id))
      await dispatch(loadFavorites())
    }
  }

  useEffect(() => {
    dispatch(loadFavorites())
  }, [])

  useEffect(() => {
    //check if listing.id is in favorites object
    if (favorites[listing.id]) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

  }, [listing, favorites])




    return (
      <div className="favorite-container" onClick={handleClickEvent}>
        <IoIosHeart
          className="favorite-icon"
          fill="rgba(0,0,0,0.4)"
          color="white"
        />
        {isFavorite && (
          <IoIosHeart className="favorite-icon" color="red" />
        )}
        <IoIosHeartEmpty className="favorite-icon" color="white" />
      </div>
    );
    }

export default Favorite;
