import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state, startRecording, stopRecording, changeName } = useContext(LocationContext);
    console.log(state.locations.length);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input
                    value={state.name}
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
                <Spacer>
                    {
                        state.recording ?
                            <Button
                                title="Stop Recording"
                                onPress={stopRecording}
                            /> :
                            <Button
                                title="Start Recording"
                                onPress={startRecording}
                            />
                    }
                </Spacer>
                <Spacer>
                    {
                        !state.recording && state.locations.length > 0 ?
                            <Button
                                title="Save Recording"
                                onPress={saveTrack}
                            /> :
                            null
                    }
                </Spacer>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({

});

export default TrackForm;