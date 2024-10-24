class BatchProcessor {
    constructor(items, batchSize, batchTimeInSeconds) {
      this.batchSize = batchSize;               // Tamanho máximo do lote
      this.batchTime = batchTimeInSeconds * 1000;  // Converte segundos para milissegundos
      this.items = items || [];                 // Itens iniciais do lote
      this.timer = null;                        // Timer para controle do tempo de processamento
      
      // Inicia o timer se já houverem itens no lote
      if (this.items.length > 0) {
        this.startTimer();
      }
    }
  
    // Adiciona um item ao lote
    add(item) {
      this.items.push(item);
  
      // Se atingimos o tamanho do lote, processa imediatamente
      if (this.items.length >= this.batchSize) {
        this.processBatch();
      } else {
        // Se o timer não foi iniciado, inicia o temporizador para processar após o tempo máximo
        if (!this.timer) {
          this.startTimer();
        }
      }
    }
  
    // Inicia o temporizador
    startTimer() {
      this.timer = setTimeout(() => {
        this.processBatch();
      }, this.batchTime);
    }
  
    // Processa o lote atual e limpa os itens
    processBatch() {
      if (this.items.length === 0) return;  // Nada a processar
  
      const batch = [...this.items];  // Clona o lote atual
      this.items = [];                // Limpa os itens após o processamento
  
      // Cancela o temporizador após processar
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
  
      // Função embutida de processamento (neste caso, console.log)
      console.log('Processando lote:', batch);
    }
  
    // Função que permite que o objeto seja logado mostrando o lote
    toString() {
      return `BatchProcessor: ${this.items.length} items waiting for processing`;
    }
  }
  
  module.exports = BatchProcessor;
  