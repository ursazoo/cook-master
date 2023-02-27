<template>
  <div :class="`container ${type} ${isSelected ? 'active' : ''}`" @click="onClick()">
    {{ `${ingredient?.emoji} ${ingredient?.name}` }}
  </div>
</template>

<script setup lang="ts">
import type { IIngredient, TIngredient } from '@/stores/ingredient';
import { toRefs } from 'vue';

interface IProps {
  type: TIngredient;
  isSelected: boolean;
  ingredient: IIngredient;
}

interface IEmits {
  (e: 'chose', type: TIngredient, ingredient: IIngredient): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const { isSelected, type } = toRefs(props);

function onClick() {
  emits('chose', props.type, props.ingredient);
}
</script>

<style lang="scss" scoped>
.container {
  width: fit-content;
  margin: 4px;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s linear all;
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
}

.vegetable {
  border: 1px solid rgba(22, 101, 52, 1);
  background-color: #ffffff;
  color: rgba(22, 101, 52, 1);
}

.vegetable.active {
  border: 1px solid #fff;
  background-color: rgba(22, 101, 52, 0.9);
  color: #ffffff;
}
</style>
