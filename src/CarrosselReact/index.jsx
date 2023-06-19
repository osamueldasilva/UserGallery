import { Carousel } from 'react-carousel-minimal';



function CarrosselReact () {
    const data = [
        {
          image: "https://img.freepik.com/fotos-gratis/ponta-de-sao-lourenco-localizado-em-madeira-portugal_1268-14137.jpg?size=626&ext=jpg&ga=GA1.1.329630417.1684154870&semt=sph",
          caption: `<div>
                      San Francisco
                      <br/>
                      Next lin
                    </div>`
        },
        {
          image: "https://img.freepik.com/fotos-gratis/ponte-de-madeira-na-ilha-de-koh-nangyuan-em-surat-thani-tailandia_335224-1082.jpg?size=626&ext=jpg&ga=GA1.1.329630417.1684154870&semt=sph",
          caption: "Scotland"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/cascata-barco-limpo-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "Darjeeling"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/pessoa-solitaria-caminhando-em-um-caminho-nas-colinas-do-alabama-na-california-com-o-monte-whitney_181624-37777.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "San Francisco"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/as-montanhas-de-seoraksan-estao-cobertas-pela-nevoa-matinal-e-o-nascer-do-sol-em-seul-na-coreia_335224-313.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "Scotland"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/cordilheira-majestosa-uma-aventura-na-natureza-gerada-por-ia_188544-14013.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "Darjeeling"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/nascer-do-sol-sobre-a-beleza-tranquila-da-cordilheira-na-natureza-gerada-pela-ia_188544-39896.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "San Francisco"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/bela-foto-de-colinas-gramadas-cobertas-por-arvores-perto-de-montanhas-nas-dolomitas-italia_181624-24400.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "Scotland"
        },
        {
          image: "https://img.freepik.com/fotos-gratis/arvore-seca-em-um-por-do-sol_1204-85.jpg?size=626&ext=jpg&ga=GA1.2.329630417.1684154870&semt=sph",
          caption: "Darjeeling"
        }
      ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return (
      
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
         <div style={{width: '50px',}}></div>
          <Carousel
             data={data}
            time={2000}
            width="750px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              display: "block",
              
              
            }}
          />
            <div style={{width: '50px',}}></div>
            </div>
       
    )
}

export default CarrosselReact;