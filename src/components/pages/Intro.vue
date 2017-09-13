<template>
  <div>
    <Carousel></Carousel>
    <Card title="최근사각">
      <p>대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다.</p>
      <p>타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다.</p>
    </Card>
    <Card title="인기사각">
      <p>인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각인기사각</p>
    </Card>
  </div>
</template>

<script>
  import Card from '@/components/partials/Card'
  import Carousel from '@/components/partials/Carousel'

  export default {
    name: 'hello',
    components: { Card, Carousel },
    data () {
      return {
        title: '사각사각 소개'
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
@import 'init';

p ~ p {
  margin-top: $space-unit;
}
</style>
