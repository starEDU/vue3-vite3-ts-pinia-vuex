import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// @ts-ignore
import Components from 'unplugin-vue-components/vite'
// @ts-ignore
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [AntDesignVueResolver()]
		})
	],
	server: {
		open: true,
		port: 4000,
		proxy: {
			'/api': {
				target: '',
				changeOrigin: true,
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		},
		extensions: ['.ts', '.js', '.vue', '.json']
	},
	define: {
		'process.env': process.env
	},
	build: {
		rollupOptions: {
			output: {
				// 最小化拆分包
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
				// 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
				entryFileNames: 'js/[name].[hash].js',
				// 用于输出静态资源的命名，[ext]表示文件扩展名
				assetFileNames: '[ext]/[name].[hash].[ext]',
				// 用于命名代码拆分时创建的共享块的输出命名
				// chunkFileNames: 'js/[name].[hash].js',
				// 拆分js到模块文件夹
				chunkFileNames: (chunkInfo) => {
				    const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
				    const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
				    return `js/${fileName}/[name].[hash].js`;
				},
			}
		}
	}
})
