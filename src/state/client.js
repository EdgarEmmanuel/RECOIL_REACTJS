const songList = [
    { id: 1, title: 'Bohemian Rhapsody' },
    { id: 2, title: 'Purple Rain' },
    { id: 3, title: 'One' },
    { id: 4, title: 'Eternal Flame' },
];

const songDetails = [
    { id: 1, artist: 'Queen', year: 1975 },
    { id: 2, artist: 'Prince', year: 1984 },
    { id: 3, artist: 'U2', year: 1992 },
    { id: 4, artist: 'The Bangles', year: 1989 },
];

export const getSongs = async () =>
    new Promise((resolve) => {
        resolve(songList);
    });

export const getSongId = async (id) =>
    new Promise(resolve => {
        resolve (songDetails.find(s => s.id === id));
    })