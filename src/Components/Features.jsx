import styled from "@emotion/styled"
import { A11y, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import about from "./../media/about.png"
import contact from "./../media/contact.png"
import deal from "./../media/deal.png"
import welcome from "./../media/welcome.webp"
import Feature from "./Feature"

import "swiper/css"
import "swiper/css/pagination"

const Features = () => {
  const data = [
    {
      img: welcome,
      heading: "Welcome to our new Website",
      link: "Learn About VIRGINAMERICA.COM",
    },
    {
      img: deal,
      heading: "Deals from $49 to your favorite cities",
      link: "See all deals",
    },
    {
      img: about,
      heading: "Get to Know About Us",
      link: "Our Culture",
    },
    {
      img: contact,
      heading: "Need Support?",
      link: "Let's get in touch",
    },
  ]

  return (
    <StyledFeatures>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Feature
            img={data[0].img}
            heading={data[0].heading}
            link={data[0].link}
          />
          <Feature
            img={data[1].img}
            heading={data[1].heading}
            link={data[1].link}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Feature
            img={data[2].img}
            heading={data[2].heading}
            link={data[2].link}
          />
          <Feature
            img={data[3].img}
            heading={data[3].heading}
            link={data[3].link}
          />
        </SwiperSlide>
      </Swiper>
    </StyledFeatures>
  )
}

const StyledFeatures = styled.div`
  width: 100%;
  height: 46vh;
  background: var(--lightgray);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding);

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 900px) {
    height: 40vh;
  }
`

export default Features
