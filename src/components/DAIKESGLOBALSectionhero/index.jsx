import React from "react";

import { Button, Img, Line, Text } from "components";

const DAIKESGLOBALSectionhero = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[91%]">
          <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
            <div className="flex sm:flex-col justify-between  w-full sm:mb-10">
              <div className="flex flex-col items-start justify-start pr-2.5 pt-2.5">
                <Text
                  className="font-bevietnampro text-gray_800"
                  as="h6"
                  variant="h6"
                >
                  {props?.price}
                </Text>
              </div>
              <div className=" flex gap-2 items-center sm:mt-4  w-auto">
              <Text
                className="font-bevietnampro font-medium text-gray_800"
                variant="body3"
              >
                {props?.login}
              </Text>
                <Text
                  className="bg-orange_200 font-bevietnampro sm:px-5 px-6 py-3 rounded-lg shadow-bs font-medium text-lime_800 text-right w-auto"
                  variant="body3"
                >
                  {props?.register}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col gap-[54px] items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="font-bevietnampro font-bold text-[14px] md:text-[35px] leading-[136.00%] text-gray_800 tracking-[0.20px]"
                    as="h1"
                    variant="h1"
                  >
                    {props?.description}
                  </Text>
                  <Text
                    className="font-bevietnampro font-normal leading-[25.00px] mt-[25px] text-gray_500 tracking-[0.20px]"
                    variant="body3"
                  >
                    {props?.descriptionOne}
                  </Text>
                  <Button
                    className="cursor-pointer font-bevietnampro font-medium min-w-[151px] mt-[45px] text-center text-lg text-lime_800"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillOrange200"
                  >
                    {props?.contactUs}
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-col gap-4 justify-start">
                    <Text
                      className="font-bevietnampro text-gray_800"
                      as="h3"
                      variant="h3"
                    >
                      {props?.p1k}
                    </Text>
                    <Text
                      className="font-bevietnampro font-normal ml-2 md:ml-[0] text-center text-gray_500 tracking-[0.20px]"
                      variant="body3"
                    >
                      {props?.customers}
                    </Text>
                  </div>
                  <Line className="bg-gray_200 h-10 ml-[25px] my-5 w-px" />
                  <div className="flex flex-col items-center justify-start ml-[23px] mt-0.5 w-[27%]">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-bevietnampro ml-0.5 md:ml-[0] text-center text-gray_800"
                        as="h3"
                        variant="h3"
                      >
                        {props?.thirtytwo}
                      </Text>
                      <Text
                        className="font-bevietnampro font-normal text-center text-gray_500 tracking-[0.20px]"
                        variant="body3"
                      >
                        {props?.userratings}
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_200 h-10 ml-[25px] my-5 w-px" />
                  <div className="flex flex-col gap-4 items-start justify-start ml-[23px]">
                    <Text
                      className="font-bevietnampro text-gray_800"
                      as="h3"
                      variant="h3"
                    >
                      {props?.onehundred}
                    </Text>
                    <Text
                      className="font-bevietnampro font-normal text-gray_500 tracking-[0.20px]"
                      variant="body3"
                    >
                      {props?.students}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[780px] inset-y-[0] my-auto right-[0] w-[64%] md:w-full">
          <div className="h-[780px] m-auto w-full">
            <div className="absolute h-[780px] inset-[0] justify-center m-auto w-[98%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-start justify-end m-auto p-[88px] md:px-10 sm:px-5 rounded-[50px] w-full"
                style={{ backgroundImage: "url('images/img_group3.png')" }}
              >
                <div className="bg-gray_50 flex flex-col gap-3 items-center justify-start mb-[205px] mt-[276px] p-2 rounded-[5px] w-auto">
                  <Img
                    src="images/img_homeaddress.png"
                    className="h-8 md:h-auto object-cover w-8"
                    alt="homeaddress"
                  />
                  <div className="flex flex-col gap-[5px] items-center justify-center w-[83px]">
                    <Text
                      className="font-dmsans text-center text-gray_800 tracking-[0.03px]"
                      variant="body5"
                    >
                      {props?.ourlocationdoesOne}
                    </Text>
                    <Text
                      className="font-dmsans max-w-[80px] md:max-w-full text-center text-cyan_300_cc tracking-[0.03px]"
                      variant="body6"
                    >
                      {props?.wellhelpyoudeliOne}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_frame185.png"
                className="absolute bottom-1/4 h-[104px] object-cover right-[0] w-[354px]"
                alt="frame185"
              />
            </div>
            <Img
              src="images/img_a97772c9a38d4.png"
              className="absolute h-[640px] left-[0] object-cover top-[3%] w-[640px]"
              alt="a97772c9a38dFour"
            />
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[124px] items-center justify-start p-[31px] sm:px-5 right-[16%] top-[29%] w-[124px]"
            style={{
              backgroundImage: "url('images/img_group3_green_300.svg')",
            }}
          >
            <div className="flex flex-col h-[41px] md:h-auto items-center justify-center my-[9px] w-[60px]">
              <Text
                className="font-dmsans font-medium text-cyan_900 tracking-[0.04px] w-auto"
                variant="body4"
              >
                {props?.p1500}
              </Text>
              <Text
                className="font-dmsans lowercase text-cyan_900 tracking-[0.03px] w-auto"
                variant="body5"
              >
                {props?.customersOne}
              </Text>
            </div>
          </div>
          <Img
            src="images/img_group6356090.svg"
            className="absolute bottom-[13%] h-[35px] inset-x-[0] mx-auto"
            alt="group6356090"
          />
        </div>
      </div>
    </>
  );
};

DAIKESGLOBALSectionhero.defaultProps = {
  price: "DAIKESGLOBAL.",
  login: "Login",
  register: "Register",
  description: (
    <>
      Best technology hub
      <br />
      that offers training & corporate services!
    </>
  ),
  descriptionOne: (
    <>
      DAIKESGLOBAL&#39;s complete services make it easier for people to access
      technology skills and provides
      <br />
      corporate service that save’s time and money.
    </>
  ),
  contactUs: "Contact Us",
  p1k: "1K+",
  customers: "Customers",
  thirtytwo: "3,2",
  userratings: "User ratings",
  onehundred: "100+",
  students: "Students",
  ourlocationdoesOne: (
    <>
      Our location
      <br />
      doesn’t matter
    </>
  ),
  wellhelpyoudeliOne: "we’ll help you deliver",
  p1500: "1,500+",
  customersOne: "Customers",
};

export default DAIKESGLOBALSectionhero;
