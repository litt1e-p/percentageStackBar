<template>
  <div class="psb-wr">
    <div class="psb-main" v-if="validator()">
      <div class="psb-stk">
        <div class="psb-stk-v" :style="{height: Number(item['val']) + '%'}" v-for="(item, index) in dto" :key="index">
          <span class="vl">{{Number(item['desc']) + '%'}}</span>
        </div>
      </div>
      <div class="psb-su" v-if="title">{{title}}</div>
    </div>
    <div class="psb-mk" v-if="showRemark">
      <slot name="remark" v-bind:dto="value"></slot>
    </div>
  </div>
</template>

<script>

import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'percentageStackBar',
  props: {
    value: {
      type: Array,
      default: () => Array.prototype.constructor(),
      validator: function (v) {
        if (v.find(i => typeof i === 'string')) {
          return false
        } else if (undefined === v.find(i => /^\d{1,2}(\.\d{1,})?$/g.test(i))) {
          return false
        } else if (v.reduce((r, i) => r + Number(i), 0) > 100) {
          return false
        }
        return true
      }
    },
    title: {
      type: String,
      default: () => String.prototype.constructor()
    },
    showRemark: {
      type: Boolean,
      default: () => true
    },
    spaceForZero: {
      tyep: Number,
      default: () => 5
    }
  },
  data () {
    return {
      dto: Array.prototype.constructor()
    }
  },
  mounted () {
    this.value && this.build(this.value)
  },
  activated () {
    this.value && this.build(this.value)
  },
  methods: {
    build (d) {
      if (!Array.isArray(d)) {
        return
      }
      if (undefined === d.find(i => i === 0)) {
        this.dto = cloneDeep(d).map(i => {
          return {
            'desc': i,
            'val': i
          }
        })
        return
      }
      let zeroCnt = d.filter(i => i === 0).length
      if (zeroCnt === d.length) {
        this.dto = Array(d.length).fill({
          'desc': 0,
          'val': (100 / d.length).toFixed(3)
        })
      } else {
        this.dto = d.map(i => {
          return {
            'desc': i,
            'val': i === 0 ? this.spaceForZero : (((100 - zeroCnt * this.spaceForZero) * i) / 100).toFixed(3)
          }
        })
      }
    },
    validator () {
      if (undefined === this.value.find(i => /^\d{1,2}(\.\d{1,})?$/g.test(i))) {
        return false
      } else if (this.value.reduce((r, i) => r + Number(i), 0) > 100) {
        return false
      }
      return true
    }
  },
  watch: {
    value (v) {
      this.build(v)
    }
  }
}

</script>

<style lang="scss" scoped>
$color: rgba(207, 206, 240, 1);
.psb-wr {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .psb-main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .psb-stk {
      height: calc(100% - 30px);
      .psb-stk-v {
        width: 100%;
        min-width: 35px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        &::before {
          content: '';
          display: inline-block;
          height: 100%; 
          vertical-align: middle;
        }
        transition: scale .25s cubic-bezier(0.175, 0.885, 0.32, 1.155);
        @for $i from 1 through 7 {
          &:nth-child(#{$i}) {
            background-color: darken($color, ($i - 1) * 8%);
            &:hover {
              transform: scale(1.3);
            }
          }
        }
        .vl {
          vertical-align: middle;
          display: inline-block;
          font-size: 12px;
          font-weight: 450;
          padding: 0px 2px;
          pointer-events: none;
        }
      }
    }
    .psb-su {
      height: 25px;
      flex: 0 2 25px;
      line-height: 25px;
      width: 114px;
      font-size: 14px;
      color: #666;
    }
  }
  .psb-mk {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 4px;
    color: #999;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: -25px;
    padding: 5px;
    line-height: 18px;
    .mk-ti {
      text-align: left;
      display: inherit;
    }
    .mk-ch {
      text-align: left;
      font-size: 12px;
      @for $i from 2 through 7 {
        &:nth-child(#{$i}) {
          &::before {
            content: "";
            display: inline-block;
            width: 12px;
            height: 12px;
            background: darken($color, ($i - 2) * 8%);
            vertical-align: middle;
            margin: 0 3px 2px 0;
          }
        }
      }
    }
  }
}
</style>
