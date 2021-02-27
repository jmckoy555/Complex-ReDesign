import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import ButtonSub from './ButtonSub';

function Footer() {
    return (
        <div className='footer-container'>
            
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <Link to='/'>Homepage</Link>
                        <Link to='/entertainmentnews'>Entertainment</Link>
                        <Link to='/musicnews'>Music</Link>
                        <Link to='/contact'>Contact</Link>

                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>

                        </Link>
                    </div>
                    <small class='website-rights'>COMPLEX © 2021</small>
                   
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='https://www.facebook.com/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='https://twitter.com/?lang=en'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                            
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;