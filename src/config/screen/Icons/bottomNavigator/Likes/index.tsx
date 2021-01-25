import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default (focused: boolean) => <MaterialCommunityIcons
  name="cards-heart"
  size={40}
  color={focused ? '#e34064' : '#bebebe'}
/>
