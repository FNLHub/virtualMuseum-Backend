import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
const path = require('path');


admin.initializeApp();

export const onFileUpload = functions.storage.object().onFinalize(object => {

    const pathName = path.dirname(object.name);

    // Only run decompression and DB update on files in the 'notProcessed' folder
    if (pathName == 'notProcessed'){

        // Cretes an empty object in our Firestore to be populated later from user uploaded JSON file
        admin.firestore().collection('3dObjects').add({title: ""}).then((ref: any) => {
            console.log(ref.id);
            
            // Unzip file into "3dObjects/{ref.id}"

        })
    }

});

export const onFileDelete = functions.storage.object().onDelete(event => {
    console.log(event);
    return;
})

