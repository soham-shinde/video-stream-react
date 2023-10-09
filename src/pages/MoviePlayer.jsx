import React from 'react'
import Navbar from '../components/Navbar'
import VideoPlayer from '../components/VideoPlayer'
import { getCastList, getMoviesList } from '../api/api-module'
import MPosterCard from '../components/MPosterCard'
import StoryDescription from '../components/StoryDescription'
import CastCardSlider from '../components/CastCardSlider'
import Footer from '../components/Footer'

export default function MoviePlayer() {
  return (
    <>
      <Navbar />
      <div className='video-p-container'>
        <VideoPlayer />
      </div>
      <div class="mo-list">
                    <h3>Cast</h3>
                    <div id="slider-container">
                        <CastCardSlider cards={getCastList()} />
                    </div>
                </div>
      <StoryDescription description={`Azad is the jailer of a women's prison in Mumbai who hijacks a Mumbai Metro along with a group of six inmates Lakshmi, Eeram, Ishkra, Kalki, Helena and Janhvi. Azad negotiates with NSG officer Narmada Rai to ask the Agriculture Minister to send ₹400 billion in exchange for the passengers' lives. Kalee Gaikwad, a global arms dealer, learns that his daughter Alia is also one of the captives and agrees to fund the deal. When Alia questions their motive, Azad reveals his plan of donating the money towards the loan waiver of 700,000 impoverished farmers in the country. Azad and his gang directly transfer the funds into the farmers' bank accounts and escape from the metro. Through Alia, Azad reveals his name as Vikram Rathore to Kalee. Meanwhile, Azad meets Narmada and her daughter Suchi, and they eventually get married. Azad and his gang next kidnap the Health Minister and demand to initiate better infrastructure at every government hospital, in exchange for the Health Minister's life. The infrastructure is immediately initiated in the hospitals, allowing Azad and his gang to escape again after a shootout between Narmada and her team. Soon after their wedding, Narmada finds out about Azad's true identity and confronts him, but Kalee's brother Manish and his henchmen capture and torture them. However, Azad is saved by his doppelgänger named Vikram Rathore. Narmada finds out the identities of Azad's accomplices and confronts them by disguising herself as an inmate, where she learns about Azad and Vikram's connection.`} />
      <div className='mo-list'>
        <h3>Most Like This</h3>
        <div className='m-l-list' >
          {
            getMoviesList(15).map((movie, index) => {
              return (
                <MPosterCard key={index} element={movie} />
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}
