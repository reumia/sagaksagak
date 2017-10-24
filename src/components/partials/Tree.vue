<template>
  <div class="tree">
    <svg :width="viewerWidth" :height="viewerHeight" ref="svg">
      <g :transform="`translate(${this.viewerWidth / 2}, ${this.viewerHeight / 4})scale(${zoom.scale})`">
        <path v-for="line in lines" class="link" :d="getDiagonal(line)" :key="line.id"></path>
        <g v-for="node in nodes" class="node" :transform="getNodeTransform(node)" :key="node.id" @click="handleClick(node)">
          <rect class="rect-background" r="10" :width="rectWidth" :height="rectHeight" :transform="`translate(${rectWidth / -2}, ${rectHeight / -2})`"></rect>
          <image :width="rectWidth" :height="rectHeight" :transform="`translate(${rectWidth / -2}, ${rectHeight / -2})`" :href="node.data.imageUrl"></image>
          <rect class="rect-mask" r="10" :width="rectWidth" :height="rectHeight" :transform="`translate(${rectWidth / -2}, ${rectHeight / -2})`"></rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  import * as d3 from 'd3'
  import { mapState } from 'vuex'

  export default {
    name: 'tree',
    created () {
      this.$store.watch(state => {
        return state.tree
      }, this.renderTree)
    },
    computed: mapState([ 'tree' ]),
    data () {
      return {
        viewerWidth: window.innerWidth,
        viewerHeight: window.innerHeight - 64,
        viewerSpacing: 80,
        nodeWidth: 130,
        nodeHeight: 160,
        rectWidth: 120,
        rectHeight: 120,
        nodes: [],
        lines: [],
        zoom: {
          scale: 1
        }
      }
    },
    methods: {
      getTree () {
        const tree = d3
          .tree()
          .size([this.viewerWidth - this.viewerSpacing, this.viewerHeight - this.viewerSpacing])
          .nodeSize([this.nodeWidth, this.nodeHeight])

        this.nodes = this.tree.descendants()
        this.lines = this.tree.descendants().slice(1)

        tree(this.tree)
      },
      renderTree () {
        const zoom = d3.zoom().scaleExtent([-10, 10]).on('zoom', this.onZoom)
        const selection = d3.select(this.$refs.svg)

        selection.call(zoom)

        this.getTree()
      },
      getDiagonal (d) {
        const rectBetween = (this.nodeHeight - this.rectHeight)

        return `
          M${d.x},${d.y - this.rectHeight / 2}
          L${d.x},${d.parent.y + (this.rectHeight / 2) + (rectBetween / 2)}
          L${d.parent.x},${d.parent.y + (this.rectHeight / 2) + (rectBetween / 2)}
          L${d.parent.x},${d.parent.y + this.rectHeight / 2}
        `
      },
      getNodeTransform (d) {
        return `translate(${d.x},${d.y})`
      },
      handleClick (d) {
        this.$router.push({ name: 'Cut', params: { 'id': d.data.id } })
      },
      onZoom () {
        // TODO : ZOOM 데이터 가져오기
        // https://github.com/d3/d3-zoom
        // https://bl.ocks.org/mbostock/6123708
        console.log('zoomed', d3.event)
        this.zoom.scale = d3.event.transform.k
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  .tree {
    svg {
      position: fixed;
      top: $header-height;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .node {
      cursor: pointer;
    }

    .node .rect-background {
      fill: #fff;
      stroke-width: 0;
    }

    .node .rect-mask {
      fill: transparent;
      stroke: $color-text;
      stroke-width: 1px;
      stroke-opacity: .3;
    }

    .node text {
      font: 10px sans-serif;
    }

    .node--internal text {
      text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
    }

    .link {
      fill: none;
      stroke: #e3e3e3;
      stroke-width: 1px;
    }
  }
</style>
