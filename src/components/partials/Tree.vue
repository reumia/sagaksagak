<template>
  <div class="tree">
    <svg :width="viewerWidth" :height="viewerHeight">
      <g :transform="`translate(${viewerWidth / 2}, ${viewerHeight / 4})`">
        <path v-for="line in lines" class="link" :d="getDiagonal(line)" :key="line.id"></path>
        <g v-for="node in nodes" class="node" :transform="getTransform(node)" :key="node.id">
          <image :width="rectWidth" :height="rectHeight" :transform="`translate(${rectWidth / -2}, ${rectHeight / -2})`" :xlink:href="getBase64(node)"></image>
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
        nodeWidth: 140,
        nodeHeight: 180,
        rectWidth: 120,
        rectHeight: 120,
        nodes: [],
        lines: []
      }
    },
    methods: {
      // TODO : ZOOM 데이터 가져오기
      // https://github.com/d3/d3-zoom
      getTree () {
        const tree = d3
          .tree()
          .size([this.viewerWidth - this.viewerSpacing, this.viewerHeight - this.viewerSpacing])
          .nodeSize([this.nodeWidth, this.nodeHeight])

        this.nodes = this.tree.descendants()
        this.lines = this.tree.descendants().slice(1)

        console.log(this.nodes)

        tree(this.tree)
      },
      renderTree () {
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
      getTransform (d) {
        return `translate(${d.x},${d.y})`
      },
      getBase64 (d) {
        // TODO : Get Base64 with imageUrl
        // https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
        return 'data:image/png;base64,R0lGODlhLAAsANUAAAAAAP////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/Ly8vHx8fDw8O/v7+7u\n' +
          '7u3t7ezs7Ovr6+rq6unp6ejo6Ofn5+bm5uXl5eTk5OPj4+Li4uHh4eDg4N/f397e3t3d3dzc3Nvb\n' +
          '29ra2tnZ2djY2NfX19bW1tXV1dTU1NPT09LS0v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' +
          'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACsALAAAAAAsACwAAAb/wIBw\n' +
          'SCwOFBXO6JRKnUacimJQrFqvQsUGpep6v13URoEtFxciL6jCSBAEAkKCUQF5RQsz9uDpliYGegYT\n' +
          'JV0eB3pFDFwmEAKJQwIQJiooDZABFF0bBJhFBBtdFIkXKikQnlcQKSoYZhWVealXClwVWA2msrNX\n' +
          'C6yXVQdcqLxlEJWIRX0bxXqhHmcqJwXNZgSUuwFpxNVlDyoiQwoqJY/dRBQW5gEChWQBoRLnkRld\n' +
          'FkQSKswDrIHzAhq8jBpiwNQRFSDmsQvVxVURO0hU3DongIOXC1ZgJVHBgKJFe1cYqFCiIkE3AR28\n' +
          'TLSSQMUSFZ2aDejTZaUVAtJYrZs14INA7zMCTOnEMiEClp5eJugJ6gTmFVgqjFYhYKeLPD04n5S8\n' +
          '8lHFg08hvEjV0xIKxytITQELQCBsF256REaRiIVqlxR5CqTp8hWTxnEJ6+5N0WCwg1QQ+anwd6XA\n' +
          'CDCEUxVMQSWeGQMkvEROlY9ZgHHlzBwopGItpnYq3mlTAfcKAhKHZ30LN2SBNGoKP1HqSGRZ7iLP\n' +
          'gg37LeQYimRFcuH97as0FlgoslWrRbdMqVPnVrVKpElfzFmgRGFqwMiRJ0mULKXi40cCYywGJJA+\n' +
          'VIzBXoRs3MCRQ6cqON7TbcAKGASmMMZvRySxRBNPRDEFJkEAADs=\n'
      }
    }
  }
</script>

<style lang="scss">
  @import 'init';

  svg {
    position: fixed;
    top: $header-height;
    bottom: 0;
    left: 0;
    right: 0;
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

  .link {
    fill: none;
    stroke: #555;
    stroke-opacity: 0.4;
    stroke-width: 1.5px;
  }

  form {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  label {
    display: block;
  }
</style>
