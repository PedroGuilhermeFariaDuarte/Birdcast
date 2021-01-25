// @ts-nocheck
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: 70px 20px 20px 20px;
  background-color: #fdfdfd;

  align-items: center;
`

export const ContainerHeader = styled.View`
  width: 100%;
  min-height: 40px;
  height: auto;
  /* border: 1px solid red; */

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const ContainerIcons = styled.View`
  width: 20%;
  height: 100%;
  /* border: 1px solid green; */

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const ContainerBirdcast = styled.View`
  width:100%;
  min-height: 500px;
  height: auto;
  /* border: 1px solid green; */
  padding-top: 15px;

  /* justify-content: center;
  align-items: center; */
`

export const ContainerCardBirdcast = styled.View`
  width: 100%;
  min-height: 450px;
  height: auto;
  /* border: 1px solid blue; */

  /* justify-content: center; */
  /* align-items: center; */
`

export const ContentCardBirdcast = styled.Image`
  width: 100%;
  height: 430px;
  border-radius: 30px;
  box-shadow: 0px 10px 0.9px  #A9B6C650;
  background-color: #b9c8e9;
`

export const FooterCardBirdcast = styled.View`
  width: 100%;
  height: auto;
  margin-top: 20px;
  /* border: 1px solid red; */

  justify-content: center;
  align-items: center;
`
export const ContainerActions = styled.View`
  width: 100%;
  height: 50px;
  margin-top:10px;
  padding: 10px;
  /* border:1px solid red; */

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
export const ContainerBarProgress = styled.View`
  width: 100%;
  height: 5px;
  margin-top: 15px;
  background-color: #bebebe;
  border-radius: 5px;

  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const ContainerProgress = styled.View`
  width: ${props => props.progressWidth ? `${props.progressWidth}%` : '0%'};
  height: 100%;
  background-color: #e95677;

  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

export const IconProgress = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #fdfdfd;
  background-color: #e95677;
  position: absolute;
`

export const ContainerActionsBirdcast = styled.View`
  width: 100%;
  height: auto;
  /* border: 1px solid red; */
  margin-top: 15px;
  padding-top: 15px;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
