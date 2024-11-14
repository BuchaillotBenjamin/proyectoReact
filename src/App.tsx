import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./components/MiprimerComponent/MiprimerComponent"


export const App = () => {

  return (
    <>
        
        <MiPrimerComponent text={"texto desde propiedad"} color={"red"} fontSize={5}/>
        <ComponentCounter/>

    </>
  )

}
