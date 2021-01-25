import React, { } from 'react';
import { Alert } from "react-native"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather
}
  from "@expo/vector-icons"

// Assets


// Components
import Text from "../../components/Text"

// Routes type
import { ReactPropsComponent } from "../../routers/index"

// Styles
import {
  Container, ContainerWelcome, ContentWelcome,
  TitleContainer, Title, ProfileContainer, ProfileImage,
  SearchContainer, SearchInputContainer, SearchInput,
  ContainerCategory, ContentCategory, CategoryCard,
  CategoryCard_Content, CategoryCard_Footer, CategoryCard_Text,
  ContainerScroll, ContentScroll, ContainerRecommends,
  ContainerCard_Recommend, CardRecommend, CardRecommend_Content,
  CardRecommend_Footer
} from "./styles"

const Home: React.FC<ReactPropsComponent> = ({ navigation }) => {
  const bottomHeight = useBottomTabBarHeight();
  return (
    <Container>
      <ContainerWelcome>
        <ContentWelcome>
          <TitleContainer>
            <Title titleWeight="100">Good {parseInt(new Date().getHours().toString()) >= 18 ? 'Night' : 'morning'},</Title>
            <Title
              titleWeight="700"
              titleColor="#e95677"
              titleSize={35}
            >
              Anastassia
          </Title>
          </TitleContainer>
          <ProfileContainer>
            <ProfileImage source={{ uri: 'https://thumbnails.production.thenounproject.com/tlZ_PUngW7FZMvtpeGoRpPgOP1I=/fit-in/1000x1000/photos.production.thenounproject.com/photos/E233C1A2-789E-4DD1-8863-F22FD05327FF.jpg' }} />
          </ProfileContainer>
        </ContentWelcome>
        <SearchContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder="Search for podcasts..."
              returnKeyType="search"
              returnKeyLabel="search"
              autoFocus={false}
            />
            <Ionicons
              name="ios-search"
              size={30}
              color="#e95677"
            />
          </SearchInputContainer>
        </SearchContainer>
      </ContainerWelcome>
      <ContainerScroll bottomHeight={bottomHeight}>
        <ContentScroll>
          <ContainerCategory>
            <ContentCategory horizontal={true}>
              <CategoryCard>
                <CategoryCard_Content>
                  <MaterialCommunityIcons name="diamond-outline" color="#3B3A39" size={50} />
                </CategoryCard_Content>
                <CategoryCard_Footer>
                  <CategoryCard_Text>Premium</CategoryCard_Text>
                </CategoryCard_Footer>
              </CategoryCard>
              <CategoryCard>
                <CategoryCard_Content>
                  <MaterialCommunityIcons name="crown" color="#3B3A39" size={50} />
                </CategoryCard_Content>
                <CategoryCard_Footer>
                  <CategoryCard_Text>Trending</CategoryCard_Text>
                </CategoryCard_Footer>
              </CategoryCard>
              <CategoryCard>
                <CategoryCard_Content>
                  <Feather name="watch" color="#3B3A39" size={50} />
                </CategoryCard_Content>
                <CategoryCard_Footer>
                  <CategoryCard_Text>Recent</CategoryCard_Text>
                </CategoryCard_Footer>
              </CategoryCard>
            </ContentCategory>
          </ContainerCategory>
          <ContainerRecommends>
            <Text
              textSize={23}
              textWeight="700"
              textColor="#050307"
            >
              Recommended
            </Text>
            <Text
              textSize={15}
              textWeight="500"
              textColor="#e95677"
            >
              View All
            </Text>
          </ContainerRecommends>
          <ContainerCard_Recommend horizontal={true}>
            <CardRecommend onPress={() => navigation.navigate("Playcast", {
              birdcastName: 'Get inspired in Design',
              birdcastOwner: 'Stay Creative',
              birdcastImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3636c854811681.596a9e1d77570.png'
            })}>
              <CardRecommend_Content source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3636c854811681.596a9e1d77570.png' }} />
              <CardRecommend_Footer>
                <Text
                  textSize={20}
                  textWeight="500"
                >
                  Get inspired in Design
                </Text>
                <Text
                  textSize={15}
                  textWeight="300"
                  textColor="#e95677"
                >
                  Stay Creative
                </Text>
              </CardRecommend_Footer>
            </CardRecommend>

            <CardRecommend onPress={() => navigation.navigate("Playcast", {
              birdcastName: 'Secrets Behind of Product Design',
              birdcastOwner: 'Stay Creative',
              birdcastImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f0b96e68136647.5b52197767b78.jpg'
            })}>
              <CardRecommend_Content source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f0b96e68136647.5b52197767b78.jpg' }} />
              <CardRecommend_Footer>
                <Text
                  textSize={20}
                  textWeight="500"
                >
                  Secrets Behind of Product Design
                </Text>
                <Text
                  textSize={15}
                  textWeight="300"
                  textColor="#e95677"
                >
                  Stay Creative
                </Text>
              </CardRecommend_Footer>
            </CardRecommend>

            <CardRecommend onPress={() => navigation.navigate("Playcast", {
              birdcastName: 'Visuals In Product Design',
              birdcastOwner: 'Stay Creative',
              birdcastImage: 'https://bentallon.com/admin/app/web/upload/Schwarzkopf/Schwarzkopf-professional-product-illustration-hand-drawn-ink-line-drawing-ben-tallon-illustrator-advertising-artwork-1200-3.JPG'
            })}>
              <CardRecommend_Content source={{ uri: 'https://bentallon.com/admin/app/web/upload/Schwarzkopf/Schwarzkopf-professional-product-illustration-hand-drawn-ink-line-drawing-ben-tallon-illustrator-advertising-artwork-1200-3.JPG' }} />
              <CardRecommend_Footer>
                <Text
                  textSize={20}
                  textWeight="500"
                >
                  Visuals In Product Design
                </Text>
                <Text
                  textSize={15}
                  textWeight="300"
                  textColor="#e95677"
                >
                  Stay Creative
                </Text>
              </CardRecommend_Footer>
            </CardRecommend>
          </ContainerCard_Recommend>
        </ContentScroll>
      </ContainerScroll>
    </Container >
  )
};

export default Home;
