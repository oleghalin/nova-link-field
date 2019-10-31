<template>
    <div :class="`text-${field.textAlign}`">
        <a :target="field.blank ? field.blank : '_self'" :class="field.classes ? field.classes : defaultClasses"
           :href="field.href">
            <span v-if="field.icon"><icon :type="field.icon" height="24" view-box="0 0 24 24" width="24"/></span>
            <span v-else>{{ field.text ? field.text : field.value }}</span>
        </a>
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
        })
    }
</script>
