import './style.css'
import { PropertyCard } from './PropertyCard';

const properties = [
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 1',
    price: 600000,
    bedrooms: 4,
    address: 'Rua A, 456',
  },
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 2',
    price: 350000,
    bedrooms: 2,
    address: 'Rua B, 789',
  },
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 3',
    price: 600000,
    bedrooms: 4,
    address: 'Rua C, 456',
  },
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 4',
    price: 350000,
    bedrooms: 2,
    address: 'Rua D, 789',
  },
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 6',
    price: 600000,
    bedrooms: 4,
    address: 'Rua E, 456',
  },
  {
    image: './img/casa2.jpg',
    name: 'Imóvel 7',
    price: 350000,
    bedrooms: 2,
    address: 'Rua F, 789',
  },
  
];

function renderProperties(properties) {
  return properties.map(PropertyCard).join('');
}

//função para filtrar os cards por número de quartos
function filterPropertiesByBedrooms(bedrooms) {
  const allCards = document.querySelectorAll('.carousel-card');
  allCards.forEach(card => {
    const bedroomText = card.querySelector('.card-info').innerText;
    const bedroomCount = parseInt(bedroomText.match(/Quartos: (\d+)/)[1], 10);
    
    if (bedrooms === 'all' || isNaN(bedrooms)) {
      card.style.display = 'block';
    } else if (bedroomCount === bedrooms) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('carousel-container').innerHTML = renderProperties(properties);

document.getElementById('filter-button').addEventListener('click', () => {
  const bedrooms = document.getElementById('bedrooms-filter').value;
  filterPropertiesByBedrooms(bedrooms === 'all' ? 'all' : parseInt(bedrooms, 10));
});

