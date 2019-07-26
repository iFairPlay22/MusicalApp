<template>
    <v-layout
        align-center
        justify-center
    >
        <v-flex xs12 lg10>
            <v-simple-table>

                <thead>
                    <tr>
                        <th
                            v-for="i in columns"
                            :key="i"
                        > 
                            {{ i }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="line in lines"
                        :key="line"
                    >
                        <td
                            v-for="column in columns"
                            :key="column"
                        >
                            {{ printNotes(line, column) }}
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-flex>
    </v-layout>    
</template>

<script>
    export default {
        name: "MusicSheet",
        data() {
            return {
                lines: 5,
                columns: 10,
                notesCoords:
                [
                    {
                        note: "C",
                        line: 20,
                        column: 20
                    }
                ]
            }
        },
        computed: {
            printNotes(line, column) {
                for (let [note, noteLine, noteColumn] of this.notesCoords) {
                    if (line === noteLine && column === noteColumn) {
                        return note;
                    }
                }
                return undefined;
            }
        }
    }
</script>
