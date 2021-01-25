import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  MaterialIcons, SimpleLineIcons,
  MaterialCommunityIcons, Feather
} from "@expo/vector-icons"

// Routes type
import { ReactPropsComponent } from "../../routers/index"

// Components
import Text from "../../components/Text"
import Button from "../../components/Button"

// Style
import {
  Container, ContainerHeader,
  ContainerIcons, ContainerBirdcast,
  ContainerCardBirdcast, ContentCardBirdcast,
  FooterCardBirdcast, ContainerActions, ContainerBarProgress,
  ContainerProgress, IconProgress, ContainerActionsBirdcast
} from './styles'

const Playcast: React.FC<ReactPropsComponent> = ({ navigation, route }) => {
  const [ play, setPlay ] = useState<boolean>(false)
  const [ baseValue, setBaseValue ] = useState<number>(100)
  const [ progress, setProgress ] = useState<number>(0)
  let time: NodeJS.Timeout;

  const startProgress = useCallback(() => {
    time = setInterval(() => {
      handlerSetProgress()
    }, 1500)
  }, [])

  useEffect(() => {
    if (play) {
      setProgress(0)
      startProgress()
    }
  }, [ play ])

  function handlerSetProgress() {
    setProgress(OldProgress => {
      if (OldProgress >= 100) {
        clearInterval(time);
        setPlay(!play)
        return OldProgress
      }
      return OldProgress + 5
    })
  }

  return (
    <Container>
      <ContainerHeader>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={45}
          color="#8e8e8e"
          onPress={() => navigation.goBack()}
        />
        <ContainerIcons>
          <MaterialIcons name="filter-list" size={45} color="#8e8e8e" />
          <SimpleLineIcons name="options-vertical" size={25} color="#8e8e8e" />
        </ContainerIcons>
      </ContainerHeader>
      <ContainerBirdcast>
        <ContainerCardBirdcast>
          <ContentCardBirdcast source={{ uri: route?.params?.birdcastImage }} />
          <FooterCardBirdcast>
            <Text
              textSize={30}
              textWeight={700}
              colorText="#050307"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {route?.params?.birdcastName || 'Your Birdcast'}
            </Text>
            <Text
              textSize={15}
              textWeight={500}
            >
              {route?.params?.birdcastOwner || 'Birdcast dont owner'}
            </Text>
          </FooterCardBirdcast>
        </ContainerCardBirdcast>
      </ContainerBirdcast>
      <ContainerActions>
        <MaterialCommunityIcons
          name="cards-heart"
          size={25}
          color='#bebebe'
        />
        <MaterialCommunityIcons
          name="message-text-outline"
          size={25}
          color='#bebebe'
        />
        <Feather
          name="download"
          size={25}
          color='#bebebe'
        />
        <SimpleLineIcons
          name="share"
          size={25}
          color='#bebebe'
        />
      </ContainerActions>
      <ContainerBarProgress>
        <ContainerProgress progressWidth={progress}>
          <IconProgress></IconProgress>
        </ContainerProgress>
      </ContainerBarProgress>
      <ContainerActionsBirdcast>
        <MaterialIcons name="navigate-before" size={70} color="black" />
        <Button onPress={() => setPlay(!play)}>
          {
            play ?
              (
                <MaterialCommunityIcons name="pause" size={70} color="white" />
              )
              :
              (
                <MaterialCommunityIcons name="play" size={70} color="white" />
              )
          }
        </Button>
        <MaterialIcons name="navigate-next" size={70} color="black" />
      </ContainerActionsBirdcast>
    </Container>
  );
}

export default memo(Playcast);
