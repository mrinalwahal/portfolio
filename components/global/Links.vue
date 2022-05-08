<template>
  <div>

<!--     <span v-if="disclaimer" class="text-gray-600 dark:text-gray-500"> 
      You can click the links to visit them. 
      </span>
 -->
    <div v-for="(item, i) in items" :key="i" class="mt-3 flex">
      <span :class="`link-${type}`" class="mt-px mr-3 flex-shrink-0">
              <div v-if="icon" v-html="$feathericons[icon].toSvg()" class="h-6 w-6"></div>
        <component v-else :is="iconName" class="h-6 w-6" />
      </span>
        <a v-if="anchor" style="text-decoration: none; color: inherit;" :href="item.value" target="_blank"> 
          {{ item.key }}
<!--       <IconExternalLink :class="`link-${type} w-6 h-6 ml-2 mt-px`" /> -->
</a>
<nuxt-link v-else style="text-decoration: none;" :to="item.value"> 
  {{ item.key }} 
</nuxt-link>

          </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: null
    },
    anchor: {
      type: Boolean,
      default: false
    },
    disclaimer: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(value)
      }
    }
  },
  computed: {
    iconName () {
      return this.icon || ({
        primary: 'IconBadgeCheck',
        info: 'IconInformationCircle',
        success: 'IconCheckCircle',
        warning: 'IconExclamationCircle',
        danger: 'IconXCircle'
      })[this.type]
    }
  }
}
</script>

<style>
/* Primary */
.link-primary {
  @apply text-primary-500;
}
/* Info */
.link-info {
  @apply text-blue-500;
}
/* Success */
.link-success {
  @apply text-green-500;
}
/* Warning */
.link-warning {
  @apply text-orange-500;
}
/* Danger */
.link-danger {
  @apply text-red-500;
}

</style>
