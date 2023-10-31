import React from "react";

const LongTerm=()=>{
        return (  <section className="long-term">
        <div className="global__container">
            <div className="account__wrapper">
                <div className="account__right">
                    <picture className="longterm-img">
                        <source
                            srcSet="/assets/img/other/longterm.png"
                            type="image/webp"
                        />
                        <img src="/assets/img/other/longterm.png" alt="" />
                    </picture>
                    <picture className="ellipses">
                        <source
                            srcSet="/assets/img/other/ellipses.png"
                            type="image/webp"
                        />
                        <img src="/assets/img/other/ellipses.png" alt="" />
                    </picture>
                </div>{" "}
                <div className="account__left">
                    <div className="account__subtitle">How it works</div>
                    <div className="account__title">
                        Create your crypto account and begin trading
                    </div>
                   <div className="account-undertitle">
                   Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.
                   </div>
                   <div className="home__input"><a className="home__link" href="/signup">Explore Now</a></div>
                  
                </div>
            </div>
        </div>
    </section>)
}

export default LongTerm;