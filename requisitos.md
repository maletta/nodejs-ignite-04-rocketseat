**RF** => Requisitos funcionais
Tudo que o sistema vai realizar (cadastras categorias, listar especificações)

**RNF** => Requisitos não funcionais
Tudo sobre a arquitetura da aplicação (qual banco usar, qual biblioteca para email)

**RN** => Regra de negócio
Regras pros trás dos RF (não é possíve cadastrar categoria com nome existente)


-------------------------------------------------------

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.

**RNF**

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão disponibilidade como verdadeiro.
O usuário responsável pelo cadastro deve ser um usuário administrador

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
 

**RNF**

**RN**
O usuário não precisa estar autenticado no sistema, não é necesário token.
