import React from 'react';
import BookingCards from '../BookingCards/BookingCards';
import Header from '../Header/Header';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='home'>
                <h2 className='baby-font'>“The first step is always the most difficult part of a journey.”</h2>
                <p className='home-text text-color'>Begining therapy, like starting most things in life can be scary</p>
                <p className='home-text'>I'm committed to assisting you in discovering your best self by offering a therapeutic setting that is safe, encouraging, and empathetic of your cultural background.

</p>
<p className='home-text'>Through therapy, I can support you in addressing both recent and enduring issues, fostering healthier relationships, managing work-life balance, reducing anxiety and depressive symptoms, and improving your resilience and capacity for change.</p>
            </div>
            <hr className='line-style' />
            <Review></Review>
            <BookingCards></BookingCards>
        </div>
    );
};

export default Home;