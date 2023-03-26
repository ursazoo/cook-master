export interface IMaterialFilterProps {
  secondaryMaterialList: ISecondaryMaterial[];
}

export interface IComposeMaterialFilterProps {
  primaryMaterialList: IPrimaryMaterial[];
}

export interface IPrimaryMaterial extends IBaseItem {
  secondaryMaterialList: ISecondaryMaterial[];
}

export interface ISecondaryMaterial extends IBaseItem {
  baseMaterialList: IBaseMaterial[];
}

export interface IBaseMaterial extends IBaseItem {
  emoji: string;
}

export interface IBaseItem {
  id: string;
  name: string;
}
