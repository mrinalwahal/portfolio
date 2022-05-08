<template>
  <div>
    <div>
      <Badge
      v-for="(item, i) in items" :key="i"
      class="mt-2 mr-3 flex-shrink-0">
          {{ item }}
      </Badge>
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
