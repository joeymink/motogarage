// TODO: support multiple motorcycles
class GarageModel {
  constructor(){
    this.images = {};
    this.modPoints = [];
    this.mods = [];
  }

  addImage(viewName, imgUrl){
    this.images[viewName] = imgUrl;
  }

  addPoint(leftPct, topPct, viewName, id){
    this.modPoints.push({
      id: id,
      view: viewName,
      leftPercent: leftPct,
      topPct: topPct,
    });
  }

  addMod(name, make, viewName, modPointId){
    this.mods.push({
      name: name,
      make: make,
      view: viewName,
      pointId: modPointId
    });
  }

}

var model = new GarageModel();

export default model ;
