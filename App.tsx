import { StatusBar } from 'expo-status-bar';
import React from 'react';


// Routers
import Initial from "./src/routers/Initial"

export default function App() {
  return (<>
    <StatusBar style="auto"
      hidden={false}
      translucent={true}
      animated={true}
      networkActivityIndicatorVisible={true}
    />
    <Initial />
  </>);
}
