import React from "react"
import { FontAwesome5 } from "@expo/vector-icons"

export default (focused: boolean) => <FontAwesome5
  name="earlybirds"
  size={40}
  color={focused ? '#e34064' : '#bebebe'}
/>
