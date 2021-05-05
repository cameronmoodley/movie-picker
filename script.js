const movies = [
	'Spider-man: into the spider-verse',
	'The Croods',
	'Shrek',
	'Me Before You',
	'The Mitchells vs the Machines',
	'The Fantastic Mr Fox',
	'How to train your dragon',
	'Step Brothers',
	'The Fundamentals of caring',
	'Ice Age 3',
	'Rocky 2',
];

document.querySelector('.submit').onclick = () => {
	let randomMovieNumber = Math.floor(Math.random() * movies.length);
	document.querySelector(
		'.movie__title'
	).innerHTML = `${movies[randomMovieNumber]}`;
};
