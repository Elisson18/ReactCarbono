// export const createCarousel = () => {
//     const track = document.querySelector('.carousel-track');
//     const cards = Array.from(track.children);
    
//     const calculateTrackWidth = (cards) => {
//         const cardWidth = cards[0].getBoundingClientRect().width;
//         return cardWidth * cards.length;
//     };

//     const createTransitionEffect = (track, duration) => {
//         track.style.transition = `transform ${duration}s ease-in-out`;
//     };

//     const updateCarouselPosition = (track, index, cardWidth) => {
//         const offset = -index * cardWidth;
//         track.style.transform = `translateX(${offset}px)`;
//     };

//     const initCarousel = () => {
//         const trackWidth = calculateTrackWidth(cards);
//         track.style.width = `${trackWidth}px`;

//         const buttons = Array.from(document.querySelectorAll('.carousel-button'));
//         let currentIndex = 0;

//         const handleButtonClick = (step) => {
//             currentIndex = (currentIndex + step + cards.length) % cards.length;
//             updateCarouselPosition(track, currentIndex, cards[0].getBoundingClientRect().width);
//         };

//         buttons.forEach(button => {
//             button.addEventListener('click', () => {
//                 const step = button.classList.contains('next') ? 1 : -1;
//                 handleButtonClick(step);
//             });
//         });

//         createTransitionEffect(track, 0.5); // Duração da transição
//     };

//     initCarousel();
// };








// // carousel.js
// export const initializeCarousel = () => {
//     const track = document.querySelector('.carousel-track');
//     const cards = Array.from(track.children);

//     // Função para duplicar os cartões
//     const duplicateCards = (cards) => {
//         const cardsClone = cards.map(card => card.cloneNode(true));
//         cards.forEach(card => track.appendChild(card));
//         cardsClone.forEach(card => track.appendChild(card));
//     };

//     duplicateCards(cards);

//     // Obter a largura do primeiro cartão
//     const cardWidth = cards[0].getBoundingClientRect().width;

//     // Ajustar a largura do track
//     track.style.width = `${cardWidth * cards.length * 2}px`; // Duplicado
// };


