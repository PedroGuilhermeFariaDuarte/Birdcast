// @ts-nocheck
import styled from "styled-components/native"

export default styled.Text`
  font-family: "Roboto";
  font-size: ${props => props.textSize ? `${props.textSize}px` : '30px'};
  font-weight: ${props => props.textWeight ? props.textWeight : '500'};
  color: ${props => props.textColor ? props.textColor : '#919191'};
`
