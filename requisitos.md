**RF** => Requisitos funcionais
Tudo que o sistema vai realizar (cadastras categorias, listar especificações)

**RNF** => Requisitos não funcionais
Tudo sobre a arquitetura da aplicação (qual banco usar, qual biblioteca para email)

**RN** => Regra de negócio
Regras pros trás dos RF (não é possíve cadastrar categoria com nome existente)


-------------------------------------------------------

# Alteração de carro
**RF**
Deve ser possível alterar dados de um carro cadastrado
**RNF**
**RN**
Não deve ser possível alterar a placa de um carro já cadastrado.

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar tidas as categorias.

**RNF**

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão disponibilidade como verdadeiro.
**(controller?) O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros possíveis pelo nome da categoria.
Deve ser possível listar todos os carros possíveis pelo nome da marca.
Deve ser possível listar todos os carros possíveis pelo nome do carro.

**RNF**

**RN**
O usuário não precisa estar autenticado no sistema.


# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma mesma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RN**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mias de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

