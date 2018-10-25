<template>
  <div>
    <SettingsRightbasic v-if="rightShow==='RightBasicInfo'"></SettingsRightbasic>
    <SettingsRightIcon v-if="rightShow==='RightIcon'"></SettingsRightIcon>
    <SettingsRightSafe @updatePwd="$emit('changeright','RightPassword')" @bindPhone="$emit('changeright','RightPhone')" @weixin="$emit('SettingsWeixin',true)" v-if="rightShow==='RightSafe'"></SettingsRightSafe>
    <SettingsRightPassword v-if="rightShow==='RightPassword'"></SettingsRightPassword>
    <SettingsRightPhone v-if="rightShow==='RightPhone'"></SettingsRightPhone>
    <SettingsRightAddress v-if="rightShow==='RightAddress'"></SettingsRightAddress>
  </div>

</template>
<script>
  import SettingsRightbasic from './SettingsRightBasic'
  import SettingsRightIcon from './SettingsRightIcon'
  import SettingsRightSafe from './SettingsRightSafe'
  import SettingsRightPassword from './SettingsRightPassword'
  import SettingsRightPhone from './SettingsRightPhone'
  import SettingsRightAddress from './SettingsRightAddress'

  import axios from 'axios'
  export default {
  name: 'SettingsRight',
  props: ['nowShow'],
    inject: ['reload'],
  data () {
    return {
      rightShow: this.nowShow,
    }
  },
    components:{
      SettingsRightbasic,
      SettingsRightIcon,
      SettingsRightSafe,
      SettingsRightPassword,
      SettingsRightPhone,
      SettingsRightAddress
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
