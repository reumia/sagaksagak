<template>
  <div class="tree">
    <!-- CANVAS -->
    <canvas :width="canvasWidth" :height="canvasHeight" ref="canvas">
    </canvas>
    <!-- Dummy Images -->
    <div class="dummy-images">
      <img v-for="node in nodes" :src="node.data.imageUrl" :key="node.id" :id="`image-${node.id}`">
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
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
        canvasWidth: 600,
        canvasHeight: 600,
        nodeWidth: 100,
        nodeHeight: 100,
        fontSize: 10,
        nodes: []
      }
    },
    methods: {
      getTree () {
        const tree = d3.tree()
          .size([this.canvasWidth, this.canvasHeight])
          .nodeSize([this.nodeWidth, this.nodeHeight])

        this.nodes = this.tree.descendants()

        tree(this.tree)
      },
      renderTree () {
        if (typeof this.$refs.canvas === 'undefined') return

        this.getTree()

        const canvas = d3.select(this.$refs.canvas)
        const context = canvas.node().getContext('2d')

        context.font = `${this.fontSize}px sans-serif`

        _.each(this.nodes, (node, key) => {
          this.renderRect(context, node)
          // TODO : Image 그리기
          //  this.renderImage(context, node)
          this.renderTitle(context, node)
        })
      },
      renderRect (context, d) {
        context.fillStyle = 'black'
        context.fillRect((d.x + (this.canvasWidth - this.nodeWidth) / 2), d.y, this.nodeWidth, this.nodeHeight)
      },
      renderImage (context, d) {
        const element = this.$el.childNodes[2].children[0]
        console.log(element)
        const image = element

        context.drawImage(image, d.x + (this.canvasWidth) / 2, d.y, 80, 80)
      },
      renderTitle (context, d) {
        const title = d.data.title
        const text = context.measureText(title)

        context.fillStyle = 'white'
        context.fillText(title, d.x + (this.canvasWidth - text.width) / 2, d.y + this.fontSize, this.nodeWidth)
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  canvas {
    display: block;
    margin: 0 auto;
  }
</style>
