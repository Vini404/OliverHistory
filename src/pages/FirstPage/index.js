import React from 'react';
import Options from "../../components/Options"
import box from "../../assets/caixa.jpeg"

function FirstPage(){
    return(
        <Options 
        image={box}
         problem="Oliver, chega em sua empresa para mais um dia de trabalho e  
         enquanto ele caminha para o seu setor ele avista caixas mal empilhadas"
         option1={"Empilhar corretamente as caixas"}
         option2={"Ir para  o seu local de trabalho"}
         option3={"Chamar o responsável para arrumar aquelas caixas"}
         color1={"#0BFC00"}//verde
         color2={"#EE1414"}//vermelho
         color3={"#FC8900"}  //laranja
         nextpage={"SegundaFase"}
        />
    )
}
export default FirstPage;