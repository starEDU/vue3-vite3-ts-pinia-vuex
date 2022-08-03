<template>
    <div class='IronGlobePage' ref="IronGlobePage">

    </div>
</template>

<script>
export default {
    name: "IronGlobePage",
    mounted() {
        const myChart = this.$echarts.init(this.$refs.IronGlobePage)
        const option = {
            backgroundColor: '#000',
            globe: {
                baseTexture: '/world.topo.bathy.200401.jpg',
                heightTexture: '/bathymetry_bw_composite_4k.jpg',
                displacementScale: 0.2,
                shading: 'realistic',
                environment: '/starfield.jpg',
                realisticMaterial: {
                    // roughness: ROOT_PATH + '/asset/get/s/data-1497599804873-H1SHkG-mZ.jpg',
                    // metalness: ROOT_PATH + '/asset/get/s/data-1497599800643-BJbHyGWQW.jpg',
                    textureTiling: [8, 4]
                },
                postEffect: {
                    enable: true
                },
                viewControl: {
                    autoRotate: false
                },
                light: {
                    main: {
                        intensity: 2,
                        shadow: true
                    },
                    ambientCubemap: {
                        texture: '/pisa.hdr',
                        exposure: 2,
                        diffuseIntensity: 2,
                        specularIntensity: 2
                    }
                }
            }
        };

        myChart.setOption(option)
    }
}
</script>

<style scoped>

</style>
