import { Button } from "./components/ButtonUi"
import { GlobleIcon } from "./icons/GlobleIcon"
import { PluseIcon } from "./icons/Pluse"

function App() {


  return (
    <div className=' ml-2'>
      <h1 className=" text-6xl text-center pt-10">hii</h1>
      <Button text="submit"  variant="secondary" size="sm"/>
      <Button text="Add Comtent" variant="primary"  size="md" startIcon={<PluseIcon size="lg"/>} className=""></Button>
      <Button text="Add Comtent" variant="primary"  size="lg" startIcon={<GlobleIcon size="lg"/>}></Button>
    
    </div>
  )
}

export default App
