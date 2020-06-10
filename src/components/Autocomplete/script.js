export default {
	props: {
		value: null,
		options: [],
	},
	computed: {
		matches() {
			return Object.entries(this.options).filter((option) => {
				let optionText = option[0].toUpperCase();
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
			this.highlightIndex = 0;
		},
		suggestionSelected(suggestion) {
			this.open = false;
			this.searchText = suggestion[0].name;
			this.$emit('input', suggestion[1]);
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
			if (this.open) {
				if (this.highlightIndex < this.matches.length - 1) {
					this.highlightIndex++;
				}
			} else {
				this.setOpen(true);
			}
		},
	},
	watch: {
		value: function(newValue) {
			this.updateComponentWithValue(newValue);
		},
	},
	data() {
		return {
			searchText: '',
			selectedOption: null,
			highlightIndex: 0,
			open: false,
		};
	},
};
