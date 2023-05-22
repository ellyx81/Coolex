import Splide from '@splidejs/splide';
const slider = () => {
	new Splide( '.splide', {
		type: 'loop',
		pagination: false,
		speed: 700,
	}
	).mount();
}
  
export default slider