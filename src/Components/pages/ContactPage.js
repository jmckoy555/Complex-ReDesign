import React from "react";
import Contact from "../Contact";
import Slider from "../Slider";
import Card from "../Card";
import Podcast from "../Podcast";
import Footer from "../Footer";

function ContactPage (){

    return (

      <>
        <Podcast
          link="https://www.pngkey.com/png/detail/267-2679187_complex-complexcon-logo.png"
          name="COMPLEX PODCAST NETWORK"
          description="The Complex Podcast Network is a hub for conversations around sneakers, sports, film, television, music, and more. Load Management, Watch Less, and The Complex Sneakers Podcast offer insight and opinion from Complex’s editors, who weigh in on the biggest news and discussions of the moment, telling you what’s good, what’s not, and what’s next. Listen to new episodes each week, everywhere podcasts stream."
        />
        <Contact />
        
        <Slider/>
        <Card/>
        <Card />
        <Card />
        <Card />
        <Footer/>
      </>
    );
  
}

export default ContactPage;