({
	name: "Dancing Lights",
	id: "yyebo46gis2iuzz7",
	spellType: "range"
});
// @endmeta

new Dialog({
	title: "Dancing Lights", content: `
        <div class="form-group">
            <label>Dancing Light Count: <span id="dancing-light-count">4</span></label>
            <input type="range" id="dancing-light-range" value="4" min="1" max="4" oninput="$('#dancing-light-count').html(this.value)"/>
        </div>
    `, buttons: {
		one: {
			label: "Done", callback: (html) => {
				dancingLightCount = parseInt(html.find("#dancing-light-range").val().toString());
				createDancingLight();
			}
		}
	}, default: "one"
}).render(true);
