<template>
	<nav :style="{ left: mainStore.collapseFlag ? '64px' : '220px' }">
		<div class="left-box">
			<el-icon size="28px" class="btn" @click="expandHandle">
				<Fold v-show="!isExpand"></Fold>
				<Expand v-show="isExpand"></Expand>
			</el-icon>
			<el-breadcrumb :separator-icon="ArrowRight" class="bread_list">
				<el-breadcrumb-item
					:to="{ path: item.path || '' }"
					v-for="(item, index) in breadList"
					:key="index"
					>{{ item.title }}</el-breadcrumb-item
				>
			</el-breadcrumb>
		</div>
		<div class="tools">
			<el-dropdown>
				<div class="user_box">
					<img
						src="https://tse3-mm.cn.bing.net/th/id/OIP-C.ooGOtfne6QeEzzVi2ZRQIQAAAA?w=218&h=218&c=7&r=0&o=5&dpr=2&pid=1.7"
						alt=""
					/>
					<span class="user">{{ username }}</span>
				</div>

				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="loginout"
							>退出登录</el-dropdown-item
						>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</nav>
</template>

<script setup>
import { Fold, Expand, ArrowRight } from "@element-plus/icons-vue"
import { ref, watch } from "vue"
import { storeToRefs } from "pinia"
import { useIndexStore } from "../pinia/index"
import { useRouter } from "vue-router"
import { deleteLocalItem, getLocalItem } from "../utils/localData"
const isExpand = ref(false)
const mainStore = useIndexStore()
const { breadList } = storeToRefs(mainStore)
const router = useRouter()
const username = getLocalItem("username")

function expandHandle() {
	isExpand.value = !isExpand.value
	mainStore.collapseFlag = isExpand.value
}
function loginout() {
	deleteLocalItem("role")
	router.push({ path: "/login" })
}
</script>

<style lang="less" scoped>
nav {
	position: fixed;
	top: 0;
	width: calc(100% - 220px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	background-color: #e8e8e8;
	box-sizing: border-box;
	border-bottom: 1px solid #d0d0d0;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

	.left-box {
		display: flex;
		align-items: center;
		.btn {
			margin: 0 10px;
		}
	}
	.tools {
		padding-right: 16px;
		cursor: pointer;
		.user_box {
			line-height: 34px;
		}
		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			vertical-align: bottom;
			margin-right: 8px;
		}
		.user {
			font-size: 16px;
			color: #575757;
		}
	}
}
</style>
