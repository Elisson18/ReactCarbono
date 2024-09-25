import React from 'react';

const PropertyCard = ({ image, name, price, bedrooms, address }) => {
  return (
    <div className="carousel-card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Preço: R$ {price}</p>
        <p>Quartos: {bedrooms}</p>
        <p>Endereço: {address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
