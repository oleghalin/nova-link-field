<template>
    <div :class="`text-${field.textAlign}`">
        <a v-if="hasValue" :target="field.blank ? field.blank : '_self'" :class="field.classes ? field.classes : defaultClasses"
           :href="field.href">
            <span v-if="field.icon"><icon :type="field.icon" height="24" view-box="0 0 24 24" width="24"/></span>
            <span v-else>{{ field.text ? field.text : field.value }}</span>
        </a>
        <p v-else>&mdash;</p>
    </div>
</template>

<script>
    export default {
        props: ['resourceName', 'field'],

        data: () => ({
            defaultClasses: [
                'no-underline',
                'dim',
                'text-primary',
                'font-bold'
            ]
        }),

        computed: {
            hasValue() {
                return this.field.value !== null
            },
        },
    }
</script>
