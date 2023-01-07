# requisição:
### areas base de ua requisição http:
 - obs.: é possível ver o status da requisição pelo dev tools na aba network


 #### URL: endereço + path
 Path = camainhao que identifica o recurso a ser buscado/ metodos

 request Method: GET| POST | PUT | DELETE | PATCH

## path params
 - o proprio path:
    -   algo após o endereço separado por barra comoo id: /1, /2
 - query String
  - chave e valor após um ponto de interrogação ?type=grass&name=i 
    - chave e valor, argumentos que podemos bsucar
    type = grass

    > https//pokeapi.co/api/v2/pokemon?offset=20$limit=20
    - sendo assim:
    >> endereço => "https//pokeapi.co";
    >> path => "/api/v2/pokemon";
    >>query string => "offset=20$limit=20";
    - chave e valor que são parametros de páginação, qual o limite de itens a serem exibidos por página de 2 em 2 como um livro:
    > offset = 20 
    > limit = 20

    ## request HEADERS E response Headers
    - metadados, configuração da requisição para o servidor
        configuração de idiomas;
        autenticação;
        autorizathion

## BODY
 - dependendo do metodo da requisição existirá uma área chamada body, dados mais robustos.
 Como no método POST
 - para enviar um novo pokemon por exemplo
 Body{
    "name":"Novo"
 }
 
    
# resposta da requisição:
### STATUS CODE
 - se a requisição foi processada  e o que aconteceu com ela.
 ### reponse header
 
 ### response Body

 #debugar
 adicionar a palavara **debugger** dentro de um trecho de código ele adicionara o breakpoint visivel no console dobrwoser
 
  - obs: comandos terminal
* criando pastas: mkdir nomePasta
* criando arquivos dentro das pastas: touch nomePasta/nomeArquivo.ext
