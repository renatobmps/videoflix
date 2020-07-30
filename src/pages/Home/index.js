import React from 'react';
import Menu from "../../components/Menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
    return (
        <div style={{ background: "#141414" }}>
            <Menu />

            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"Aulas sensacionais imergindo de cabeça no framework queridinho do mundo JavaScript com os melhores instrutores. Aqui com certeza tem conteúdo para todos, do mais iniciante ao mais avançado. Não espere, só incie, pratique e tire as suas próprias conclusões!"}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />

            <Carousel
                category={dadosIniciais.categorias[3]}
            />

            <Carousel
                category={dadosIniciais.categorias[4]}
            />

            <Carousel
                category={dadosIniciais.categorias[5]}
            />
            <Footer />
        </div>
    );
}

export default Home;
