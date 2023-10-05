import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div style={{backgroundColor:'gray', width:'100%', height:'100vh'}}>
            <Link to='loja'>Loja</Link>
        </div>
    )
}