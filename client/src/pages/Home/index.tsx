import { useEffect, useCallback, useState } from "react"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { Banner } from "../../components/Banner"
import { ContentList } from "../../components/ContentList"
import { Container, Content } from "./styles"

const Home = () => {
  const [banners, setBanners] = useState<any[]>([])
  const [contents, setContents] = useState<any[]>([])

  const getBanners = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/banners")
    setBanners(data)
  }, [])

  const getContents = useCallback(async () => {
    const { data } = await axios.get("https://api-uniflix.vercel.app/api/contents")
    setContents(data)
  }, [])

  useEffect(() => {
    getBanners()
    getContents()
  }, [])

  return <Container>
    <Swiper loop={true}>
      {banners.map(banner => <SwiperSlide key={banner.id}>
        <Banner
          imageUrl={banner.cover}
          description={banner.sinopse}
          title={banner.title}
          url={banner.normalize} />
      </SwiperSlide>)}
    </Swiper>

    <Content>
      {contents.map(content => <ContentList data={content} key={content.id} />)}
    </Content>
  </Container>;
};

export { Home };
