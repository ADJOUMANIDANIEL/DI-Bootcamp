export class Films{

  private title! : string;
  private episodeId! : number ;
  private openingCrawl! : string ;
  private director! : string ;
  private producer! : string ;
  private releaseDate! : string ;


  constructor(title:string,idEpisode:number,crawlOpening:string,director:string,producer:string,date:string){
    this.setTitle(title)
    this.setDirector(director)
    this.setEpisodeId(idEpisode)
    this.setOpeningCrawl(crawlOpening)
    this.setProducer(producer)
    this.setReleaseDate(date)
  }

  // setter function
  public setTitle(title:string) : void{ this.title = title}
  public setEpisodeId(id:number) : void{ this.episodeId = id}
  public setOpeningCrawl(opening:string) : void{ this.openingCrawl = opening}
  public setDirector(director:string) : void{ this.director = director}
  public setProducer(producer:string) :void { this.producer = producer}
  public setReleaseDate(date:string) : void { this.releaseDate = date }

  //guetter function
  public getTitle() : string{ return this.title}
  public getEpisodeId() : number{ return this.episodeId }
  public getOpeningCrawl() : string{ return this.openingCrawl }
  public getDirector() : string{ return this.director }
  public getProducer() :string { return this.producer }
  public getReleaseDate() : string { return this.releaseDate  }

}
