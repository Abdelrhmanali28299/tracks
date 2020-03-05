import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber = null;
        const startWatching = async () => {
            const result = await requestPermissionsAsync();
            if (result.status == "denied")
                setErr("error")

            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 3
            }, callback);
        };

        if (shouldTrack) {
            startWatching();
        }
        else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}