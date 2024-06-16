
import React, {useState} from 'react';
import { View, Text } from 'react-native'
import Image1 from './assets/1.png';
import Image2 from './assets/2.png';
import Image3 from './assets/3.png';

export default function dummyData() {
    const [slides, setSlides] = useState([
        {
          key: 1,
          title: 'WELCOME TO APPINESS',
          textD: 'Description.\nSay something cool',
          image: Image1,
          backgroundColor: '#59B2AB',
        },
        {
          key: 2,
          title: 'Title 2',
          text: 'Other cool stuff',
          image: Image2,
          backgroundColor: '#FEBE29',
        },
        {
          key: 3,
          title: 'Rocket guy',
          text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
          image: Image3,
          backgroundColor: '#22BCB5',
        },
      ]);
      
    return dummyData;
}

