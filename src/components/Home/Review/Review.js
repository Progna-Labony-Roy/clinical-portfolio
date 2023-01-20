import React from "react";
import "./Review.css";
import Carousel from "react-bootstrap/Carousel";

const Review = () => {
  return (
    <div>
      <div>
        <h3 className="review-title">Customer Reviews</h3>
        <div className="review">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="review-slider">
                  <div className="first-section">
                    <img
                      className="silder-image"
                      src="https://www.kindpng.com/picc/m/421-4212792_member-icon-female-png-download-anonymous-profile-transparent.png"
                      alt=""
                    />
                    <div className="name">Emily Kinney</div>
                  </div>
                  <div className="second-section">
                    {/* <div className="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div> */}
                    <p className="slider-text">
                      At first, I had my doubts about online counselling, but I
                      gave it a shot and was pleasantly surprised to learn how
                      much it can actually aid you. Dr. Sayesta created a
                      wonderfully peaceful, healing environment where I felt
                      free to share details with her that I would normally feel
                      embarrassed to do so. She offers much-appreciated
                      compassion instead of any judgement, followed by advice.
                      She can pinpoint the source of my problems and the
                      exercises I can do to solve them. I occasionally feel
                      depressed again, but he constantly inspires me to get back
                      on the right track. A truly helpful person is someone who
                      won't judge you.
                    </p>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
              <div className="review-slider">
                  <div className="first-section">
                    <img
                      className="silder-image"
                      src="https://www.kindpng.com/picc/m/421-4212792_member-icon-female-png-download-anonymous-profile-transparent.png"
                      alt=""
                    />
                    <div className="name">Emily Kinney</div>
                  </div>
                  <div className="second-section">
                    {/* <div className="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div> */}
                    <p className="slider-text">
                      At first, I had my doubts about online counselling, but I
                      gave it a shot and was pleasantly surprised to learn how
                      much it can actually aid you. Dr. Sayesta created a
                      wonderfully peaceful, healing environment where I felt
                      free to share details with her that I would normally feel
                      embarrassed to do so. She offers much-appreciated
                      compassion instead of any judgement, followed by advice.
                      She can pinpoint the source of my problems and the
                      exercises I can do to solve them. I occasionally feel
                      depressed again, but he constantly inspires me to get back
                      on the right track. A truly helpful person is someone who
                      won't judge you.
                    </p>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Third slide"
              />
              <Carousel.Caption>
              <div className="review-slider">
                  <div className="first-section">
                    <img
                      className="silder-image"
                      src="https://www.kindpng.com/picc/m/421-4212792_member-icon-female-png-download-anonymous-profile-transparent.png"
                      alt=""
                    />
                    <div className="name">Emily Kinney</div>
                  </div>
                  <div className="second-section">
                    {/* <div className="star">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div> */}
                    <p className="slider-text">
                      At first, I had my doubts about online counselling, but I
                      gave it a shot and was pleasantly surprised to learn how
                      much it can actually aid you. Dr. Sayesta created a
                      wonderfully peaceful, healing environment where I felt
                      free to share details with her that I would normally feel
                      embarrassed to do so. She offers much-appreciated
                      compassion instead of any judgement, followed by advice.
                      She can pinpoint the source of my problems and the
                      exercises I can do to solve them. I occasionally feel
                      depressed again, but he constantly inspires me to get back
                      on the right track. A truly helpful person is someone who
                      won't judge you.
                    </p>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
