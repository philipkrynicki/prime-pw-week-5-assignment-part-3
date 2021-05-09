console.log('***** Music Collection *****')

//  Variable collection that starts an empty array
let collection = [];


// Add a function named addToCollection

function addToCollection (title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }   //  end of record album designation
  collection.push(record);
  return record;
}  //  end of addToCollection function


//  Test the addToCollection function by adding six albums to your Collection
console.log('Adding first album to collection', addToCollection('Check Your Head', 'Beastie Boys', '1992'));
console.log('Adding second album to collection', addToCollection('Ill Communication', 'Beastie Boys', '1994'));
console.log('Adding third album to collection', addToCollection('Pride', 'White Lion', '1987'));
console.log('Adding fourth album to collection', addToCollection('Metal Health', 'Quiet Riot', '1983'));
console.log('Adding fifth album to collection', addToCollection('Bark at the Moon', 'Ozzy Osbourne', '1980'));
console.log('Adding sixth album to collection', addToCollection('Diary of a Madman', 'Ozzy Osbourne', '1981'));
// End of imaginary record collection!  I wasn't sure if the yearPublished should be in quotes or // NOTE:

console.log(collection);
//  console.log the collection array
//  First commit added here
//  Artist array deleted on this line
//  Add a function named showCollection
function showCollection (array) {
  console.log(`My collection contains ${array.length} records.`);
//  Backticks added to Line 35
  for (let items of array) {
    console.log(`${items.title} by ${items.artist} published ${items.yearPublished}:`);
  }
}
// end of showCollection function

console.log('I would like to see what we have in the collection');
showCollection(collection);
//  Test the showCollection function



// Add a function named findByArtist
function findByArtist (artist){
  let emptyArray = [];
    for (let i=0; i<collection.length; i++){
      if (artist === collection[i].artist){
        return collection[i];
//  Attemted to use forEach at this point but wasn't successful.  I'm not sure what to add to show all the albums from an artists.  Beastie Boys have two albums, but they don't show up in the console.log
    }
  }
}
// Correction made to spelling of length on Line 50

// Test the findByArtist function

console.log( findByArtist( 'Beastie Boys' ));
console.log( findByArtist('White Lion'));
console.log( 'Pantera should be undefined:', findByArtist('Pantera'));
