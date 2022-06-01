<template>
    <div>
        <section class="flex items-center justify-center">
        <div class="w-full rounded-lg shadow-xl p-4 border-inherit border-inherit-100 hover:border-inherit-400">
                <a :href="link" class="primary text-lg inline-flex items-center font-semibold tracking-wide">
                    <span class="no-underline" v-text="title" />
              <div v-html="$feathericons['chevron-right'].toSvg()"></div>
                </a>

        </div>
    </section>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: null,
                required: true,
            },
            subtitle: {
                type: String,
                default: null,
                required: false,
            },
            link: {
                type: String,
                default: null,
                required: false,
            },
            link_text: {
                type: String,
                default: null,
                required: false,
            },
        }
    }
</script>