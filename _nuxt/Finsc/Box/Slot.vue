<template>
	<div
		class="rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between">
		<div class="flex justify-between">
			<ZiBtnWave :scale="0.5" pos="tl">
				<div class="mr-8 mb-6 text-2xl">Slot</div>
				<!-- <UButton
					icon="i-ri-close-line"
					size="md"
					color="white"
					class="relative ml-10"
					square
					:ui="{ rounded: 'rounded-full' }" /> -->
			</ZiBtnWave>
			<div class="text-sm h-full flex items-center pr-6">
				<div class="mb-6 text-base-200">Cy Cinema, 23 Azumaki St.</div>
			</div>
		</div>

		<div class="px-6 pb-6">
			<!-- Time slots -->
			<div class="flex justify-around mb-6">
				<button
					v-for="(slot, index) in timeSlots"
					:key="index"
					@click="selectSlot(slot)"
					:class="[
						'rounded-full px-3 py-1 border border-transparent',
						selectedSlot === slot ? 'bg-base-100' : 'border-base-neutral',
					]">
					{{ slot }}
				</button>
			</div>

			<!-- Seats grid -->
			<div class="grid grid-cols-8 gap-2 justify-items-center mb-6 p-2">
				<div
					v-for="(seat, index) in seats"
					:key="index"
					:class="[
						'w-5 h-5 rounded-md',
						seat.booked ? 'bg-black/50' : 'bg-base-200',
						seat.selected ? 'bg-purple-600' : '',
					]"
					@click="toggleSeatSelection(seat)"></div>
			</div>
		</div>
		<div class="px-6 pb-6">
			<!-- Seat info and booking button -->
			<div class="flex justify-between items-center text-xl">
				<div>
					<p class="text-gray-400">Available</p>
					<p class="text-4xl flex">
						<b>{{ availableSeats }}</b>
						<span class="ml-2 text-sm text-base-300">seats</span>
					</p>
				</div>
				<button
					class="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
					@click="bookSeats"></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			timeSlots: ['18:00', '21:25', '23:50'],
			selectedSlot: '18:00',
			seats: [
				{ id: 1, booked: false, selected: false },
				{ id: 2, booked: true, selected: false },
				{ id: 3, booked: false, selected: false },
				{ id: 4, booked: true, selected: false },
				{ id: 5, booked: false, selected: false },
				{ id: 6, booked: true, selected: false },
				{ id: 7, booked: false, selected: false },
				{ id: 8, booked: true, selected: false },
				{ id: 9, booked: false, selected: false },
				{ id: 10, booked: true, selected: false },
				{ id: 11, booked: false, selected: false },
				{ id: 12, booked: true, selected: false },
				{ id: 13, booked: false, selected: false },
				{ id: 14, booked: true, selected: false },
				{ id: 15, booked: false, selected: false },
				{ id: 16, booked: true, selected: false },
				{ id: 17, booked: false, selected: false },
				{ id: 18, booked: true, selected: false },
				{ id: 19, booked: false, selected: false },
				// Add more seats as needed
			],
		};
	},
	computed: {
		availableSeats() {
			return this.seats.filter((seat) => !seat.booked && !seat.selected).length;
		},
	},
	methods: {
		selectSlot(slot) {
			this.selectedSlot = slot;
		},
		toggleSeatSelection(seat) {
			if (!seat.booked) {
				seat.selected = !seat.selected;
			}
		},
		bookSeats() {
			alert('Seats booked successfully!');
		},
	},
};
</script>

<style scoped>
.container {
	background-color: #1a1a1a;
}

button:focus {
	outline: none;
}
</style>
