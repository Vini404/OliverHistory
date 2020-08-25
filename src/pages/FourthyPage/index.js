import React from 'react';
import Options from "../../components/Options"
import Pointer from "../../assets/pointer.png"
function ThirdPage(){
    return(
        <Options 
        image={Pointer}
         problem="Ao voltar do almoço e voltar ao seu local de trabalho, ele repara que esqueceu de bater seu ponto de entrada."
         option1={"Continuar o trabalho"}
         option2={"Comunicar o RH"}
         option3={"Comunicar o líder."}
         color1={"#EE1414"}
         color2={"#0BFC00"}
         color3={"#FC8900"}  
         nextpage={"QuartaFase"}  
        />
    )
}
export default ThirdPage;