import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Latest News Stories!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='./images/frankocean.webp'
                            text='The Story of a ‘Super Perfectionist’: How Frank Ocean Made ‘Nostalgia, ULTRA.'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/megg.webp'
                            text='Congresswoman Maxine Waters Praises Megan Thee Stallion for “WAP” Track: ‘That’s Audacity’'
                            label='Music'
                            path='/musicnews'
                        />
                           <CardItem
                            src='images/lilbaby.webp'
                            text='A Conversation With Lil Baby, the Best Rapper of 2020'
                            label='Music'
                            path='/musicnews'
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
                </div>
            </div>
        </div>
    );
}

export default Cards;


