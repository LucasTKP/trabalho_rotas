import { useParams } from "react-router-dom"

export default function Produto(){

    const {id} = useParams()

    switch(id){
        case 'playstation':
            return(
                <div >
                    <h1> Play5</h1>
                    <h2>R$ 4299,90</h2>
                    <h3>A vista no pix e no boleto(1%off)</h3><br/>
                    <img src="https://st4.depositphotos.com/7699512/38205/i/450/depositphotos_382051482-stock-photo-anapa-russian-federation-12-june.jpg"/>
                </div>
            ) 
        break;
        case 'xbox':
            return(
                <div >
                    <h1> Xbox</h1>
                    <h2>R$ 2799,90</h2>
                    <h3>A vista no pix e no boleto(1%off)</h3><br/>
                    <img src="https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg"/>
                </div>
            ) 
        break;
        case 'atari':
            return(
                <div >
                    <h1> Atari</h1>
                    <h2>R$ 299,90</h2>
                    <h3>A vista no pix e no boleto(1%off)</h3><br/>
                    <img src="https://s2-techtudo.glbimg.com/nzYXtrTgwq3Ye7pJtXRgS0_Xj7M=/0x0:695x472/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/d/NCC82zQYCrd1t9DzH3Ew/2016-01-28-atari2600.jpg"/>
                </div>
            ) 
        break;
        case 'nintendo':
            return(
                <div >
                    <h1> Nintendo</h1>
                    <h2>R$ 3699,90</h2>
                    <h3>A vista no pix e no boleto(1%off)</h3><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEOpGXsuWRt1PaYdjxUthMex76JN8-bN6jUPhragQJ&s"/>
                </div>
            ) 
        break;
    }

   
    
}