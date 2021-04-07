import { selector } from 'recoil';
import { getSongs ,getSongId} from './client';
import {currentSongIDState} from "./atom";

export const songsQuery = selector({
    key:'songs',
    get: async () => {
        let songs = await getSongs();
        return songs;
    },
})


export const getSongDetailsById = selector({
    key:'song_details',
    get:async({get})=>{
        return await getSongId(get(currentSongIDState));
    }
})