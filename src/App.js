import logo from "./logo.svg";
import "./App.css";
import First, { Second } from "./components/firstcomponents";
import Register from "./components/studentregister";
import { STUDENTS } from "./constants";
import Counter from "./components/counter"

function App(props) {
  console.log(props, "App props")
  return (
    <div className="App">

      <First
        title='this is the first components'
        name="somebody"
        age={22}
        subjects={["physics", "electromagnetics", "maths"]}
        location={{
          latitude: 26.565,
          longitude: 35.4545
        }}
        gender={"M"}
        isStudent={true}
      />
      <Second />
      <Register batch={'075'} faculty={'bct'} college={'kantipur'} students={STUDENTS}
      />
      <Counter/>
    </div>
  );
}

export default App;