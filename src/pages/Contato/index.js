import "./style.css";

export default function Contato() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#880000",
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "40%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.7880340169777!2d-47.40326922532144!3d-20.514913781008936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b93c4b5f%3A0xbe0e42f3aa42525c!2sFatec%20Franca%20-%20Faculdade%20de%20Tecnologia%20de%20Franca%20Dr%20Thomaz%20Novelino!5e0!3m2!1spt-BR!2sbr!4v1695900017980!5m2!1spt-BR!2sbr"
          width="90%"
          height="450"
          style={{ border: 0 }}
          title="Mapa da localização da empresa"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="dados">
        <h2>Faculdade de Tecnologia de Franca - Fatec Franca</h2>
        <br />
        <h4>CNPJ/MF: 62.823.257/0109-10</h4>
        <br />
        <h4>
          Rua Irênio Grecco nº4580 <br />
          Vila Imperador
          <br />
          Franc/SP
          <br />
          14405-191
          <br />
          Telefone: (16) 3702-3204
          <br />
          Fax: (16) 3702-2584
        </h4>
        <br />
        <div style={{ padding: 10, border: "1px solid white" }}>
          <h4>
            E-mail: <span>secretaria@fatecfranca.edu.br</span>
          </h4>
          <br />
          <h5>
            Sempre verifique a pasta de Spam/lixo eletrônico ao buscar respostas
            de e-mails da Fatec Franca
          </h5>
        </div>
        <br />
        <h4>Linha de ônibus urbano</h4>
        <br />
        <ul>
          <li>
            <span>J08 (Vl.Imperador)</span> - ponto na R. Irênico Grecco
          </li>
          <li>
            <span>C01 (Circular 01), C02 (Circular 02),</span> e{" "}
            <span>LDN (Linha Direta Norte)</span>- ponto na Av. Orlando Dompieri
          </li>
          <li>
            <span>J09 (Vl.Imperador via Jd. Planalto)</span> - ponto na R.
            Realindo Jacinto Mendonça
          </li>
        </ul>
      </div>
    </div>
  );
}
