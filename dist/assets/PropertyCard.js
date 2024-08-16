export function PropertyCard(property) {
    return `
      <div class="carousel-card">
        <img src="${property.image}" alt="Imagem do Imóvel" class="carousel-card-img">
        <div class="card-info">
          <h3>${property.name}</h3>
          <p>Preço: ${formatCurrency(property.price)}</p>
          <p>Quartos: ${property.bedrooms}</p>
          <p>Endereço: ${property.address}</p>
        </div>
      </div>
    `;
  }
  
  export function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  