<template>
    <div>
        <v-card-title>
            {{ questionnary[i].question }}
        </v-card-title>
        <v-checkbox
            v-model="checkbox"
            v-for="(proposition, i) in questionnary[i].propositions"
            :key="i"
        >
            {{ proposition }}
        </v-checkbox>
        <v-btn>
            Validate
        </v-btn>
    </div>

</template>

<script>
    export default {
        name: "NotesTheoryGame",
        data() {
            return {
                inGame: true,
                i: 0,
                questionnary: 
                [
                    {
                        question: "A quoi corresponds cette note ?",
                        img: "",
                        propositions: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        answers:
                        [
                            0,
                            1
                        ]
                    },
                    {
                        question: "A quoi corresponds cette note ?",
                        img: undefined,
                        answers: 
                        [
                            "Do",
                            "Ré",
                            "Mi",
                            "Fa"
                        ],
                        goodAnswers:
                        [
                            0
                        ]
                    }
                ]
            }
            
        }
    }
</script>
