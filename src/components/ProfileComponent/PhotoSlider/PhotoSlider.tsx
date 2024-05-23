import React, { useState } from "react";
import './PhotoSlider.scss'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const PhotoSlider = (props: any) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)

	const [sliderRef, instanceRef] = useKeenSlider(
		{
            initial: 0,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel)
			},
            created() {
              setLoaded(true)
            },
		},
		[
			// add plugins here
		]
	);

    return (
        <>
            <div className="PhotoSlider">
                <div className="PhotoSliderAvatar">
                    {loaded && instanceRef.current && (
                        <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                            <button
                                key={idx}
                                onClick={() => {
                                instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                            )
                        })}
                        </div>
                    )}
                    <div ref={sliderRef} className='keen-slider'>
                        {props.images.map((item: any) => {
                            return (
                                <div className='keen-slider__slide' aria-hidden='false' key={item.id}>
                                    <img src={item.src} alt={item.alt} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoSlider