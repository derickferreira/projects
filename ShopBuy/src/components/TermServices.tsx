// css
import "./style/Terms.css";

// type
type UserProps = {
  data: {
    name: string;
  };
};

// css
import "./style/FormStyle.css";

const TermServices = ({ data }: UserProps) => {
  return (
    <>
      <h1>Hello {data.name}</h1>
      <textarea>
        Política de Privacidade Bem-vindo ao serviço, esta Política de
        Privacidade descreve como coletamos, usamos e compartilhamos suas
        informações pessoais quando você utiliza nosso site, aplicativo móvel ou
        qualquer outro serviço fornecido por nós. Informações que Coletamos Ao
        usar nosso serviço, podemos coletar as seguintes informações pessoais:
        Nome Completo: Coletamos seu nome completo quando você se registra em
        nossa plataforma para criar uma conta. Endereço de E-mail: Seu endereço
        de e-mail é necessário para criar uma conta e receber notificações
        relacionadas ao serviço. Número de Telefone: Podemos solicitar seu
        número de telefone para autenticação e comunicação com você. Apelido
        Nickname: Você pode optar por fornecer um apelido ou nome de usuário
        para ser identificado em nossa plataforma. Informações de Pagamento: Se
        você realizar transações financeiras em nosso site, podemos coletar
        informações de pagamento, como número do cartão de crédito ou detalhes
        da conta bancária. Dados de Uso: Coletamos informações sobre como você
        usa nosso serviço, incluindo páginas visitadas, tempo gasto em cada
        página e outras estatísticas de uso. Como Usamos Suas Informações
        Utilizamos suas informações pessoais para os seguintes fins: Criar e
        gerenciar sua conta de usuário. Fornecer acesso ao nosso serviço e
        personalizar sua experiência. Processar transações e pagamentos. Enviar
        comunicações relacionadas ao serviço, como notificações de conta e
        atualizações. Melhorar e otimizar nosso serviço, incluindo análise de
        dados e pesquisa de mercado. Compartilhamento de Informações Não
        compartilhamos suas informações pessoais com terceiros, exceto nas
        seguintes circunstâncias: Quando necessário para cumprir obrigações
        legais ou responder a solicitações governamentais. Com prestadores de
        serviços terceirizados que nos auxiliam na operação do serviço, sujeitos
        a obrigações contratuais de confidencialidade. Quando você autorizar
        expressamente o compartilhamento de suas informações. Segurança de Dados
        Tomamos medidas para proteger suas informações pessoais contra acesso
        não autorizado, uso indevido ou alteração. No entanto, lembre-se de que
        nenhum método de transmissão pela Internet ou armazenamento eletrônico é
        100% seguro, e não podemos garantir segurança absoluta. Seus Direitos de
        Privacidade Você tem o direito de acessar, corrigir ou excluir suas
        informações pessoais a qualquer momento. Também podemos fornecer a você
        a capacidade de optar por não receber determinadas comunicações de
        marketing. Para exercer esses direitos ou para mais informações sobre
        como suas informações são tratadas, entre em contato conosco através dos
        canais fornecidos abaixo. Contato Se você tiver dúvidas, preocupações ou
        solicitações relacionadas à nossa Política de Privacidade, entre em
        contato conosco em email@example.com ou através do número de telefone
        XXXX-XXXX.
      </textarea>
      <button className="button_n1n2_n3n4">Accept</button>
    </>
  );
};

export default TermServices;
