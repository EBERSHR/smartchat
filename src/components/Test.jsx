import React from 'react';
import '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';


const Test = () => {
    const database = getDatabase();

    console.log(database)

    onValue(ref(database, '/otro'), (snapshot) => {
        console.log(snapshot.val())
    })

    return (
        <div>
            Hola test!!!
        </div>
    );
}

export default Test;
