import React from 'react';

export default function View() {

    const url = "https://firebasestorage.googleapis.com/v0/b/henryfrontimages.appspot.com/o/documents%2F0997142860.25-11-21.pdf?alt=media&token=5c887a6f-17f2-479f-ae40-9e02c93d3524"
    const png = "https://firebasestorage.googleapis.com/v0/b/henryfrontimages.appspot.com/o/documents%2F1.jpg?alt=media&token=f6d23ab2-0d4c-44cd-be96-a9596218fc29";

    return (
        <div>
           <a href={url}>Resume</a> 
           <a href={png}>Resume</a> 
           <iframe 
           src={url}
           title="Inline Frame Example"
           width="300"
           height="500"
           />
           <iframe src={png}/>
        </div>
    )
}

