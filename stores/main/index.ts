import { ref } from "vue";
import { defineStore } from "pinia";


export const useMainStore = defineStore("main", () => {
  const signinModal = ref(false);
  const userInfo = ref(null);
  const posts = ref<any>([]);
  const isShowSummaryCard = ref(false);
  const isShowPostsCard = ref(false);

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

  function setIsShowPostsCard(value: boolean) {
    isShowPostsCard.value = value;
  }

  function setPosts(value: any[]) {
    posts.value = value;
  }

  return {
    signinModal,
    userInfo,
    posts,
    isShowSummaryCard,
    isShowPostsCard,
    setSigninModal,
    setUserInfo,
    clearUserInfo,
    reset,
    setIsShowSummaryCard,
    setIsShowPostsCard,
    setPosts
  };
});
