<template>
  <div class="tree">
    <svg :width="viewerWidth" :height="viewerHeight" ref="svg" @click="resetZoom">
      <g :transform="`translate(${zoom.translateX}, ${zoom.translateY})scale(${zoom.scale})`">
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

  const viewerW = window.innerWidth
  const viewerH = window.innerHeight - 64
  const viewerX = viewerW / 2
  const viewerY = viewerH / 4

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
        viewerWidth: viewerW,
        viewerHeight: viewerH,
        viewerSpacing: 80,
        nodeWidth: 130,
        nodeHeight: 160,
        rectWidth: 120,
        rectHeight: 120,
        nodes: [],
        lines: [],
        zoom: {
          translateX: viewerX,
          translateY: viewerY,
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
        this.getTree()
        this.initZoom()
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
      initZoom () {
        // Drag & Zoom simple example - https://bl.ocks.org/mbostock/6123708
        // D3 Zoom initial transition state - https://github.com/d3/d3/issues/2521
        // Zoom to bound box - https://bl.ocks.org/mbostock/9656675
        const zoom = d3.zoom().scaleExtent([-3, 2]).on('zoom', this.onZoom)
        const selection = d3.select(this.$refs.svg)
        const initialZoomState = d3.zoomIdentity
          .translate(this.zoom.translateX, this.zoom.translateY)
          .scale(this.zoom.scale)

        selection
          .call(zoom)
          .call(zoom.transform, initialZoomState)
      },
      resetZoom () {
        this.zoom.translateX = viewerX
        this.zoom.translateY = viewerY
        this.zoom.scale = 1

        this.initZoom()
      },
      onZoom () {
        this.zoom.translateX = d3.event.transform.x
        this.zoom.translateY = d3.event.transform.y
        this.zoom.scale = d3.event.transform.k
      },
      handleClick (d) {
        this.$router.push({ name: 'Cut', params: { 'id': d.data.id } })
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
