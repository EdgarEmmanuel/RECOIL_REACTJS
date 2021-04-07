import React , {Suspense} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import { songsQuery } from '../state/selector';
import { currentSongIDState } from '../state/atom';
import OneSongComponent from "./OneSongComponent";

function SongsComponent(){
    const songs = useRecoilValue(songsQuery);
    const [currentSongID, setCurrentSongID] = useRecoilState(currentSongIDState);


    return (
        <>
            <h1>
            {songs.map(s=>(
                <div key={s.id}>
                    <p onClick={() => setCurrentSongID(s.id)}>
                        {s.title}
                    {/*    we verify if the song id is equal to the variable in the currentSongID*/}
                    {/*so we put a small sign to the current song beign displayed */}
                        {s.id === currentSongID && '*'}
                    </p>
                </div>
            ))}
            </h1>
            {currentSongID && (
                <Suspense fallback={<span>Loading...</span>}>
                    <OneSongComponent/>
                </Suspense>
            )}
        </>
    )
}

export default SongsComponent;