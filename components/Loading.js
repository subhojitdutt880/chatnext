import { DoubleBounce } from "better-react-spinkit";

function Loading() {
    return (

        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
        <div>
            <img src = "/chat.png" style = {{marginBottom: 10}} height={100}></img>
            <DoubleBounce color = "#ffffff" size = {50}></DoubleBounce>
        </div>
        </center>
    );
}

export default Loading
