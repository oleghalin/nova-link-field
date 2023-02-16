Nova.booting((Vue) => {
    Vue.component('index-nova-link-field', require('./components/IndexField').default)
    Vue.component('detail-nova-link-field', require('./components/DetailField').default)
    Vue.component('form-nova-link-field', require('./components/FormField').default)
    Vue.component('icon-external-link', require('./components/Icons/ExternalLink').default)
})
