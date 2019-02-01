<template>
    <a :target="field.blank ? field.blank : '_self'" :class="field.classes ? field.classes : defaultClasses"
       :href="field.href">
        {{ field.text ? field.text : field.value }}
    </a>
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
