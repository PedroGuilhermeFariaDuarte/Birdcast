// @ts-nocheck
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  flex-flow: column;
  align-items: center;
`
export const ContainerWelcome = styled.View`
  width: 100%;
  min-height: 30%;
  height: auto;
  /* border:1px solid blue; */
  padding: 50px 0px 00px 0px;
`
export const ContentWelcome = styled.View`
  width: 100%;
  height:200px;
  /* border:1px solid blue; */
  padding: 20px;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const TitleContainer = styled.View`
  width: 80%;
  height: 100%;
  /* border: 1px solid blue; */
`
export const Title = styled.Text`
  font-family: "Roboto";
  font-size: ${props => props.titleSize ? `${props.titleSize}px` : '30px'};
  font-weight: ${props => props.titleWeight ? props.titleWeight : '500'};
  line-height: 50px;
  color: ${props => props.titleColor ? props.titleColor : '#919191'};
`
export const ProfileContainer = styled.View`
  flex: 1;
  height: 100%;
  /* border: 1px solid red; */

  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  /* border:1px solid green; */
  margin-top: -40px;
  background-color: #b9c8e9;
`
export const ContainerScroll = styled.View`
  width: 100%;
  height: 100%;
  /* padding-bottom: ${props => props.bottomHeight ? `${props.bottomHeight}px` : '100px'}; */
  padding-bottom:450px;
  /* border:1px solid black; */
`
export const ContentScroll = styled.ScrollView`
  flex: 1;
  height:100%;
  /* border:1px solid red; */
`
export const SearchContainer = styled.View`
  width: 100%;
  min-height: 50px;
  height: auto;
  /* border: 1px solid red; */
  padding: 20px;

  flex-flow: row nowrap;
  align-items: center;
`
export const SearchInputContainer = styled.View`
  width: 100%;
  height: 70px;
  border-radius: 13px;
  /* border:1px solid green; */
  background-color: #f5f4f4;
  padding: 0px 10px 0px 0px;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const SearchInput = styled.TextInput`
  flex: 1;
  height: 100%;
  /* border: 1px solid rebeccapurple; */
  padding: 20px;
`
export const ContainerCategory = styled.View`
  width: 100%;
  min-height: 40px;
  height: auto;
  padding:20px 20px 20px 5px;
  /* border:1px solid green; */
`
export const ContentCategory = styled.ScrollView`
  width: 100%;
  height: auto;
  /* border: 1px solid blue; */
`
export const CategoryCard = styled.TouchableOpacity`
  width: 105px;
  height: 140px;
  /* border: 1px solid red; */
  margin-left: 20px;
  margin-right: 20px;

  justify-content: space-between;
`
export const CategoryCard_Content = styled.View`
  width:100%;
  height: 75%;
  border-radius: 15px;
  /* border: 1px solid green; */
  background-color: #fff;
  border:1px solid #d5d5d5;

  justify-content: center;
  align-items: center;
`
export const CategoryCard_Footer = styled.View`
  width: 100%;
  height: auto;
  /* border:1px solid pink; */

  justify-content: center;
  align-items: center;
`
export const CategoryCard_Text = styled.Text`
  font-size: 15px;
  color: #605E5C90;
  font-weight: 700;
`
export const ContainerRecommends = styled.View`
  width: 100%;
  height: 40px;
  /* border:1px solid red; */
  padding: 20px;
  margin-top: 40px;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const TextRecommend = styled.Text`
  font-family: "Roboto";
  font-size: ${props => props.recommendSize ? `${props.recommendSize}px` : '30px'};
  font-weight: ${props => props.recommendWeight ? props.recommendWeight : '500'};
  color: ${props => props.recommendColor ? props.recommendColor : '#919191'};
`
export const ContainerCard_Recommend = styled.ScrollView`
  width: 100%;
  min-height: 200px;
  height: auto;
  /* border: 1px solid red; */
  margin-top: 30px;
  padding: 10px;
`
export const CardRecommend = styled.TouchableOpacity`
  width: 330px;
  min-height: 200px;
  height: auto;
  /* border: 1px solid green; */
  margin-left: 10px;
  margin-right: 10px;

  justify-content: center;
  align-items: center;
`
export const CardRecommend_Content = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 30px;
  box-shadow: 0px 10px 0.9px  #A9B6C650;
  background-color: #b9c8e9;
`
export const CardRecommend_Footer = styled.View`
  width: 100%;
  height: auto;
  margin-top: 10px;
  /* border: 1px solid red; */
`

