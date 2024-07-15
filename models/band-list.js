const Band = require("./band");


class BandList{

  constructor(){
    this.bands = [
      new Band('Metalica'),
      new Band('Heroes de silencio'),
      new Band('Bon Jovi'),
      new Band('Breanking Benjamin'),
    ];
  }


  addBand( name ){
    const newBand = new Band( name )
    this.bands.push( newBand );
    return this.bands;
  }

  removeBand( id ){
    this.bands = this.bands.filter( banda => banda.id !== id );
  }

  getBands(  ){
    return this.bands;
  }

  increseVotes( id ){
    this.bands = this.bands.map( band => {
      if( band.id == id ){
        band.votes += 1;
      }
      return band
    })
  }

  changeBandName( newName , id ){
    this.bands = this.bands.map( band => {
      if( band.id == id ){
        band.name = newName;
      }
      return band
    })
  }

}


module.exports = BandList;