import { loadListings } from "../../store/listings";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./ListingsView.css";
import Favorite from '../Favorite/index';

const ListingsView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listings = useSelector(state => state.listings);

    useEffect(() => {
        console.log('Fetching listings...');
        dispatch(loadListings())
            .then(() => console.log('Listings loaded:', listings))
            .catch(error => console.error('Error loading listings:', error));
    }, [dispatch]);

    useEffect(() => {
        console.log('Current listings state:', listings);
    }, [listings]);

    const listingClick = (listingId) => {
        navigate(`/spots/${listingId}`);
    };

    if (!listings || listings.length === 0) {
        return <div className="listings-container">Loading listings...</div>;
    }

    return (
        <div className="listings-container">
            {listings.map((listing, i) => (
                <div key={i} className="listing-link">
                    <div className="spot">
                        <div className="spot-image-container">
                            <Favorite listing={listing} />
                            <img
                                src={listing.previewImage}
                                alt={listing.name}
                                className="spot-img"
                                onClick={() => listingClick(listing.id)}
                            />
                        </div>
                        <div className="information" onClick={() => listingClick(listing.id)}>
                            <h4 className="location-info">{listing.state}, {listing.country}</h4>
                            <h5 className="listing-price">${listing.price} night</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListingsView;
