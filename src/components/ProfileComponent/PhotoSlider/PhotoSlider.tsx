import React, { useEffect, useState } from "react";
import './PhotoSlider.scss'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SVGIcon from "../../../assets/icons/svgComponent";

function Arrow(props: {
  disabled: boolean,
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <span
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
    ></span>
  )
}

const PhotoSlider = (props: any) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)

	const [sliderRef, instanceRef] = useKeenSlider(
		{
            initial: 0,
            drag: false,
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

    const handleSpacePress = (event: any) => {

        if (event.code === "Space") {
            event.preventDefault();
            instanceRef.current?.next();
        }

        if (event.shiftKey && event.code === "Space") {
            event.preventDefault();
            instanceRef.current?.prev();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleSpacePress, false);
        return () => {
          document.removeEventListener("keydown", handleSpacePress, false);
        };
    }, []);

    return (
        <>
            <div
                className={`PhotoSlider ${props.cssClass ? props.cssClass : ''}`}
                style={props.cssStyle ? props.cssStyle : {}}
            >
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

                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>

                {
                    props.sliderIndex === 0 &&
                    <div className="GamePadApproveBlock">
                        {
                            props.cssClass === "approved" &&
                            <SVGIcon className="GamePadApproveIcon" name="approvedIcon" size={74} width={149} />
                        }
                        {
                            props.cssClass === "declined" &&
                            <SVGIcon className="GamePadDeclineIcon" name="declinedIcon" size={74} width={109} />
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default PhotoSlider