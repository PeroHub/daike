import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

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
import DAIKESGLOBALSectionhero from "components/DAIKESGLOBALSectionhero";
import Slide from "components/Slide";
import Main from "components/Main";

const DAIKESGLOBALPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-bevietnampro sm:gap-10 md:gap-10 gap-[150px] items-end justify-end mx-auto pt-14 w-full">
        <div className="flex flex-col items-start justify-start md:px-5 w-[91%] md:w-full">
          <DAIKESGLOBALSectionhero
            className="h-[803px] relative w-full"
            price="DAIKESGLOBAL."
            login="Login"
            register="Register"
            description={
              <>
                Best technology hub
                <br />
                that offers training & corporate services!
              </>
            }
            descriptionOne={
              <>
                DAIKESGLOBAL&#39;s complete services make it easier for people
                to access technology skills and provides
                <br />
                corporate service that save’s time and money.
              </>
            }
            contactUs="Contact Us"
            p1k="1K+"
            customers="Customers"
            thirtytwo="3,2"
            userratings="User ratings"
            onehundred="100+"
            students="Students"
            ourlocationdoesOne={
              <>
                Our location
                <br />
                doesn’t matter
              </>
            }
            wellhelpyoudeliOne="we’ll help you deliver"
            p1500="1,500+"
            customersOne="Customers"
          />
          <div className="flex flex-col items-center justify-start mt-[73px] w-[91%] md:w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start mt-4 sm:mt-20">
              <Text
                className="font-bold text-center text-gray_800 tracking-[0.07px]"
                as="h2"
                variant="h2"
              >
                Our Services
              </Text>
              <Text
                className="font-normal text-center text-gray_500 tracking-[0.20px] mb-4"
                variant="body3"
              >
                <>
                  DAIKESGLOBAL provides many training and corporate services
                  <br />
                  and make it easier for people to access.
                </>
              </Text>
            </div>
            <Slide />
            {/* <Main /> */}
            <PagerIndicator
              className="flex gap-[18px] h-4 items-start justify-center mt-[50px] w-[84px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-orange_200 w-4"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-orange_200_87 w-4"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="flex flex-col gap-[33px] items-center justify-start  mt-[149px]">
            <Text
              className="font-bold text-center text-gray_800 tracking-[0.07px]"
              as="h2"
              variant="h2"
            >
              About Us
            </Text>
            <Text
              className="font-normal leading-[25.00px] text-center text-gray_500 tracking-[0.20px]"
              variant="body3"
            >
              <>
                DAIKESGLOBAL provides many training and corporate services
                <br />
                and make it easier for people to access.Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of
                a document or a typeface without relying on meaningful content.
                Lorem ipsum may be used as a placeholder before final copy is
                available. It is also used to temporarily replace text in a
                process called greeking, which allows designers to consider the
                form of a webpage or publica…
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray_50_01 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 w-full">
              <div className="flex sm:flex-col md:gap-10 items-center justify-between max-w-[1120px] mx-auto w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
                  <Text
                    className="font-bevietnampro font-bold text-gray_800 tracking-[0.07px] w-full"
                    as="h2"
                    variant="h2"
                  >
                    DAIKESGLOBAL has several benefits for your you
                  </Text>
                  <Text
                    className="font-bevietnampro font-normal leading-[25.00px] mt-[41px] text-gray_500 tracking-[0.20px] w-[83%] sm:w-full"
                    variant="body3"
                  >
                    <>
                      DAIKESGLOBAL&#39;s complete features make it easier for
                      people to manage and increase employee productivity in
                      various locations. Save time and money.
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-poppins min-w-[151px] mt-[45px] text-center text-lg text-lime_800"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillOrange200"
                  >
                    Contact Us
                  </Button>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="flex md:flex-1 flex-col gap-[23px] w-[41%] md:w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[23px] items-center justify-start pb-[26px] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-gray_800 tracking-[0.20px]"
                            variant="body1"
                          >
                            Quality Corporate Services
                          </Text>
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-6 mt-0.5 w-6"
                            alt="arrowdown"
                          />
                        </div>
                        <div className="flex flex-col font-bevietnampro items-center justify-start w-full">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {({ expanded }) => (
                                  <div className="flex flex-col items-center justify-between w-full">
                                    <Text
                                      className="font-normal leading-[25.00px] text-gray_500 tracking-[0.20px] w-full"
                                      variant="body3"
                                    >
                                      Kejoo app can be used for monitoring
                                      on-site employees, remote employees, WFH
                                      employees, field teams, sales teams and
                                      marketing teams.
                                    </Text>
                                  </div>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                        </div>
                      </div>
                      <Line className="self-center h-px rotate-[-180deg] bg-gray_500_26 w-full" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="bg-white_A700 sm:hidden font-montserrat sm:h-[1420px] h-[630px] md:h-[780px] max-w-[1200px] mt-[150px] mx-auto md:px-5 relative rounded-[20px] w-full">
              <div className="sm:h-[1270px] h-[630px] m-auto w-full">
                <div className="absolute h-[630px] inset-y-[0] my-auto right-[0] w-[41%] sm:w-full">
                  <div className="h-[630px] m-auto w-full">
                    {/* <Img
                      src="images/img_unsplashfeijcnqwkm.png"
                      className="h-[630px] m-auto object-cover w-full"
                      alt="unsplashfeijcnq"
                    /> */}
                    <Line className="absolute bg-amber_A400 h-[25px] right-[13%] rotate-[-74deg] top-[0] w-[11%]" />
                  </div>
                  <Line className="absolute bg-amber_A400 h-[25px] right-[18%] rotate-[-74deg] top-[0] w-[11%]" />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat sm:hidden flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto pb-16 md:px-10 px-16 sm:px-5 w-[74%] sm:w-full"
                  style={{ backgroundImage: "url('images/img_group5.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[52px] w-[91%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="font-normal sm:mt-0 mt-[72px] text-white_A700"
                        as="h1"
                        variant="h1"
                      >
                        <span className="md:text-[38px] sm:text-4xl text-amber_A400 text-[40px] font-montserrat text-left">
                          <>
                            Simple & Modern
                            <br />
                          </>
                        </span>
                        <span className="md:text-5xl text-white_A700 text-[64px] font-montserrat text-left font-bold">
                          Furniture
                        </span>
                      </Text>
                      <Line className="bg-amber_A400 h-[30px] rotate-[-75deg] w-[12%]" />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[5px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="font-normal text-white_A700_cc w-full"
                          variant="body2"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </Text>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[238px] mt-[93px] text-center text-gray_900 text-lg"
                          shape="CircleBorder29"
                          size="md"
                          variant="FillAmberA400"
                        >
                          ORDER NOW
                        </Button>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[26px] w-[96%] md:w-full">
                          <div className="bg-amber_A400 flex flex-col items-center justify-start p-2.5 rounded-[10px] w-[9%] sm:w-full">
                            <Img
                              src="images/img_call.svg"
                              className="h-6 my-0.5 w-6"
                              alt="call"
                            />
                          </div>
                          <Text
                            className="font-normal ml-3 sm:ml-[0] text-white_A700"
                            variant="body2"
                          >
                            0123 4567890
                          </Text>
                          <div className="bg-amber_A400 flex flex-col items-center justify-start sm:ml-[0] ml-[104px] p-[7px] rounded-[10px] w-[9%] sm:w-full">
                            <Img
                              src="images/img_bxbxlink.svg"
                              className="h-[30px] my-0.5 w-[30px]"
                              alt="bxbxlink"
                            />
                          </div>
                          <a
                            href="WWW.FURNITURE.COM"
                            className="font-normal lowercase ml-3 sm:ml-[0] text-white_A700"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text variant="body2">WWW.FURNITURE.COM</Text>
                          </a>
                        </div>
                      </div>
                      <Line className="bg-amber_A400 h-[25px] mb-[105px] sm:mt-0 mt-4 rotate-[-74deg] w-[8%]" />
                    </div>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-amber_A400 bottom-[0] h-[30px] right-[26%] rotate-[-75deg] w-[7%]" />
            </div>
          
                <div style={{ marginTop: "50px"}} className="w-[80%] sm:w-full">
                  <div className="bg-gray_900 flex flex-col items-center justify-end mx-2.5 p-[43px] md:px-10 sm:px-5 rounded-[20px]">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-[84%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="font-medium text-center text-white_A700"
                          as="h2"
                          variant="h2"
                        >
                          Contact Us
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col font-inter gap-[9px] items-start justify-start w-full">
                          <Text
                            className="font-medium text-white_A700"
                            variant="body2"
                          >
                            Email
                          </Text>
                          <Input
                            wrapClassName="flex h-[50px] w-full"
                            className="p-0 w-full"
                            name="rectangle130"
                            placeholder=""
                            shape="RoundedBorder10"
                            variant="FillWhiteA700"
                          ></Input>
                        </div>
                        <div className="flex flex-col font-inter gap-[9px] items-start justify-start mt-[30px] w-full">
                          <Text
                            className="font-medium text-white_A700"
                            variant="body2"
                          >
                            Full Name
                          </Text>
                          <Input
                            wrapClassName="flex h-[50px] w-full"
                            className="p-0 w-full"
                            name="rectangle130_One"
                            placeholder=""
                            shape="RoundedBorder10"
                            variant="FillWhiteA700"
                          ></Input>
                        </div>
                        <div className="flex flex-col font-inter items-center justify-start mt-8 w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text
                              className="font-medium text-white_A700"
                              variant="body2"
                            >
                              Message
                            </Text>
                            <div className="bg-white_A700 h-20 rounded-[10px] w-full"></div>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[440px] sm:min-w-full mt-5 text-center text-lg text-lime_800"
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillOrange200"
                        >
                          Submit
                        </Button>
                        <Text
                          className="font-inter font-medium md:ml-[0] ml-[323px] mt-2.5 text-white_A700"
                          variant="body4"
                        >
                          or Start Free Trial
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
            
            <div className="flex flex-col font-bevietnampro gap-[37px] items-center justify-start max-w-[1076px] mt-[152px] mx-auto md:px-5 w-full">
              <Text
                className="font-bold text-center text-gray_800 tracking-[0.07px]"
                as="h2"
                variant="h2"
              >
                They Partner With Us
              </Text>
              <div className="flex flex-col font-inter items-center justify-start w-full">
                <div className="flex sm:flex-col md:gap-[50px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start w-[17%] md:w-full">
                    <Img
                      src="images/img_minimize.svg"
                      className="h-8"
                      alt="minimize"
                    />
                    <Text
                      className="mt-1 text-center text-gray_500_01"
                      as="h4"
                      variant="h4"
                    >
                      Unsplash
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center w-[14%] md:w-full">
                    <div className="flex md:h-7 h-[35px] justify-end relative w-[27%]">
                      <div className="h-7 ml-auto mt-auto w-[79%]">
                        <Text
                          className="m-auto text-gray_500_01"
                          variant="body1"
                        >
                          N
                        </Text>
                        <div className="absolute border-2 border-gray_500_01 border-solid h-7 inset-[0] justify-center m-auto w-full"></div>
                      </div>
                      <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[7px] mx-auto"
                          alt="mail"
                        />
                        <Img
                          src="images/img_volume_gray_500_01.svg"
                          className="h-[35px] mb-auto mt-[-7px] z-[1]"
                          alt="volume"
                        />
                      </div>
                    </div>
                    <Text className="text-gray_500_01" as="h4" variant="h4">
                      Notion
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-center w-[19%] md:w-full">
                    <Img
                      src="images/img_globe.svg"
                      className="h-[30px] w-[30px]"
                      alt="globe"
                    />
                    <Text className="text-gray_500_01" as="h4" variant="h4">
                      INTERCOM
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center md:mt-0 mt-[3px] w-[15%] md:w-full">
                    <Img
                      src="images/img_computer.svg"
                      className="h-[30px]"
                      alt="computer"
                    />
                    <Text className="text-gray_500_01" as="h4" variant="h4">
                      descript
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start md:mt-0 mt-[3px] w-[19%] md:w-full">
                    <Button
                      className="flex h-[30px] items-center justify-center mb-1.5 w-[30px]"
                      shape="icbRoundedBorder14"
                      size="smIcn"
                      variant="icbFillGray50001"
                    >
                      <Img src="images/img_refresh.svg" alt="refresh" />
                    </Button>
                    <Text className="text-gray_500_01" as="h4" variant="h4">
                      grammarly
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray_900 flex font-bevietnampro items-center justify-center mt-[37px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[37px] mt-[121px] mx-auto w-[77%]">
                <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-center w-full">
                  <div className="flex sm:flex-col  md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[35%] md:w-full">
                      <div className="flex flex-col items-start">
                        <Text
                          className="mt-0.5 text-white_A700"
                          as="h5"
                          variant="h5"
                        >
                          <span className="md:text-2xl sm:text-[22px] text-white_A700 text-[26px] font-bevietnampro text-left font-bold">
                            DAIKESGLOBAL
                          </span>
                          <span className="md:text-5xl text-orange_200 text-6xl font-bevietnampro text-left font-black">
                            .
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                        <Text
                          className="font-normal text-white_A700_a2"
                          variant="body3"
                        >
                          +234 806 6408 289, +234 813 2386 576
                        </Text>
                        <Text
                          className="font-normal text-white_A700_a2"
                          variant="body3"
                        >
                          infodaikesgloba@gmail.com
                        </Text>
                        <Text
                          className="font-normal text-white_A700_a2"
                          variant="body3"
                        >
                          <>
                            #87 Uyo Road, Ikot Ekpene,
                            <br />
                            Akwa Ibom State, Nigeria
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] h-[29px] md:h-auto items-center justify-start w-auto">
                        <Img
                          src="images/img_facebook.svg"
                          className="h-5 w-2.5"
                          alt="facebook"
                        />
                        <Img
                          src="images/img_twitter.svg"
                          className="h-5 w-6"
                          alt="twitter"
                        />
                        <Img
                          src="images/img_bxlinstagramaltsvg.svg"
                          className="h-6 w-6"
                          alt="bxlinstagramalt"
                        />
                        <Img
                          src="images/img_whatsappsvgrepocom.svg"
                          className="h-[23px] w-[23px]"
                          alt="whatsappsvgrepo"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-1 sm:flex-col  sm:gap-10 gap-[100px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start  sm:w-full">
                        <Text
                          className="font-medium text-white_A700 text-center sm:w-full"
                          variant="body2"
                        >
                          Links
                        </Text>
                        <ul className="flex flex-col gap-[26px] items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">About Us</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">Benefits</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">Testimonial</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[27px] items-start justify-start w-[27%] sm:w-full">
                        <a
                          href="javascript:"
                          className="font-medium text-white_A700 text-center sm:w-full no-underline"
                        >
                          <Text variant="body2">Support</Text>
                        </a>
                        <ul className="flex flex-col items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">FAQ</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal mt-7 text-white_A700_a2"
                            >
                              <Text variant="body3">Privacy Policy</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal mt-[25px] text-white_A700_a2"
                            >
                              <Text variant="body3">Terms of Services</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[18%] sm:w-full">
                        <Text
                          className="font-medium text-white_A700 sm:w-full text-center"
                          variant="body2"
                        >
                          Our Works
                        </Text>
                        <ul className="flex flex-col gap-[27px] items-start justify-start md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">Trainees</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">Customer</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="font-normal text-white_A700_a2"
                            >
                              <Text variant="body3">Services</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="font-normal text-center text-white_A700_90 tracking-[0.03px]"
                      variant="body4"
                    >
                      © 2023 DAIKESGLOBAL. All right reserved
                    </Text>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAIKESGLOBALPage;
