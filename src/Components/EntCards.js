import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function EntCards() {
    return (
        <div className='cards'>
            <h1>Entertainment News!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='./images/Eddie.jpg'
                            text='Eddie Murphy Recounts Fabled Basketball Game Against Prince Featured on ‘Chappelle’s Show’'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/tommy.webp'
                            text='Tom Holland Shines in the Russo Brothers’ Underwhelming, Over-Produced ‘Cherry’'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                           <CardItem
                            src='images/term.webp'
                            text='Netflix Is Producing A ‘Terminator’ Anime'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/zendayatom.webp'
                            text='Tom Holland and Zendaya Troll Fans With ‘Spider-Man 3’ Title Announcement'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/onenight.webp'
                            text='The Best Movies on Amazon Prime (February 2021)'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/lakeith.webp'
                            text='The History Behind LaKeith Stanfield and Charlamagne tha God’s Feud'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/icecube.webp'
                            text='Ice Cube Claims Warner Bros. Refuses to Make More ‘Friday’ Sequels'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/blackish.webp'
                            text='The Best Shows on Hulu Right Now (February 2021)'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/winston.webp'
                            text='Winston Duke Cast as Marcus Garvey in Amazon Studios’ ‘Marked Man’'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/kimk.webp'
                            text='Kim Kardashian Reportedly ‘Never Threatened’ to Not Let Kanye West See Their Kids'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/build.png'
                            text='Netflix Announces $100 Million Investment in Creative Equity Fund Following Diversity Study'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                        <CardItem
                            src='images/mary.jpg'
                            text='NASA Honors ‘Hidden Figures’ Engineer Mary W. Jackson With Renaming of DC Headquarters'
                            label='Entertainment'
                            path='/entertainmentnews'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EntCards;


