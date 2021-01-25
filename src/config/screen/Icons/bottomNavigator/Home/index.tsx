import React from "react"
import { MaterialIcons } from "@expo/vector-icons"

export default (focused: boolean) => <MaterialIcons
  name="home"
  size={40}
  color={focused ? '#e34064' : '#bebebe'}
/>
