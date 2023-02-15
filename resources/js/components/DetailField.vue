<template>
    <div class="flex border-b border-40">
        <div class="md:w-1/4 md:py-3">
            <slot>
                <h4 class="font-normal text-80">
                    {{ field.name }}
                </h4>
            </slot>
        </div>
        <div class="md:w-3/4 md:py-3 break-all lg:break-words">
            <slot name="value">
                <p v-if="field.value" class="text-90">
                    <a :target="field.blank ? field.blank : '_self'" :class="field.classes ? field.classes : defaultClasses"
                       :href="field.href" @click.stop>
                        {{ field.text ? field.text : field.value }}
                    </a>
                </p>
                <p v-else>&mdash;</p>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],

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
