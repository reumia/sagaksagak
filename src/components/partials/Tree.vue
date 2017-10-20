<template>
  <svg :width="canvasWidth" :height="canvasHeight" ref="canvas">
    <g ref="g" transform="translate(40,0)">
      <path class="link" v-for="link in links" :key="link.id" :d="getDiagonal(link)"></path>
      <g v-for="node in nodes" :key="node.id"
         :class="{
                'node': true,
                'node--internal': Boolean(node.children) === true,
                'node--leaf': Boolean(node.children) === false
              }"
         :transform="getTranslate(node)">
        <circle r="2.5"></circle>
        <text dy="3" :x="getTextX(node)" :style="getTextStyle(node)">{{ getText(node) }}</text>
      </g>
    </g>
  </svg>
</template>

<script>
  import * as d3 from 'd3'

  export default {
    name: 'tree',
    props: [ 'root' ],
    watch: {
      root (val) {
        const root = val
        const tree = d3.tree().size([this.canvasWidth - 100, this.canvasHeight - 100])

        this.links = root.descendants().slice(1)
        this.nodes = root.descendants()

        tree(root)
      }
    },
    data () {
      return {
        canvasWidth: 400,
        canvasHeight: 400,
        links: [],
        nodes: []
      }
    },
    methods: {
      getDiagonal (d) {
        return `M${d.y},${d.x}C${d.parent.y + 100},${d.x} ${d.parent.y + 100},${d.parent.x} ${d.parent.y},${d.parent.x}`
      },
      getTranslate (d) {
        return `translate(${d.y},${d.x})`
      },
      getText (d) {
        return d.data.title
      },
      getTextX (d) {
        return d.children ? -8 : 8
      },
      getTextStyle (d) {
        return {
          textAnchor: d.children ? 'end' : 'start'
        }
      }
    }
  }
</script>

<style lang="scss">
  .link {
    fill: none;
    stroke: #555;
    stroke-opacity: 0.4;
    stroke-width: 1.5px;
  }
  .node circle {
    fill: #999;
  }
  .node text {
    font: 10px sans-serif;
  }
  .node--internal circle {
    fill: #555;
  }
  .node--internal text {
    text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
  }
</style>
