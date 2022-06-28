<template>
    <div class="box">
        <el-row>
            <el-col>
                <el-result icon="error" title="404提示" sub-title="你访问的页面不存在！">
                    <template #extra>
                        <el-button type="danger" @click="$router.push('/')">跳转首页</el-button>
                    </template>
                </el-result>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.box {
    text-align: center;
    padding-top: 200px;
}
</style>