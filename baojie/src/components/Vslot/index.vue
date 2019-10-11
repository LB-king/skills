<template lang='pug'>
  .vslot
    h2 v-slot
    foo
      //- h6(slot='body') 父组件的slot直接挂在标签上
      //- div(slot='foot',slot-scope='prop') {{prop.tesmsg}}
      //- v-slot在vue2.6之后推行，3.0会抛弃之前的用法,父组件的用法如下所示
      template(#body)
        div body新内容
      template(#foot='prop') {{prop.tesmsg}}
    h2 dayjs
    div {{timer1}}
    div.fz {{timer2}}
    div {{timer3}}
    div {{timer4}}
    div.fz {{timer5}}
    div {{timer6}}
    div {{timer7}}
    div daysInMonth---{{timer8}}
    div.red .week---{{timer9}}
</template>

<script>
import foo from './foo'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)
export default {
  name: 'Vslot',
  data() {
    return {
      timer1: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      timer2: dayjs().format('YYYY年MM月DD日 HH:mm:ss'),
      timer3: dayjs(1570705887906).format('YYYY年MM月DD日 HH:mm:ss'),
      timer4: dayjs('2019-12-12 1:2:3').format('YYYY年MM月DD日 HH:mm:ss'),
      timer5: dayjs().year(),
      timer6: dayjs().month() + 1,
      timer7: dayjs('2019-10-10').diff(dayjs('2018-10-1'), 'day'),
      timer8: dayjs().daysInMonth(),
      timer9: dayjs('2019/10/1').week()
    }
  },
  computed: {},
  components: {
    foo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin test {
  font-size: 20px;
  color: red;
}
.fz {
  @include test;
}
.vslot {
  text-align: left;
  color: $baseColor;
}
</style>
