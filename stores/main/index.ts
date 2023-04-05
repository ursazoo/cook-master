import { ref } from "vue";
import { defineStore } from "pinia";


export const useMainStore = defineStore("main", () => {
  // const initialState = ref<{
  //   signinModal: boolean;
  //   userInfo: any;
  // }>({
  //   signinModal: false,
  //   userInfo: null
  // });

  const signinModal = ref(false);
  const userInfo = ref(null);
  const isShowSummaryCard = ref(false);

  function setSigninModal(value: boolean) {
    console.log(`setSigninModal: ${value}`)
    signinModal.value = value;
  }

  function setUserInfo(value: any) {
    userInfo.value = value;
  }

  function clearUserInfo() {
    userInfo.value = null;
  }

  function reset() {
    signinModal.value = false
    userInfo.value = null;
  }

  function setIsShowSummaryCard(value: boolean) {
    isShowSummaryCard.value = value;
  }

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


  return {
    signinModal,
    userInfo,
    isShowSummaryCard,
    setSigninModal,
    setUserInfo,
    clearUserInfo,
    reset,
    setIsShowSummaryCard
  };
});
