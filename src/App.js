import React, { Component } from 'react';
import cropperImg from './components/cropperImg/cropperImg';
import Teste from './components/cropperImg/config_product_img';
import './App.css';
import Canvas from './components/renderCanvas/renderCanvas';
import tamanhoProporcional from './components/cropperImg/tamanhoProporcional';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      msg: 'Aguardando Imagem!',
      img: '',
      canvasHeight_01: 444,
      canvasToRender: [],
      imgToRender: [],
      canvasSize: []
    }

    this.cropper_img_info = {}

    this.styles = {
      width: 600
    }

    this.id_img_control = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({msg: 'Buscando dados no servidor!'});
  
    fetch(`http://localhost:8080/orders?order_id=${this.state.value}`, {
      method: 'POST'
    })
      .then(
        response => { 
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json()
          }
      )
      .then(data => {
        this.setState({data: data});
        this.setState({msg: 'Iniciando ferramenta de cropper...'});

        var cropper = cropperImg(this.state.data.result)[0];

        if (cropper === false) {
          this.setState({msg: 'Nada para croppar'});
        }
        if (cropper.acabamento) {
          console.log('inciando canvas para photobloco!');
          this.setState({img: cropper.imagem_url});
          this.setState({imgToRender: [cropper.imagem_url]});

          this.setState({canvasToRender: [1]});
          this.setState({canvasSize: [tamanhoProporcional.canvas(cropper._image_height_1, cropper._image_width_1)] });

          let canvas = new Canvas();
          canvas.render([cropper], this.state.canvasToRender);
        }else{

          this.setState({img: cropper.retrato_01.imagem_url});
          this.setState({imgToRender: [cropper.retrato_01.imagem_url, cropper.retrato_02.imagem_url, cropper.retrato_03.imagem_url, cropper.retrato_04.imagem_url, cropper.retrato_05.imagem_url]})
          this.cropper_img_info = cropper.retrato_01;
          var size = Object.keys(cropper).length;
          let list = [];
          for (let index = 1; index <= size; index++) {
            list.push(index);
          }
          this.setState({canvasToRender:list});
          this.setState({canvasSize: [tamanhoProporcional.canvas(cropper.retrato_01._image_height_1, cropper.retrato_01._image_width_1),  tamanhoProporcional.canvas(cropper.retrato_02._image_height_1, cropper.retrato_02._image_width_1), tamanhoProporcional.canvas(cropper.retrato_03._image_height_1, cropper.retrato_03._image_width_1), tamanhoProporcional.canvas(cropper.retrato_04._image_height_1, cropper.retrato_04._image_width_1), tamanhoProporcional.canvas(cropper.retrato_05._image_height_1, cropper.retrato_05._image_width_1)]})
         
          let canvas = new Canvas();
          canvas.render([cropper.retrato_01, cropper.retrato_02, cropper.retrato_03, cropper.retrato_04, cropper.retrato_05], this.state.canvasToRender);
          
        }
      })
      /*
      .catch(error => {
        console.log(error);
      })
     */
    event.preventDefault();

  }
  Canvasobj(props){
    const canvasId = props.canvasId;
    const canvasSize = props.canvasSize;

    const listItems = canvasId.map((number, index) =>
      <div key={number.toString()}>
        <canvas id={'canvas_' + index} width='600' height={canvasSize[index]}></canvas>
      </div>
    );
    return (
      <div className='rederCanvas'>{listItems}</div>
    );
  }

  Renderimg(props){

    const imgUrl = props.imgUrl;
    const style = props.style;
    const listItens = imgUrl.map((n, index) =>
      <div key={n.toString()}>
        <img id={'id_imagem_original_' + index} src={n}  style={style} alt='imagem original' />
      </div>
    );

    return (
      <div className='rederImg'>{listItens}</div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Cropper reverso</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Número do pedido:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Buscar" />
        </form>
        <Teste msg={this.state.msg}/>
        <div className='envelopeRender'>
          <div className="img1">
            <this.Renderimg imgUrl ={this.state.imgToRender} style={this.styles} />
          </div>
          <div className="img2_resultado">
            <this.Canvasobj canvasId={this.state.canvasToRender} canvasSize = {this.state.canvasSize}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;