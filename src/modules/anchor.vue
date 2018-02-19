<template>
    <div>
        <label>
            Якорь
            <input ref="url" type="text" style="width: 40%" v-model="url">
        </label>

        <button type="button" @click="insertAnchor">Вставить</button>
    </div>
</template>

<script>
    import bus from '../../src/bus.js';

    export default {
        title: "hash",
        icon: '<svg width="1792" height="1792" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><g id="hash"><path style="fill:#444444;" d="M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22 l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',

        props: {
            uid: null
        },

        data() {
            return {
                url: "",
            }
        },
        methods: {
            insertAnchor() {
                this.$emit("exec", "insertHTML", `<a name='${this.url}'>##${this.url}##</a>`);
                this.$parent.closeDashboard();
                this.url = "";
            }
        },

        created() {
            bus.on(this.uid + "_show_dashboard_link", () => {
                this.$nextTick(() => {
                    this.$refs.url.focus();
                });
            });

        }
    };
</script>

