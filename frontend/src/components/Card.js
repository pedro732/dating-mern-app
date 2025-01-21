import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Card = ({ title, content, icon, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-icon">{icon}</div>
            <img src={imageUrl} alt="Card" className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
            <div className="card-actions">
                <IconButton className="card-action-icon">
                    <RefreshIcon />
                </IconButton>
                <IconButton className="card-action-icon">
                    <CloseIcon />
                </IconButton>
                <IconButton className="card-action-icon">
                    <StarIcon />
                </IconButton>
                <IconButton className="card-action-icon">
                    <FavoriteIcon />
                </IconButton>
                <IconButton className="card-action-icon">
                    <FlashOnIcon />
                </IconButton>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageUrl: PropTypes.string.isRequired,
};

export default Card;