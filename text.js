function countWordsAndVowels(phrase) {
    let nbMots = 0;
    let nbVoyelles = 0;
    let caractere;
  
    for (let i = 0; i < phrase.length; i++) {
      caractere = phrase[i];
  
      if (caractere.match(/[aeiouy]/i)) {
        nbVoyelles++;
      }
  
      if (caractere === " " && phrase[i - 1] !== " ") {
        nbMots++;
      }
    }
  
    return { nbMots, nbVoyelles };
  }
  
  const phrase = "hello hamza";
  const result = countWordsAndVowels(phrase);
  
  console.log(`Nombre de mots : ${result.nbMots}`);
  console.log(`Nombre de voyelles : ${result.nbVoyelles}`);
  



//   2 eme partie 
  
  

  function findSumDistinctElements(ensemble1, ensemble2) {
    let somme = 0;
    const dejaVu = new Set();
  
    ensemble1.forEach((element) => {
      if (!dejaVu.has(element)) {
        dejaVu.add(element);
        somme += element;
      }
    });
  
    ensemble2.forEach((element) => {
      if (!dejaVu.has(element)) {
        dejaVu.add(element);
        somme += element;
      }
    });
  
    return somme;
  }
  
  const ensemble1 = [3, 1, 7, 9];
  const ensemble2 = [2, 4, 1, 9, 3];
  
  const somme = findSumDistinctElements(ensemble1, ensemble2);
  
  console.log(`Somme des éléments distincts : ${somme}`);