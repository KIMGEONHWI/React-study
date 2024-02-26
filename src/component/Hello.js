// const Hello = () => {
//    <p>Hello</p>
// }

import App from "../App";
import Welcome from "./Welcome";
import World from "./World";

// export default Hello;

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
            <World />
            <Welcome />
        </div>

    );
}

export default App;