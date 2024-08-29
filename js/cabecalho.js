class Cabecalho extends React.Component {
  render() {
    return (
      <div id="menuhorizontal">
        <ul>
          <li><a href="index.html" target="_top">HOME</a></li>
          <li><a href="eventos.html" target="_top">EVENTOS</a></li>
          <li><a href="contato.html" target="_top">CONTATO</a></li>
          <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">CURSOS</a>
            <div class="dropdown-content">
              <a href="ads.html" target="_top">Análise e Desenvolvimento de Sistemas</a>
              <a href="#" target="_top">Engenharia de Produção</a>
            </div>
          </li>      
          <li><a href="entrar.html" target="_top">ENTRAR</a></li>
          <li id='about'><a  href="sobre.html" target="_top">SOBRE</a></li>
        </ul>
        <img src="../Imagens/Logo.jpg" alt="" />
      </div>
    )
  }
}

const domNode = document.getElementById('cabecalho');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Cabecalho />);