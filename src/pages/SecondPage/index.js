import React from 'react';
import Options from "../../components/Options"
import Clear from "../../assets/Clear.jpeg"
function SecondPage(){
    return(
        <Options 
        image={Clear}
         problem="Após toda esta confusão Oliver chega finalmente ao seu local de trabalho e 
         percebe que sua maquina está com alguma leves manchas no local em  que as peças são jogadas."
         option1={"Continuar o trabalho"}
         option2={"Providenciar os materiais e limpar o local"}
         option3={"Pedir os materiais para outra pessoas e pedir para que ela limpe o local"}
         color1={"#EE1414"}
         color2={"#0BFC00"}
         color3={"#FC8900"}
         nextpage={"TerceiraFase"}  
        />
    )
}
export default SecondPage;