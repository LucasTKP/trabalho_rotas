import { Link } from "react-router-dom";

export default function Loja (){
    return(
        <div style={{backgroundColor:'gray', width:'100%', height:'100vh', display:"flex", flexDirection:'column', gap:5}}>
            <Link to="../produtos/playstation" >PlayStation</Link>
            <Link to='../produtos/xbox'>Xbox</Link>
            <Link to='../produtos/atari'>Atari</Link>
            <Link to='../produtos/nintendo'>Nintendo</Link>
        </div>
    )
}