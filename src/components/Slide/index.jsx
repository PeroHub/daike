import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {
    Button,
    Img,
    Input,
    Line,
    List,
    PagerIndicator,
    Slider,
    Text,
  } from "components";

const Slide = () => {
    return (
<Carousel>
      <Carousel.Item interval={1000}>
      <div className="bg-lime_50 flex flex-col items-start justify-start p-[31px] sm:px-5 rounded-[14px] shadow-bs1 sm:w-[20rem]  md:w-[30rem] lg:w-[20rem] xl:w-[20rem]">
        <div className="flex flex-col items-start justify-start w-full">
            <Button
            className="flex h-[61px] items-center justify-center w-[61px]"
            shape="icbRoundedBorder14"
            size="mdIcn"
            variant="icbFillOrange2007f"
            >
            <Img
                src="images/img_frame1839.svg"
                className="h-[35px]"
                alt="frame1839"
            />
            </Button>
            <Text
            className="leading-[28.00px] mt-[30px] text-gray_800 tracking-[0.20px] w-[99%] sm:w-full"
            variant="body1"
            >
            Software Development
            </Text>
            <Text
            className="font-normal leading-[160.00%] mt-3 text-gray_500 tracking-[0.20px] w-full"
            variant="body4"
            >
            <>
                Kejoo&#39;s employee payroll system is accessed
                online, making it easy to calculate salaries with
                various benefit components.
            </>
            </Text>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className="bg-white_A700 flex flex-col items-start justify-start sm:ml-[0] p-[31px] sm:px-5 rounded-[14px] shadow-bs1 sm:w-[20rem] md:w-[30rem] lg:w-[30rem]">
            <div className="flex flex-col items-start justify-start w-full">
            <Img
                src="images/img_cut.svg"
                className="h-[61px] w-[61px]"
                alt="cut"
            />
            <Text
                className="leading-[28.00px] mt-[30px] text-gray_800 tracking-[0.20px] w-[99%] sm:w-full"
                variant="body1"
            >
                CCTV And Access Doors
            </Text>
            <Text
                className="font-normal leading-[160.00%] mt-3 text-gray_500 tracking-[0.03px] w-full"
                variant="body4"
            >
                Optimized employee information and attendance
                recording and easy to calculate online attendance
                directly from the app.
            </Text>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className="bg-white_A700 flex flex-col items-start justify-start sm:ml-[0] p-[31px] sm:px-5 rounded-[14px] border shadow-bs1 sm:w-[20rem] md:w-[30rem] lg:w-[30rem]">
            <div className="flex flex-col items-start justify-start w-full">
            <Img
                src="images/img_clock.svg"
                className="h-[61px] w-[61px]"
                alt="clock"
            />
            <Text
                className="leading-[28.00px] mt-[30px] text-gray_800 tracking-[0.20px]"
                variant="body1"
            >
                <>
                Electrical Designs
                <br />& Installations
                </>
            </Text>
            <Text
                className="font-normal leading-[160.00%] mt-3 text-gray_500 tracking-[0.20px] w-full"
                variant="body4"
            >
                <>
                Companies can implement various working hour
                regulations. With Kejoo&#39;s, managing working
                hours becomes easier.
                </>
            </Text>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
    )
}

export default Slide