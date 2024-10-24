class CacheProcessor {
    constructor(cacheTTLInSeconds = 60, cacheKey, cacheValue) {
      this.cache = new Map();                      // Cache para armazenar os resultados
      this.cacheTTL = cacheTTLInSeconds * 1000;    // Tempo de vida do cache (TTL) em milissegundos
  
      // Se cacheKey e cacheValue forem fornecidos, os armazena no cache
      if (cacheKey && cacheValue) {
        this.add(cacheKey, cacheValue);
      }
    }
  
    // Adiciona um item ao cache ou renova o valor se a chave já existir
    add(key, value) {
      this.cache.set(key, value);
      this.setCacheExpiration(key);                // Configura ou renova a expiração do cache
    }
  
    // Recupera um item do cache
    get(key) {
      return this.cache.get(key);
    }
  
    // Verifica se um item está no cache
    has(key) {
      return this.cache.has(key);
    }
  
    // Remove um item do cache
    delete(key) {
      return this.cache.delete(key);
    }
  
    // Configura a expiração do cache para um item
    setCacheExpiration(key) {
      // Limpa qualquer temporizador anterior para essa chave, se existir
      clearTimeout(this.cache.get(`${key}_timeout`));
  
      // Configura um novo temporizador para expirar o item
      const timeoutId = setTimeout(() => {
        this.cache.delete(key);  // Remove o item do cache após o TTL
        console.log('Cache expirado para o item:', key);
      }, this.cacheTTL);
  
      // Armazena o ID do temporizador no cache
      this.cache.set(`${key}_timeout`, timeoutId);
    }
  }
  
  module.exports = CacheProcessor;
  