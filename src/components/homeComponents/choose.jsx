import React from "react";
import { projectName } from "../../App";

const Choose = ()=>{
        return (<section className="choose">
        <div className="global__container">
          <div className="choose__top">
            <div className="choose__top-wrapper">
              <div className="choose__top-subtitle">
                Benefits
              </div>
              <div className="choose__top-title">
                Why customers choose us?
              </div>
            </div>
            <div className="choose__top-description">
              Get all the benefits of {projectName} crypto exchange in the
              palm of your hand. Here are a few reasons why you should choose us.
            </div>
          </div>
          <div className="choose__items">
            <div className="choose__item">
              <div className="choose__item-icon">
                <svg width={52} height={41} viewBox="0 0 52 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={27} cy={20} r={19} fill="url(#paint0_linear_3_669)" stroke="url(#paint1_linear_3_669)" strokeWidth={2} />
                  <path d="M46 21C46 21 37.5096 21 27.0362 21C16.5627 21 7.07403 21 8.07233 21C8.07233 9.95431 16.5627 1 27.0362 1C37.5096 1 46 9.95431 46 21Z" fill="url(#paint2_linear_3_669)" />
                  <path d="M27.54 8.0993L35.79 11.206C36.1416 11.3384 36.448 11.5968 36.6654 11.9439C36.8827 12.2911 36.9999 12.7093 37 13.1385V18.9733C37 26.1622 33.229 31.4046 27.599 33.8737C27.2128 34.0421 26.7872 34.0421 26.401 33.8737C20.77 31.4058 17 26.1622 17 18.9733V13.1385C17 12.2582 17.489 11.4777 18.21 11.206L26.46 8.0993C26.811 7.9669 27.189 7.9669 27.54 8.0993ZM26.923 9.75542L18.673 12.8633C18.6228 12.882 18.579 12.9187 18.5479 12.9681C18.5168 13.0176 18.5 13.0773 18.5 13.1385V18.9733C18.5 25.3144 21.78 29.9866 26.93 32.2431C26.9751 32.2628 27.0249 32.2628 27.07 32.2431C32.22 29.9866 35.5 25.3155 35.5 18.9733V13.1385C35.4998 13.0773 35.483 13.0177 35.4519 12.9683C35.4209 12.9189 35.3771 12.8821 35.327 12.8633L27.077 9.75542C27.0269 9.73683 26.9731 9.73683 26.923 9.75542Z" fill="url(#paint3_linear_3_669)" />
                  <path d="M0 21H52" stroke="url(#paint4_linear_3_669)" />
                  <defs>
                    <linearGradient id="paint0_linear_3_669" x1={27} y1={1} x2={27} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#343C3B" />
                      <stop offset={1} stopColor="#222728" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_669" x1={27} y1={1} x2={27} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_3_669" x1="27.036" y1={1} x2="27.036" y2={41} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#44A583" />
                      <stop offset={1} stopColor="#222728" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_3_669" x1="33.087" y1="20.3158" x2="33.087" y2="32.6316" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_3_669" x1="0.477064" y1="21.5" x2="53.9083" y2="21.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CDCDCE" stopOpacity={0} />
                      <stop offset="0.462471" stopColor="#CDCDCE" />
                      <stop offset="0.984784" stopColor="#CDCDCE" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="choose__item-title">
                Secure and Trusted
              </div>
              <div className="choose__item-description">
                Your security is our top priority.
                We employ industry-leading security measures to
                safeguard your funds and personal information.
                You can trade with confidence knowing that your
                assets are protected.
              </div>
            </div>
            <div className="choose__item">
              <div className="choose__item-icon">
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.0002 1.5C9.78292 1.5 1.50018 9.78273 1.50018 20C1.50018 30.2173 9.78292 38.5 20.0002 38.5C30.2175 38.5 38.5002 30.2173 38.5002 20C38.5002 16.3332 37.4334 12.9156 35.5933 10.0406L30.9999 12.6926L30.4999 11.8266L35.0301 9.21101C31.672 4.54112 26.1912 1.5 20.0002 1.5ZM0.500183 20C0.500183 9.23045 9.23063 0.5 20.0002 0.5C30.7697 0.5 39.5002 9.23045 39.5002 20C39.5002 30.7696 30.7697 39.5 20.0002 39.5C9.23063 39.5 0.500183 30.7696 0.500183 20ZM25.4618 15.2174L25.3 16.091C24.8755 18.3837 23.752 21.8462 22.1947 24.2399C21.422 25.4275 20.4918 26.432 19.4165 26.8373C18.8655 27.045 18.2797 27.0934 17.6793 26.93C17.0847 26.7682 16.5094 26.4081 15.9548 25.8535C14.7541 24.6528 14.3138 23.4467 14.5699 22.2688C14.8164 21.135 15.6825 20.1677 16.7559 19.3519C18.9083 17.7161 22.2334 16.442 24.6311 15.5325L25.4618 15.2174ZM15.5471 22.4812C15.3865 23.2199 15.6128 24.0972 16.6619 25.1465C17.1272 25.6117 17.5563 25.8602 17.9419 25.9651C18.3217 26.0685 18.692 26.0417 19.0639 25.9015C19.8346 25.6111 20.6181 24.8294 21.3564 23.6946C22.6361 21.7276 23.6275 18.9391 24.1301 16.7939C21.844 17.6737 19.1465 18.7911 17.361 20.1481C16.3511 20.9156 15.7172 21.6984 15.5471 22.4812ZM2.99999 25L7.99999 23L7.6286 22.0715L2.6286 24.0715L2.99999 25ZM32 23L37 25L37.3714 24.0715L32.3714 22.0715L32 23ZM4.99999 10L9.66368 12.6926L10.1637 11.8266L5.49999 9.13398L4.99999 10ZM20 2V7.38516H21V2H20Z" fill="url(#paint0_linear_3_677)" />
                  <path d="M35.5933 10.0406L36.0144 9.77104L35.7569 9.36875L35.3433 9.60756L35.5933 10.0406ZM30.9999 12.6926L30.5669 12.9426L30.8169 13.3756L31.2499 13.1256L30.9999 12.6926ZM30.4999 11.8266L30.2499 11.3935L29.8169 11.6435L30.0669 12.0766L30.4999 11.8266ZM35.0301 9.21101L35.2801 9.64403L35.7587 9.36773L35.4361 8.9191L35.0301 9.21101ZM25.3 16.091L24.8084 16L25.3 16.091ZM25.4618 15.2174L25.9534 15.3084L26.1152 14.4348L25.2845 14.7499L25.4618 15.2174ZM22.1947 24.2399L21.7755 23.9672L22.1947 24.2399ZM19.4165 26.8373L19.5929 27.3051H19.5929L19.4165 26.8373ZM17.6793 26.93L17.8106 26.4476L17.6793 26.93ZM15.9548 25.8535L15.6013 26.2071L15.9548 25.8535ZM14.5699 22.2688L14.0813 22.1626L14.5699 22.2688ZM16.7559 19.3519L17.0585 19.75L16.7559 19.3519ZM24.6311 15.5325L24.8084 16H24.8084L24.6311 15.5325ZM16.6619 25.1465L17.0155 24.7929V24.7929L16.6619 25.1465ZM15.5471 22.4812L16.0356 22.5874L15.5471 22.4812ZM17.9419 25.9651L17.8106 26.4476H17.8106L17.9419 25.9651ZM19.0639 25.9015L18.8875 25.4336L19.0639 25.9015ZM21.3564 23.6946L21.7756 23.9672L21.3564 23.6946ZM24.1301 16.7939L24.617 16.908L24.8325 15.9879L23.9506 16.3273L24.1301 16.7939ZM17.361 20.1481L17.6635 20.5462L17.361 20.1481ZM7.99999 23L8.18569 23.4642L8.64993 23.2785L8.46423 22.8143L7.99999 23ZM2.99999 25L2.53575 25.1857L2.72145 25.6499L3.18569 25.4642L2.99999 25ZM7.6286 22.0715L8.09284 21.8858L7.90714 21.4216L7.44291 21.6073L7.6286 22.0715ZM2.6286 24.0715L2.44291 23.6073L1.97867 23.793L2.16436 24.2572L2.6286 24.0715ZM37 25L36.8143 25.4642L37.2785 25.6499L37.4642 25.1857L37 25ZM32 23L31.5358 22.8143L31.3501 23.2785L31.8143 23.4642L32 23ZM37.3714 24.0715L37.8356 24.2572L38.0213 23.793L37.5571 23.6073L37.3714 24.0715ZM32.3714 22.0715L32.5571 21.6073L32.0928 21.4216L31.9071 21.8858L32.3714 22.0715ZM9.66368 12.6926L9.41368 13.1256L9.84669 13.3756L10.0967 12.9426L9.66368 12.6926ZM4.99999 10L4.56698 9.75L4.31698 10.183L4.74999 10.433L4.99999 10ZM10.1637 11.8266L10.5967 12.0766L10.8467 11.6435L10.4137 11.3935L10.1637 11.8266ZM5.49999 9.13398L5.74999 8.70096L5.31698 8.45096L5.06698 8.88398L5.49999 9.13398ZM20 7.38516H19.5V7.88516H20V7.38516ZM20 2V1.5H19.5V2H20ZM21 7.38516V7.88516H21.5V7.38516H21ZM21 2H21.5V1.5H21V2ZM2.00018 20C2.00018 10.0589 10.0591 2 20.0002 2V1C9.50677 1 1.00018 9.50659 1.00018 20H2.00018ZM20.0002 38C10.0591 38 2.00018 29.9411 2.00018 20H1.00018C1.00018 30.4934 9.50677 39 20.0002 39V38ZM38.0002 20C38.0002 29.9411 29.9413 38 20.0002 38V39C30.4936 39 39.0002 30.4934 39.0002 20H38.0002ZM35.1722 10.3101C36.9623 13.1071 38.0002 16.4316 38.0002 20H39.0002C39.0002 16.2349 37.9045 12.7241 36.0144 9.77104L35.1722 10.3101ZM31.2499 13.1256L35.8433 10.4736L35.3433 9.60756L30.7499 12.2596L31.2499 13.1256ZM30.0669 12.0766L30.5669 12.9426L31.4329 12.4426L30.9329 11.5766L30.0669 12.0766ZM34.7801 8.778L30.2499 11.3935L30.7499 12.2596L35.2801 9.64403L34.7801 8.778ZM20.0002 2C26.0235 2 31.356 4.95806 34.6242 9.50293L35.4361 8.9191C31.988 4.12418 26.3589 1 20.0002 1V2ZM20.0002 0C8.95449 0 0.000183105 8.95431 0.000183105 20H1.00018C1.00018 9.50659 9.50677 1 20.0002 1V0ZM40.0002 20C40.0002 8.95431 31.0459 0 20.0002 0V1C30.4936 1 39.0002 9.50659 39.0002 20H40.0002ZM20.0002 40C31.0459 40 40.0002 31.0457 40.0002 20H39.0002C39.0002 30.4934 30.4936 39 20.0002 39V40ZM0.000183105 20C0.000183105 31.0457 8.95449 40 20.0002 40V39C9.50677 39 1.00018 30.4934 1.00018 20H0.000183105ZM25.7917 16.1821L25.9534 15.3084L24.9702 15.1263L24.8084 16L25.7917 16.1821ZM22.6138 24.5126C24.2175 22.0475 25.3592 18.5174 25.7917 16.1821L24.8084 16C24.3917 18.25 23.2865 21.6448 21.7755 23.9672L22.6138 24.5126ZM19.5929 27.3051C20.8204 26.8425 21.8239 25.7266 22.6138 24.5126L21.7755 23.9672C21.0201 25.1284 20.1632 26.0215 19.2402 26.3694L19.5929 27.3051ZM17.548 27.4125C18.2588 27.6059 18.9523 27.5466 19.5929 27.3051L19.2402 26.3694C18.7786 26.5433 18.3006 26.5809 17.8106 26.4476L17.548 27.4125ZM15.6013 26.2071C16.2004 26.8063 16.8489 27.2223 17.548 27.4125L17.8106 26.4476C17.3205 26.3142 16.8183 26.01 16.3084 25.5L15.6013 26.2071ZM14.0813 22.1626C13.7773 23.5607 14.3253 24.9311 15.6013 26.2071L16.3084 25.5C15.1829 24.3745 14.8502 23.3328 15.0585 22.375L14.0813 22.1626ZM16.4534 18.9538C15.3483 19.7937 14.3659 20.8532 14.0813 22.1626L15.0585 22.375C15.2668 21.4167 16.0168 20.5417 17.0585 19.75L16.4534 18.9538ZM24.4537 15.065C22.0749 15.9673 18.6748 17.2655 16.4534 18.9538L17.0585 19.75C19.1418 18.1666 22.3919 16.9166 24.8084 16L24.4537 15.065ZM25.2845 14.7499L24.4537 15.065L24.8084 16L25.6391 15.6849L25.2845 14.7499ZM17.0155 24.7929C16.0428 23.8202 15.9226 23.1073 16.0356 22.5874L15.0585 22.375C14.8503 23.3326 15.1827 24.3743 16.3084 25.5L17.0155 24.7929ZM18.0731 25.4827C17.792 25.4062 17.436 25.2135 17.0155 24.7929L16.3084 25.5C16.8183 26.01 17.3205 26.3142 17.8106 26.4476L18.0731 25.4827ZM18.8875 25.4336C18.6053 25.54 18.3428 25.556 18.0731 25.4827L17.8106 26.4476C18.3006 26.5809 18.7786 26.5434 19.2402 26.3694L18.8875 25.4336ZM20.9373 23.4219C20.2162 24.5304 19.5059 25.2006 18.8875 25.4336L19.2402 26.3694C20.1632 26.0215 21.0201 25.1284 21.7756 23.9672L20.9373 23.4219ZM23.6433 16.6799C23.1484 18.7923 22.1745 21.5204 20.9373 23.4219L21.7756 23.9672C23.0978 21.9349 24.1067 19.0859 24.617 16.908L23.6433 16.6799ZM17.6635 20.5462C19.384 19.2386 22.0153 18.1435 24.3097 17.2606L23.9506 16.3273C21.6727 17.2039 18.909 18.3436 17.0585 19.75L17.6635 20.5462ZM16.0356 22.5874C16.1677 21.98 16.6854 21.2895 17.6635 20.5462L17.0585 19.75C16.0167 20.5417 15.2668 21.4167 15.0585 22.375L16.0356 22.5874ZM7.8143 22.5358L2.8143 24.5358L3.18569 25.4642L8.18569 23.4642L7.8143 22.5358ZM7.16436 22.2572L7.53575 23.1857L8.46423 22.8143L8.09284 21.8858L7.16436 22.2572ZM2.8143 24.5358L7.8143 22.5358L7.44291 21.6073L2.44291 23.6073L2.8143 24.5358ZM3.46423 24.8143L3.09284 23.8858L2.16436 24.2572L2.53575 25.1857L3.46423 24.8143ZM37.1857 24.5358L32.1857 22.5358L31.8143 23.4642L36.8143 25.4642L37.1857 24.5358ZM36.9071 23.8858L36.5358 24.8143L37.4642 25.1857L37.8356 24.2572L36.9071 23.8858ZM32.1857 22.5358L37.1857 24.5358L37.5571 23.6073L32.5571 21.6073L32.1857 22.5358ZM32.4642 23.1857L32.8356 22.2572L31.9071 21.8858L31.5358 22.8143L32.4642 23.1857ZM9.91368 12.2596L5.24999 9.56699L4.74999 10.433L9.41368 13.1256L9.91368 12.2596ZM9.73067 11.5766L9.23067 12.4426L10.0967 12.9426L10.5967 12.0766L9.73067 11.5766ZM5.24999 9.56699L9.91368 12.2596L10.4137 11.3935L5.74999 8.70096L5.24999 9.56699ZM5.433 10.25L5.933 9.38398L5.06698 8.88398L4.56698 9.75L5.433 10.25ZM20.5 7.38516V2H19.5V7.38516H20.5ZM21 6.88516H20V7.88516H21V6.88516ZM20.5 2V7.38516H21.5V2H20.5ZM20 2.5H21V1.5H20V2.5Z" fill="url(#paint1_linear_3_677)" />
                  <defs>
                    <linearGradient id="paint0_linear_3_677" x1="20.0002" y1="0.5" x2="20.0002" y2="39.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#343C3B" />
                      <stop offset={1} stopColor="#222728" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_677" x1="20.0002" y1="0.5" x2="20.0002" y2="39.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="choose__item-title">
                Fast and Efficient
              </div>
              <div className="choose__item-description">
                Our advanced trading engine ensures lightning-fast
                order execution, enabling you to take advantage of market
                opportunities as they arise. No more waiting for sluggish
                transactions – experience the speed and efficiency
                of our platform.
              </div>
            </div>
            <div className="choose__item">
              <div className="choose__item-icon">
                <svg width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={20} cy={20} r={19} fill="url(#paint0_linear_3_691)" stroke="url(#paint1_linear_3_691)" strokeWidth={2} />
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.6958 10.0527H16.6958H23.3915H24.3915V11.0527V18.4738H30.0868H31.0868V19.4738V28.9475V29.9475H30.0868H24.3915H23.3915H23.3911H22.3911H17.6957H16.6958H16.6957H15.6958H10H9V28.9475V17.3685V16.3685H10H15.6958V11.0527V10.0527ZM22.3915 18.4738H22.3911V19.4738V27.9475H17.6958V12.0527H22.3915V18.4738ZM24.3915 27.9475H29.0868V20.4738H24.3915V27.9475ZM11 18.3685V27.9475H15.6957V18.3685H11Z" fill="url(#paint2_linear_3_691)" />
                  <defs>
                    <linearGradient id="paint0_linear_3_691" x1={20} y1={1} x2={20} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#343C3B" />
                      <stop offset={1} stopColor="#222728" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_691" x1={20} y1={1} x2={20} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_3_691" x1="26.7654" y1="19.4766" x2="26.7654" y2="28.9004" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="choose__item-title">
                Wide Range of Crypto
              </div>
              <div className="choose__item-description">
                Discover a diverse selection of cryptocurrencies
                on our platform. Whether you're interested in Bitcoin,
                Ethereum, or other popular altcoins, we've got you covered.
                Expand your portfolio and explore new investment opportunities.
              </div>
            </div>
            <div className="choose__item">
              <div className="choose__item-icon">
                <svg width={40} height={41} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={20} cy={20} r={19} fill="url(#paint0_linear_3_704)" stroke="url(#paint1_linear_3_704)" strokeWidth={2} />
                  <path d="M15.2917 13.2084V10.0834C15.2917 9.80715 15.4014 9.5422 15.5968 9.34685C15.7921 9.15149 16.0571 9.04175 16.3333 9.04175H24.6667C24.9429 9.04175 25.2079 9.15149 25.4032 9.34685C25.5986 9.5422 25.7083 9.80715 25.7083 10.0834V13.2084H29.875C30.1513 13.2084 30.4162 13.3182 30.6116 13.5135C30.8069 13.7089 30.9167 13.9738 30.9167 14.2501V28.8334C30.9167 29.1097 30.8069 29.3746 30.6116 29.57C30.4162 29.7653 30.1513 29.8751 29.875 29.8751H11.125C10.8487 29.8751 10.5838 29.7653 10.3884 29.57C10.1931 29.3746 10.0833 29.1097 10.0833 28.8334V14.2501C10.0833 13.9738 10.1931 13.7089 10.3884 13.5135C10.5838 13.3182 10.8487 13.2084 11.125 13.2084H15.2917ZM17.375 21.5417H12.1667V27.7917H28.8333V21.5417H23.625V24.6667H17.375V21.5417ZM28.8333 15.2917H12.1667V19.4584H17.375V17.3751H23.625V19.4584H28.8333V15.2917ZM19.4583 19.4584V22.5834H21.5417V19.4584H19.4583ZM17.375 11.1251V13.2084H23.625V11.1251H17.375Z" fill="url(#paint2_linear_3_704)" />
                  <defs>
                    <linearGradient id="paint0_linear_3_704" x1={20} y1={1} x2={20} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#343C3B" />
                      <stop offset={1} stopColor="#222728" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3_704" x1={20} y1={1} x2={20} y2={39} gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_3_704" x1="26.8406" y1="18.9102" x2="26.8406" y2="28.7786" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A2CFC0" />
                      <stop offset="0.369108" stopColor="#89ADA2" />
                      <stop offset="0.711379" stopColor="#5B6D69" />
                      <stop offset={1} stopColor="#515B59" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="choose__item-title">
                Powerful Trading Tools
              </div>
              <div className="choose__item-description">
                From real-time price charts and technical analysis
                indicators to advanced order types and customizable
                trading strategies, we provide the tools you need
                to make informed trading decisions.
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}
export default Choose;