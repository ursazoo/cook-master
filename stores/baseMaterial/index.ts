import { ref } from "vue";
import { defineStore } from "pinia";
import { IBaseItem } from "../../types/material";

export interface IBaseMaterial {
  id: string;
  name: string;
  emoji: string;
  secondaryMaterial?: IBaseItem & {
    color: string;
  };
}

export const useBaseMaterialStore = defineStore("baseMaterial", () => {
  const initialState = ref<
    {
      secondaryMaterialId: string;
      secondaryMaterialName: string;
      list: IBaseMaterial[];
    }[]
  >([]);

  /**
   * [
   *    {
   *        secondaryMaterialId: '',
   *        secondaryMaterialName: '',
   *        list: []
   *    },
   *    {
   *        secondaryMaterialId: '',
   *        secondaryMaterialName: '',
   *        list: []
   *    }
   * ]
   */

  const selected = ref(initialState.value);

  const expandedSecondaryMaterialId = ref<string>("");

  function reset() {
    selected.value = [];
  }

  function add(baseMaterial: IBaseMaterial) {
    const isExisted = selected.value.some(
      (item) => item.secondaryMaterialId === baseMaterial?.secondaryMaterial?.id
    );
    if (isExisted) {
      // 说明当前 secondaryMaterial 层级已存在
      selected.value = selected.value.map((item) => {
        if (item.secondaryMaterialId === baseMaterial?.secondaryMaterial?.id) {
          return {
            ...item,
            list: [...item.list, baseMaterial],
          };
        }
        return item;
      });
    } else {
      // 不存在 secondaryMaterial 层级，需要手动创建
      selected.value.push({
        secondaryMaterialId: baseMaterial.secondaryMaterial?.id || '',
        secondaryMaterialName: baseMaterial.secondaryMaterial?.name || '',
        list: [
            baseMaterial
        ],
      });
    }
  }

  function remove(baseMaterial: IBaseMaterial) {

    selected.value = selected.value.map(secondaryMaterial => {
      if(secondaryMaterial.secondaryMaterialId === baseMaterial?.secondaryMaterial?.id && secondaryMaterial.list.length === 1) {
        return {
          secondaryMaterialId: '',
          secondaryMaterialName: '',
          list: []
        }
      }
      return {
        ...secondaryMaterial,
        list: secondaryMaterial.list.filter(item => item.id !== baseMaterial.id)
      }
    })
  }

  function setExpand(id: string) {
    expandedSecondaryMaterialId.value = id;
  }

  return {
    selected,
    expandedSecondaryMaterialId,

    add,
    remove,
    reset,
    setExpand,
  };
});
