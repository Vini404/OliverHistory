import React from 'react';
import Options from "../../components/Options"
import Clock from "../../assets/clock.jpeg"
function ThirdPage(){
    return(
        <Options 
        image={Clock}
         problem="Finalmente, Oliver chegou em seu horário de almoço e sua máquina precisa continuar trabalhando."
         option1={"Ir para o almoço"}
         option2={"Avisar ao seu líder"}
         option3={"Procurar uma pessoa disponível para o serviço"}
         color1={"#EE1414"}
         color2={"#FC8900"}
         color3={"#0BFC00"}  
         nextpage={"QuartaFase"}  
        />
    )
}
export default ThirdPage;