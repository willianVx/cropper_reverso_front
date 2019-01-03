/**
 * Renderiza canvas a partir de uma imagem  
 */
import tamanhoProporcional from '../cropperImg/tamanhoProporcional';
class Canvas{
   
  render(cropper, canvasToRender){

    let control = 0;

    do{
      var cropper_1 = cropper[control];
      var imagem = document.getElementById('id_imagem_original_'+control);
      loaded(imagem, cropper_1);
      control++
    }while(control < canvasToRender.length);

    function loaded(imagem, cropper_1){
        let canvasHeightMax1000 =  tamanhoProporcional.canvas(cropper_1._image_height_1, cropper_1._image_width_1);
        let canvas = document.getElementById("canvas_"+control);
        let ctx = canvas.getContext('2d');
        ctx.drawImage(imagem, cropper_1._cropper_x_1, cropper_1._cropper_y_1, cropper_1._cropper_width_1, cropper_1._cropper_height_1, cropper_1._cropper_dx_1, cropper_1._cropper_dy_1, 600, canvasHeightMax1000);
    }
    
  }
}
export default Canvas;