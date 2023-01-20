import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-div'>
            <p className="about-heading">About me</p>
          <div className='about'>
          <div>
                <img className='about-img' src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <button className="about-button1">Contact Dr. Goswami</button>
            </div>
            
            <div>
                <p className='about-text'
>Hello, I have completed an undergraduate degree in psychology at Delhi University, subsequently pursued graduate training in counseling psychology at the AIIMS Delhi, and completed a doctorate in clinical psychology at the Adler School of Professional Psychology. I have clinical interests and worked with children, teens, adults, diagnostic assessment and addictions. I use a broad range of cognitive behavioral and insight oriented techniques in the psychotherapy and counseling process.

<p className='about-text'>I have also taught a broad variety of graduate psychology and counseling courses at the Delhi University and Jamia Milia Islamia. I have lectured and presented training seminars and workshops nationally and internationally in Europe and East Asia. My research and publication interests have included addictions, psychometrics, clinical training and supervision, and the integration of spiritual values in psychotherapy and supervision.</p>
</p>
<button className="about-button2">Contact Dr. Goswami</button>
            </div>
          </div>
        </div>
    );
};

export default About;
