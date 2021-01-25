import React from 'react';
import { MaterialIcons } from "@expo/vector-icons"

// Components
import Button from "../../components/Button"

// Routes type
import { ReactPropsComponent } from "../../routers/index"

// Styles
import {
  Container, Content, ContainerText, Text,
} from "./styles"

const Welcome: React.FC<ReactPropsComponent> = ({ navigation, }) => (
  <>
    <Container>
      <Content>
        <ContainerText>
          <Text>
            Let your mind
            {' '}
            <Text textWeight="700">
              fly
            </Text>
            {' '}
            free, Just like A
            {' '}
            <Text
              colorText="#e74266"
              textWeight="700"
            >
              Bird
            </Text>
          </Text>
        </ContainerText>
        <Button
          title="Go to Teste"
          onPress={() => navigation.navigate("Home", { screen: 'Home' })}
        >
          <MaterialIcons name="keyboard-arrow-right" size={70} color="#eeeeef" />
        </Button>
      </Content>
    </Container>
  </>
);

export default Welcome;
