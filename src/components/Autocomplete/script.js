export default {
	props: {
		value: null,
		options: {
			type: Array,
			required: true,
		},
	},
	computed: {
		matches() {
			return this.options.filter((option) => {
				let optionText = option.name.toUpperCase();
				return optionText.match(this.searchText.toUpperCase());
			});
		},
	},
	methods: {
		setOpen(isOpen) {
			this.open = isOpen;
		},
		searchChanged() {
			if (!this.open) {
				this.open = true;
			}
			console.log(this.searchText);
			this.highlightIndex = 0;
		},
		suggestionSelected(suggestion) {
			this.open = false;
			console.log(suggestion);
			console.log(suggestion.name);
			this.searchText = suggestion.name;
			this.$emit('input', suggestion);
		},
		mounted() {
			this.updateComponentWithValue(this.value);
		},
		up() {
			if (this.open) {
				if (this.highlightIndex > 0) {
					this.highlightIndex--;
				}
			} else {
				this.setOpen(true);
			}
		},

		down() {
			console.log(this.highlightIndex);
			if (this.open) {
				if (this.highlightIndex < this.matches.length - 1) {
					this.highlightIndex++;
				}
			} else {
				this.setOpen(true);
			}
		},
	},
	// watch: {
	// 	value: function(newValue) {
	// 		this.updateComponentWithValue(newValue);
	// 	},
	// },
	data() {
		return {
			searchText: '',
			selectedOption: null,
			highlightIndex: 0,
			open: false,
		};
	},
};
