// JS
import config from './data/config.json';

// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';


// IMAGES
import metro08 from './images/metro-08.jpg';
import metro09 from './images/metro-09.jpg';
import metro10 from './images/metro-10.jpg';
import metro11 from './images/metro-11.jpg';
import metro12 from './images/metro-12.jpg';
import metro13 from './images/metro-13.jpg';

const images = [
	{
		el: 'metro-08',
		src: metro08
	},
	{
		el: 'metro-09',
		src: metro09
	},
	{
		el: 'metro-10',
		src: metro10
	},
	{
		el: 'metro-11',
		src: metro11
	},
	{
		el: 'metro-12',
		src: metro12
	},
	{
		el: 'metro-13',
		src: metro13
	}
];

const init = async () => {
	
	addImages(images);
};


function addImages(images) {
	images.forEach(img => {
		const image = new Image();
		image.src = img.src;

		const el = document.getElementById(img.el);
		el.appendChild(image);
	});
}

init();