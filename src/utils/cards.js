import imgAvaliacao from '../assets/card-avaliacao.jpg';
import imgExames from '../assets/card-exames.jpg';
import imgPrevencao from '../assets/card-prevencao.jpg';


export const getCards = () => {
    return [
        {
            image: imgExames, 
            title: 'Exames de rotina', 
            text: 'Os exames de rotina, também conhecidos como check-up, são avaliações médicas que visam monitorar a saúde e detectar problemas de forma precoce' 
        },

        {
            image: imgAvaliacao,
            title: 'Avaliação pré cirúrgica',
            text: 'A avaliação pré-cirúrgica é um exame médico detalhado que visa avaliar o estado de saúde do paciente e identificar riscos que possam surgir durante a cirurgia. '
        },

        {
            image: imgPrevencao,
            title: 'Prevenção de doenças',
            text: 'avaliações abrangentes do estado geral de saúde do paciente, orientando sobre hábitos e cuidados preventivos, como alimentação saudável, exercícios físicos, vacinação e exames de rotina.'
        }
    ]
}