import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./components/MiprimerComponent/MiprimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEfect/ComponentUseEfect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"


export const App = () => {



  return (

    < div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>

      {/* <MiPrimerComponent text={"texto desde propiedad"} color={"red"} fontSize={5}/>
        <ComponentCounter/>
        <ComponentUseEffect/> */}
      {/* <FormComponent/> */}
      <AppProduct />

    </div>

  )

}
