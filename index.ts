import {Model, spinalCore}  from 'spinal-core-connectorjs_type';



export class ApplicationConfig extends Model {
  public name: spinal.Str;
  public description: spinal.Str;
  public users: spinal.Lst<spinal.Val>;

  constructor(){
    super();
    this.add_attr({
      name: '',
      description: '',
      users: new spinal.Lst(),
    })
  }
}

export class GlobalUserConfig extends Model {
  public integrateur: spinal.Lst<spinal.Val>;
  public mainteneur: spinal.Lst<spinal.Val>;
  public assetManageur: spinal.Lst<spinal.Val>;
  public user: spinal.Lst<spinal.Val>;

  constructor(){
    super();
    this.add_attr({
      integrateur: new spinal.Lst(),
      mainteneur: new spinal.Lst(),
      assetManageur: new spinal.Lst(),
      user: new spinal.Lst()
    })
  }
}

spinalCore.register_models(GlobalUserConfig);
spinalCore.register_models(ApplicationConfig);