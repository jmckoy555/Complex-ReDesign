import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function MusicCards() {
    return (
        <div className='cards'>
            <h1>Music News!</h1>
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
                            src='images/JT.webp'
                            text='JT Flirts with Lil Uzi Vert on Twitter After Showing Off Ring'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/kmichelle.webp'
                            text='K. Michelle and Keyshia Cole End Beef in Clubhouse Chat
                            '
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/bars.webp'
                            text='Facebook Launches TikTok-Like Rapping Platform BARS'
                            label='Music'
                            path='/musicnews'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/bruno.webp'
                            text='Bruno Mars and Anderson .Paak Announce New Band Silk Sonic: ‘We Locked in and Made an Album’'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/bobby.jpg'
                            text='Bobby Shmurda Has Been Released From Prison'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/50great.jpg'
                            text='50 Greatest hip hop albums of the 2010s'
                            label='Music'
                            path='/musicnews'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/drake.jpg'
                            text='Return of the Lover Boy, We talk Drakes new upcoming album'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/watch.webp'
                            text='Rappers to Watch in 2021'
                            label='Music'
                            path='/musicnews'
                        />
                        <CardItem
                            src='images/ye.webp'
                            text='Kanye West Spent Over $12 Million of His Own Money on Failed Presidential Bid'
                            label='Music'
                            path='/musicnews'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MusicCards;


