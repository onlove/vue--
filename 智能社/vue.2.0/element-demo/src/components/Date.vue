<template>
    <div class="block">
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                }
            }
        }
    }
</script>

<style>

</style>
