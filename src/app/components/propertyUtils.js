
import PropertyCard from './PropertyCard'; 

export function renderProperties(properties) {
  return properties.map((property) => (
    <PropertyCard
      key={property.name}
      image={property.image}
      name={property.name}
      price={property.price}
      bedrooms={property.bedrooms}
      address={property.address}
    />
  ));
}

export function filterPropertiesByBedrooms(properties, bedrooms) {
  if (bedrooms === 'all' || isNaN(bedrooms)) {
    return properties; 
  }
  return properties.filter(property => property.bedrooms === parseInt(bedrooms, 10)); // Convertendo bedrooms para número
}
