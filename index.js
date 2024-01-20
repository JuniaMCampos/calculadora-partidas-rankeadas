

function reankeadas(qtdVitorias, qtdDerrotas) {
    return qtdVitorias - qtdDerrotas
}

let resultado = reankeadas(50,50);

let nivelHeroi;

switch (true) {
    case (resultado < 10):
      nivelHeroi = "Ferro";
      break;
    case (resultado >= 11 && resultado <= 20):
      nivelHeroi = "Bronze";
      break;
    case (resultado >= 21 && resultado <= 50):
        nivelHeroi= "Prata";
        break;
    case (resultado >= 51 && resultado <= 80):
        nivelHeroi = "Ouro";
        break;
    case (resultado >= 81 && resultado <= 90):
        nivelHeroi = "Diamante";
        break;
    case (resultado >= 91 && resultado <= 100):
        nivelHeroi = "Lendário";
        break; 
    case (resultado >= 101):
        nivelHeroi = "Imortal";
        break;       
    default:
      console.log("Nenhuma Rankeada calculada");
  }

  console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível " + nivelHeroi)