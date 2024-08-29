class Rodape extends React.Component {
  render() {
    return (
      <>
        <div id="my_menu" align="left">	 
          <a href="https://www.facebook.com/ifsppirituba"><img src="Imagens/facebook.png" width="41" height="43" title="IFSP Facebook" alt="IFSP Facebook"/></a> 
          </div>
          <p>
          IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100
          </p>
      </>
    )
  }
}

const domNode = document.getElementById('rodape');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Rodape />);