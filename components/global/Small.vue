<template>
    <div>
        <span class="text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center">
            {{text}}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: null,
                required: true,
            },
        }
    }
</script>