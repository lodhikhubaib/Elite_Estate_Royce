import React from "react";
import "./Value.css";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="padding innerWidth flexCenter v-container">
        {/* left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="" />
          </div>
        </div>
        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">
            Enhancing Your Real Estate Experience
          </span>
          <span className="secondaryText">
            We are here, always prepared to assist you,
            <br />
            committed to delivering the finest service.
            <br />
            We believe that a great home is the cornerstone of a<br />
            better life, and we're dedicated to helping you find that perfect
            place.
          </span>

          
          <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Best Interest Rate On Market
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="">
      Unlock your dream home with our market-leading interest rates, offering you the best financing options for your real estate aspirations.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Prevent Unstable Prices
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="secondaryText">
      Stabilize your real estate investments. Our expert strategies shield you from market fluctuations, ensuring a secure and prosperous future.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Best Price In The Market 
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="secondaryText">
      Discover unbeatable deals. Our real estate listings offer the best market prices, turning your dream property into an affordable reality.
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Value;
