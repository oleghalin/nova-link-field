Nova.booting((Vue, router, store) => {
    Vue.component('index-nova-link-field', require('./components/IndexField'))
    Vue.component('detail-nova-link-field', require('./components/DetailField'))
    Vue.component('form-nova-link-field', require('./components/FormField'))
    Vue.component('icon-external-link', require('./components/Icons/ExternalLink'))
})
