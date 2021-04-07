import { atom } from 'recoil';

export const currentSongIDState = atom({
    //the default song details will be the song with id 1
    key: 'currentSongID',
    default: 1,
});