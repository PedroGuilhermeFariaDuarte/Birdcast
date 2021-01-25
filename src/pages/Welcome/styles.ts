// @ts-nocheck
import styled from "styled-components/native"

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #161224;

  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
`

export const Content = styled.View`
  width: 100%;
  height: 50%;
  /* border: 1px solid red; */
  padding:10px;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`
export const ContainerText = styled.View`
  width: 100%;
  min-height: 50px;
  height: auto;
  padding-left:10px;
  /* border: 1px solid blue; */
  margin-top: 20px;
`
export const Text = styled.Text`
  font-family: 'Roboto';
  font-size: 35px;
  line-height: 60px;
  font-weight: ${props => props.textWeight ? props.textWeight : '600'};
  color: ${props => props.colorText ? props.colorText : '#eeedef'};
`

export const NextPageButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 17px;
  font-weight: bold;
  padding: 5px;
  color: #eeeeef;
  background-color: #e74266;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 30px;

  align-items: center;
`
