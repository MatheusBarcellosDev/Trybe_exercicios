const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  function containsA(arr) {
    return arr.reduce((acc, curr) => acc + curr.match(/a/gi).length, 0);}

  console.log(containsA(names))