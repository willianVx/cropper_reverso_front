/*
*
* Cropper config
*
*/

var croppConfig = {

  url_obj_img: function(obj_url){
    var url_regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
    return url_regexp.exec(obj_url);
  },
  item_search: function(objetoCropper, chave){

    var retorno;

    objetoCropper.forEach(element => {
      if (element.key === chave) {
        retorno = element.value;
      }
    });
    return retorno;

  },

  portaRetratos: function(objetoCropper){

    let retrato_01 = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem'))[0],
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x_1')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y_1')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width_1')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height_1')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx_1')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy_1')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth_1')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight_1')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width_1')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height_1')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width_1')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height_1'))
    }
   
    let retrato_02 = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem 2'))[0],
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x_2')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y_2')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width_2')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height_2')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx_2')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy_2')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth_2')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight_2')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width_2')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height_2')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width_2')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height_2'))
    }

    let retrato_03 = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem 3'))[0],
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x_3')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y_3')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width_3')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height_3')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx_3')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy_3')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth_3')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight_3')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width_3')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height_3')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width_3')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height_3'))
    }

    let retrato_04 = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem 4'))[0],
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x_4')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y_4')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width_4')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height_4')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx_4')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy_4')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth_4')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight_4')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width_4')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height_4')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width_4')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height_4'))
    }

    let retrato_05 = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem 5'))[0],
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x_5')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y_5')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width_5')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height_5')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx_5')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy_5')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth_5')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight_5')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width_5')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height_5')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width_5')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height_5'))
    }
    
    let cropper = {
        retrato_01: retrato_01,
        retrato_02: retrato_02,
        retrato_03: retrato_03,
        retrato_04: retrato_04,
        retrato_05: retrato_05
    }

    return cropper;
  },

  photoBloco: function(objetoCropper){
    let photoBloco = {
      imagem_url: this.url_obj_img(this.item_search(objetoCropper, 'Imagem'))[0],
      acabamento: this.item_search(objetoCropper, 'Acabamento'),
      _cropper_x_1: parseFloat(this.item_search(objetoCropper, '_cropper_x')),
      _cropper_y_1: parseFloat(this.item_search(objetoCropper, '_cropper_y')),
      _cropper_width_1: parseFloat(this.item_search(objetoCropper, '_cropper_width')),
      _cropper_height_1: parseFloat(this.item_search(objetoCropper, '_cropper_height')),
      _cropper_dx_1: parseFloat(this.item_search(objetoCropper, '_cropper_dx')),
      _cropper_dy_1: parseFloat(this.item_search(objetoCropper, '_cropper_dy')),
      _cropper_dWidth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dWidth')),
      _cropper_dHeigth_1: parseFloat(this.item_search(objetoCropper, '_cropper_dHeight')),
      _canvas_width_1: parseFloat(this.item_search(objetoCropper, '_canvas_width')),
      _canvas_height_1: parseFloat(this.item_search(objetoCropper, '_canvas_height')),
      _image_width_1: parseFloat(this.item_search(objetoCropper, '_image_width')),
      _image_height_1: parseFloat(this.item_search(objetoCropper, '_image_height'))
    }
    return photoBloco;
  }

}


/*
*
* Verifica se no pedido existem imagens a serem cortadas e retorna a imagem e seus dados a serem cortados
*
*/
var cropperImg = function(dados_img){
    let dados = dados_img;
    
    let acabamento_info = [];

    //insere os elementos do array recebido no array interno acabamento_info
    for (let index = 0; index < dados.length; index++) {
      const element = dados[index];
      acabamento_info.push(element);
    }
    
    /*
    *
    *   Retorna objeto com dados para cropper 
    *
    */

    /*
    var objCropperImg = function(objetoCropper) {
   
      let product_key = objetoCropper[0][0].value;
      switch (product_key) {
        case "photobloco 10x15cm":
          //console.log('Iniciando config para crop Photobloco');
          //return productConfig(product_key, objetoCropper)
          break
        case "photobloco 15x10cm":
          //console.log('Iniciando config para crop Photobloco');
          //return productConfig(product_key, objetoCropper)
          break
        case "Porta retrato":
          //console.log('Iniciando config para crop Porta retratos');
          return croppConfig.portaRetratos(product_key, objetoCropper);
        default:
          break;
      }
      
    }
    */

    //Monta array com informacoes da imagem a ser cortada ou retorna false, caso não exista imagem a ser cortada   
    var monta_objeto_cropper = function(){
    
      let objetoCropper = [];
      
      acabamento_info.forEach( (key) => {
        
              key.forEach(element => {

                  if(element.value === 'Porta retrato'){
                    let portaRetratos = croppConfig.portaRetratos(key);
                    objetoCropper.push(portaRetratos);
                  }
                  if(element.value === 'photobloco 10x15cm'){
                    let photoBloco = croppConfig.photoBloco(key);
                    objetoCropper.push(photoBloco);
                  }
                  if(element.value === 'photobloco 15x10cm'){
                    let photoBloco = croppConfig.photoBloco(key);
                    objetoCropper.push(photoBloco);
                  }
                  if(element.value === 'photobloco 10x10cm'){
                    let photoBloco = croppConfig.photoBloco(key);
                    objetoCropper.push(photoBloco);
                  }

          });
        
      });



      /*

      for (let index = 0; index < acabamento_info.length; index++) {
        const element = acabamento_info[index];
        if (element[index].value === 'photobloco 10x15cm' || element[index].value === 'photobloco 15x10cm' || element[index].value === 'Porta retrato') {
            //objetoCropper.push(element);
        }
      }
      */
      
      if (objetoCropper.length === 0) {
        return false
      }else{
        return objetoCropper;
      }

    }
    return monta_objeto_cropper();

}
export default cropperImg;