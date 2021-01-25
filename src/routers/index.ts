import { RouteProp, DefaultNavigatorOptions } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { PropsWithChildren } from "react"

type RootStackParamList = {
  Welcome: any,
  Home: any,
  Birdcast: any,
  Playcast: any
}

export type RootScreenRouteProp = RouteProp<RootStackParamList, "Welcome">

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList, "Welcome">

export type RootOptionsNavigator = DefaultNavigatorOptions<{}, RootStackParamList>

export type Props = {
  route: RootScreenRouteProp
  navigation: RootStackNavigationProp
}

export type ReactPropsComponent = PropsWithChildren<Props>
