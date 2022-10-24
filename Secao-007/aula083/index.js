class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de Instância
  aumentaVolume() {
    if (this.volume >= 50) {
      console.log("O volume esta no máximo");
      return;
    }
    this.volume += 2;
  }

  //Método de Instância
  diminuirVolume() {
    if (this.volume === 0) {
      console.log("O volume esta no mínimo");
      return;
    }
    this.volume -= 2;
  }

  //Método Estático => É um método da Classe em Si
  static trocaPilha(){
    console.log('OK, vou trocar')
  }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1)
ControleRemoto.trocaPilha()
