# BatchProcessor & CacheProcessor

Uma biblioteca simples em Node.js para processamento em lote e gerenciamento de cache. Esta biblioteca permite processar dados em lotes e armazenar resultados em cache com expiração configurável.

## Instalação

Para instalar a biblioteca, você pode usar npm ou yarn. Execute um dos seguintes comandos no seu terminal:

```bash
npm install swift-Process
```

ou

```bash
yarn add swift-Process
```

## Uso

### Importando a Biblioteca

```javascript
const { BatchProcessor, CacheProcessor } = require('swift-Process');
```

### BatchProcessor

O `BatchProcessor` permite processar itens em lotes com um tamanho e um tempo máximo de processamento configuráveis.

#### Exemplo de Uso do BatchProcessor

```javascript
const initialItems = ['Item 1', 'Item 2'];
const batchSize = 3;  // Tamanho do lote
const batchTimeInSeconds = 2;  // Tempo máximo em segundos

const batchProcessor = new BatchProcessor(initialItems, batchSize, batchTimeInSeconds);
batchProcessor.add('Item 3');  // Processa automaticamente

// Saída esperada: Processando lote: [ 'Item 1', 'Item 2', 'Item 3' ]
```

### CacheProcessor

O `CacheProcessor` gerencia o armazenamento em cache de dados, permitindo que você configure um tempo de vida (TTL) para os itens armazenados e adicione mais valores ao cache enquanto ele não expira.

#### Exemplo de Uso do CacheProcessor

```javascript
const cacheTTLInSeconds = 10;  // TTL de 10 segundos
const cacheKey = 'uniqueKey';
const cacheValue = 'Resultado processado';

// Inicializa o CacheProcessor com TTL, cacheKey e cacheValue
const cacheProcessor = new CacheProcessor(cacheTTLInSeconds, cacheKey, cacheValue);

console.log('Valor em cache:', cacheProcessor.get(cacheKey));  // Deve mostrar 'Resultado processado'

// Adiciona mais valores ao cache
cacheProcessor.add('anotherKey', 'Outro resultado processado');
console.log('Valor em cache para anotherKey:', cacheProcessor.get('anotherKey'));  // Deve mostrar 'Outro resultado processado'

// Adiciona um novo valor ao cache com a mesma chave
cacheProcessor.add(cacheKey, 'Resultado atualizado');

// Esperar e verificar o cache
setTimeout(() => {
  console.log('Valor após expiração do cache:', cacheProcessor.get(cacheKey));  // Deve mostrar 'Resultado atualizado'
}, 5000);  // 5 segundos

setTimeout(() => {
  console.log('Valor após expiração do cache:', cacheProcessor.get('anotherKey'));  // Deve ser undefined
}, 12000);  // 12 segundos
```

### Funcionalidades

- **BatchProcessor**:
  - Adicione itens em lotes e processe-os automaticamente.
  - Defina o tamanho do lote e o tempo máximo para o processamento.

- **CacheProcessor**:
  - Armazene dados em cache com um TTL configurável.
  - Renove a expiração de itens existentes ao adicionar novos valores ao cache.
  - Remova itens do cache após a expiração.

## Contribuindo

Se você gostaria de contribuir para este projeto, fique à vontade para abrir uma pull request ou relatar problemas no repositório.

## Licença

Este projeto está licenciado sob a MIT License.

---

Sinta-se à vontade para ajustar qualquer parte do README para melhor atender às suas necessidades!