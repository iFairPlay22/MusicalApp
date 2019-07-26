<template>
    <v-layout
        align-center
        justify-center
    >
        <div id="boo">
            <!-- https://github.com/0xfe/vexflow/wiki/The-VexFlow-Tutorial -->
        </div>
    </v-layout>    
</template>

<script>
    import Vex from "vexflow";

    export default {
        name: "MusicSheet",
        mounted () {
            const VF = Vex.Flow;

            const div = document.getElementById("boo")
            
            const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

            const context = renderer.getContext();
            context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

            const stave = new VF.Stave(10, 40, 400);
            stave.addClef("treble").addTimeSignature("4/4");
            stave.setContext(context).draw();
            
            const notes = [
                new VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                new VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),
                new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
            ];

            const voice = new VF.Voice({num_beats: 4,  beat_value: 4});
            voice.addTickables(notes);

            const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

            voice.draw(context, stave);
        }
    }
</script>

<style>

</style>
