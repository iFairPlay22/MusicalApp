<template>
    <v-footer
            app
            height="auto"
            color="rgb(219, 214, 214, 0.1)"
            class="white--text"
    >
        <v-layout column align-center>
            <v-layout
                    row
                    wrap
                    justify-center
                    align-center
            >
                <v-btn
                    v-for="({ text }, i) in links"
                    :key="i"
                    to="link.page"
                    class="white--text"
                    flat
                    round
                >
                    {{ text }}
                </v-btn>

                <v-bottom-sheet v-model="sheet">
                    <template #activator>
                        <v-btn
                            color="rgb(233, 51, 51, 0.8)"
                            dark
                            round
                        >
                            Share
                        </v-btn>
                    </template>
                    <v-list>
                        <v-subheader>Share in</v-subheader>
                        <v-list-tile
                            v-for="({ title, img }, i) in tiles"
                            :key="i"

                            @click="sheet = false"
                        >
                            <v-list-tile-avatar>
                                <v-avatar size="32px" tile>
                                    <img
                                            :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${ img }`"
                                            :alt="title"
                                    >
                                </v-avatar>
                            </v-list-tile-avatar>
                            <v-list-tile-title>
                                {{ title }}
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-bottom-sheet>
            </v-layout>

            <p class="py-2 text-xs-center">
                &copy;2018 — Bouquet
            </p>
        </v-layout>
    </v-footer>
</template>

<script>

    export default {
        name: 'MastFoot',
        data () {
            return {
                links: [
                    {
                        text: 'Home',
                        page: './'
                    },
                    {
                        text: 'About Us',
                        page: './pages/AboutUs'
                    },
                    {
                        text: 'Contact Us',
                        page: './pages/ContactUs'
                    }
                ],
                sheet: false,
                tiles: [
                    {
                        img: 'keep.png',
                        title: 'Keep'
                    },
                    {
                        img: 'inbox.png',
                        title: 'Inbox'
                    },
                    {
                        img: 'hangouts.png',
                        title: 'Hangouts'
                    },
                    {
                        img: 'messenger.png',
                        title: 'Messenger'
                    }
                ],
            }
        }
    }

</script>
