<template>
    <div v-if="props?.type === 'cookware'" class="cookware" :style="{
        background: isSelected ? '#4E5969' : '#fff',
        color: isSelected ? '#fff' : '#4E5969',
        borderColor: isSelected ? 'transparent' : '#4E5969'
    }" @click="handleToggleSelect()">
        {{ `${baseMaterial?.emoji || ''} ${baseMaterial?.name}` }}
    </div>

    <div v-else class="base-material" :style="{
        background: isSelected ? baseMaterial?.secondaryMaterial?.color : '#fff',
        color: isSelected ? '#fff' : baseMaterial?.secondaryMaterial?.color,
        borderColor: isSelected ? 'transparent' : baseMaterial?.secondaryMaterial?.color
    }" @click="handleToggleSelect()">
        {{ `${baseMaterial?.emoji} ${baseMaterial?.name}` }}
    </div>
</template>
  
<script setup lang="ts">
import { useBaseMaterialStore } from '@/stores/baseMaterial'
import { IBaseItem } from '../../types/material';

interface IProps {
    baseMaterial: IBaseMaterial;
    type?: string;
}

interface IBaseMaterial extends IBaseItem {
    emoji?: string;
    secondaryMaterial?: IBaseItem & {
        color: string;
    }
}

interface IEmits {
    (e: 'select', baseMaterial: IBaseMaterial): void;
    (e: 'cancel', baseMaterial: IBaseMaterial): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();
const store = useBaseMaterialStore();

const isSelected = computed(() => {
    const secondaryMaterial = store.selected.filter(secondaryMaterial => {
        return secondaryMaterial.secondaryMaterialId === (props?.baseMaterial.secondaryMaterial?.id || 'cookware')
    }) || []

    if (!secondaryMaterial.length) return false;

    return secondaryMaterial[0].list.some(baseMaterial => {
        return baseMaterial.id === props?.baseMaterial.id
    })
})

function handleToggleSelect() {
    if (isSelected.value) {
        emits('cancel', props.baseMaterial);
    } else {
        emits('select', props.baseMaterial);
    }
}

</script>
  
<style lang="scss" scoped>
.base-material {
    width: fit-content;
    margin: 4px;
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    // cursor: pointer;
    color: #ffffff;
    transition: 0.1s linear all;
    border: 1px solid transparent;

    &:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        opacity: 0.9;
    }
}

.cookware {
    width: fit-content;
    margin: 5px 4px;
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 12px;
    color: #ffffff;
    transition: 0.1s linear all;
    border: 1px solid transparent;

    &:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        opacity: 0.9;
    }
}
</style>
  