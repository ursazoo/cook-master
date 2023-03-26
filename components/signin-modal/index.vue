<template>
    <NModal v-model:show="show" :mask-closable="false" preset="dialog" title="登录" :icon="() => false">
    <!-- positive-text="确认"
        negative-text="算了" @positive-click="handleSignin()" @negative-click="handleClose()" -->
        <div style="margin-bottom: 20px;">使用完整功能需要登录哦</div>
        <NForm ref="formRef" label-placement="left" label-width="auto" :model="formValue">
            <NFormItem label="账号" path="user.account">
                <NInput v-model:value="formValue.account" placeholder="输入账号" />
            </NFormItem>
            <NFormItem label="密码" path="user.password">
                <NInput type="password" v-model:value="formValue.password" placeholder="输入密码" />
            </NFormItem>
            <NFormItem>
                <NButton attr-type="button" type="primary" @click="handleValidateClick">
                    登录
                </NButton>
            </NFormItem>
        </NForm>
    </NModal>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';

import { useRequest } from 'vue-request';
import { NModal, NForm, NFormItem, NInput, NButton, FormInst, useMessage } from 'naive-ui';
import { useMainStore } from '@/stores/main';

import { signin } from '@/common/apis/user';
import { createPinia } from 'pinia';

const pinia = createPinia();
const message = useMessage()
const store = useMainStore(pinia);

const show = computed(() => {
    console.log(store.signinModal)
    return store.signinModal
})

const formRef = ref<FormInst | null>(null)
const formValue = ref({
    account: '',
    password: ''
})

const { run, data, loading, error } = useRequest(signin, {
    manual: true,
    onSuccess(data) {
        console.log(data)
        if(data?.success) {
            Cookies.set('Authorization', data?.data?.token || '');
            store.setSigninModal(false)
        }
    },
    onError(error) {
        console.log(error)
    }
});

function handleSignin() {
    run({
        account: '',
        password: '',
    })
}

function handleClose() {
    store.setSigninModal(false)
}

function handleValidateClick(e: MouseEvent) {
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success('Valid')
            run({
                account: formValue.value.account,
                password: formValue.value.password,
            })
        } else {
            console.log(errors)
            message.error('Invalid')
        }
    })
}

</script>