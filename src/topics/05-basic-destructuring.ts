interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song'

// const {
//     song:anotherSong, 
//     songDuration:duration, 
//     details:songDetails
//     //details: {author, year}
// } = audioPlayer;

//const {author, year} = songDetails;

// console.log('Song', audioPlayer.song);
// console.log('Author', audioPlayer.details.author);
// console.log('Duration', audioPlayer.songDuration);

// console.log('Song', anotherSong);
// console.log('Author', author);
// console.log('Duration', duration);

const [p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];
//const trunks = dbz[3] || 'No hay personaje'

console.log('Personaje 3: ', trunks);

export{};