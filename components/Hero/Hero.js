import SliderMain from "../SliderMain/SliderMain"

const Hero = () => {
    return <main className="container">


        <header>

            <div className="image">
                <img src="/icon/gnv-slider.svg" alt="" />
            </div>

        </header>

        <div className="slider">
            <SliderMain />
        </div>

        <style jsx>{`

            .container {
                display: grid;
                grid-template-columns: 2fr 1.5fr;
                height: calc(90vh - 10rem);
                gap: .5rem;
                width: 140%;
                transform: translateX(-15%);
                margin-bottom: 3rem;
            }

            header {
                box-sizing: border-box;
                padding-top: 1rem;
                position: relative;
                overflow: hidden;
                transform: skewX(-15deg);
            }

            .image {
                position: absolute;
                right: -15%;
                height: 100%;
                width: 100%;
                background-image: url("/slider/background-left.webp");
                background-position-x: 10vw;
                background-size: auto 110%;
                background-repeat: no-repeat;
                background-color: #D4D4D6;
                transform: skewX(15deg);
            }


            .slider {
                z-index: 1;
                transform: skewX(-15deg);
                overflow: hidden;
            }

            img {
                height: 6rem;
                position: absolute;
                right: 12%;
                top: 2rem;
            }
            
            @media screen and (max-width: 1400px) {
                .image {
                    background-position-x: 5vw;
                }
                img {
                    height: 5rem;
                }
            }

            @media screen and (max-width: 1250px) {

                .container {
                    height: calc(80vh - 10rem);
                }

                img {
                    height: 4rem;
                }
            }

            @media screen and (max-width: 1050px) {

                .image {
                    background-position-x: 5vw;
                }

                .container {
                    height: calc(70vh - 10rem);
                }

                img {
                    height: 3.5rem;
                }
            }

            @media screen and (max-width: 900px) {

                .image {
                    background-position-x: 10vw;
                }

                .container {
                    height: calc(60vh - 10rem);
                }

                img {
                    height: 3rem;
                }
            }

            @media screen and (max-width: 750px) {

                .image {
                    background-position-x: 10vw;
                }

                .container {
                    height: calc(50vh - 10rem);
                }
            }

            @media screen and (max-width: 600px) {

                .container {
                    height: calc(40vh - 10rem);
                }

                img {
                    height: 2.5rem;
                    top: 1rem;
                }
            }

            @media screen and (max-width: 450px) {
                .image {
                    background-position-x: 10vw;
                }

                .container {
                    height: calc(35vh - 10rem);
                }

                img {
                    height: 2rem;
                }
            }

            @media screen and (max-width: 400px) {
                .image {
                    background-position-x: 10vw;
                }

                .container {
                    height: calc(35vh - 10rem);
                }

                img {
                    height: 1.5rem;
                }
            }


        `}</style>
    </main>
}

export default Hero