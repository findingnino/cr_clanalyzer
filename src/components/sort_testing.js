const bands = [ { tag: '#9VCJCLRY',
       name: 'OgieOgilthorpe',
       cardsEarned: 2200,
       battlesPlayed: 1,
       wins: 0,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#8UQ022J08',
       name: 'Astaroth',
       cardsEarned: 2200,
       battlesPlayed: 1,
       wins: 0,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#98LPUCR2',
       name: 'El Chiapas',
       cardsEarned: 1320,
       battlesPlayed: 1,
       wins: 1,
       collectionDayBattlesPlayed: 2,
       numberOfBattles: 1 },
     { tag: '#PC0C0L08',
       name: 'Ski-døuche',
       cardsEarned: 2200,
       battlesPlayed: 1,
       wins: 1,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#VC2YJQ9Q',
       name: 'אשר המלך',
       cardsEarned: 1760,
       battlesPlayed: 0,
       wins: 0,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#2GGG9Q9U2',
       name: 'aPuon',
       cardsEarned: 1760,
       battlesPlayed: 1,
       wins: 0,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#88VUGGC2',
       name: 'mctwitch5',
       cardsEarned: 1401,
       battlesPlayed: 1,
       wins: 0,
       collectionDayBattlesPlayed: 3,
       numberOfBattles: 1 },
     { tag: '#UVLG0JG9',
       name: 'findingnino1238',
       cardsEarned: 1320,
       battlesPlayed: 1,
       wins: 1,
       collectionDayBattlesPlayed: 2,
       numberOfBattles: 1 }
       ];

function descending_sort_by_cardsearned(a, b) {
  const cardsA = a.cardsEarned;
  const cardsB = b.cardsEarned;
  
  let comparison = 0;
  if (cardsA < cardsB) {
    comparison = 1;
  } else if (cardsA > cardsB) {
    comparison = -1;
  }
  return comparison;
}

console.log(bands.sort(descending_sort_by_cardsearned));