# Desafio-final-minsait
Projeto final da formação em testes automatizados realizado pela minsait em parceria com a uniesp.
Foi realizado 4 suítes de testes enumerados para melhor entendimento, o site utilizado foi:https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
abaixo explico melhor o que foi feito em cada suíte.

Por ser um material de estudo, foi colocado em pratica varias formas de seleção de elementos e boas praticas. Apos a correção do projeto pretendo aprimorar os seletores.
# Suíte 1
Responsável pela validação das credencias e campos obrigatórios na pagina de login.
# Suíte 2
Responsável por validar o login e logout do sistema. Aqui implementei a pratica de pageObject para facilitar o login, caso a senha ou usario seja alterado apenas precisa ser feito uma alteração, evitando ter que refatorar o condigo inteiro.
# Suíte 3
Responsável por validar a o campo de buscas, entrando dentro da pagina de  admin e validando que realmente está dentro da pagina de admin.
# Suíte 4
Aqui validei o acesso a pagina de recrutamento, busquei o último candidato da pagina, pois é o que está esperando por mais tempo por uma resposta, foi feito o donwload do curriculo(resume) e  validação do download, verificando se o arquivo realmente foi baixado.
