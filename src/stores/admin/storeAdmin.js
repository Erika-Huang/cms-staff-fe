import { reactive } from "vue"
import { defineStore } from "pinia"

const useAdminStore = defineStore('admin', () => {
    const data = reactive({
        name: "",
        token: "",
        expireData: ""
    })

    const save = (name, token, expireData) => {
        data.name = name
        data.token = token
        data.expireData = expireData
    }

    return {
        data,
        save
    }
},
    {
        persist: true // 持久化存储到 localStorage 中
    }
)

export { useAdminStore }