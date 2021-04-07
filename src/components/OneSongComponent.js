import React from 'react';
import {useRecoilValue} from "recoil";
import {getSongDetailsById} from '../state/selector';


function OneSongComponent(){
    const currentSong = useRecoilValue(getSongDetailsById);

    return currentSong ? (
        <>
            <h2>Current Song Details:</h2>
            <p>Artist: {currentSong.artist}</p>
            <p>Released: {currentSong.year}</p>
        </>
    ) : null;
}


export default OneSongComponent;