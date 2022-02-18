import ParkingLot from "./ParkingLot";

test("should create a parking lot", function () {
	const parkingLot = new ParkingLot("airport", 500);
	expect(parkingLot.getSlots()).toBe(500);
});

test("should park a car", function () {
	const parkingLot = new ParkingLot("airport", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	expect(parkingLot.getSlots()).toBe(499);
});

test("should park the car on the beach for 2 hours and when leaving the value must be 10 reais, 5 reais per hour", function () {
	const parkingLot = new ParkingLot("beach", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-01T12:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(10);
});

test("should park the car at the mall for 7 hours and when leaving the value must be 22 reais, 10 reais for the first 3 hours and then 3 reais per hour", function () {
	const parkingLot = new ParkingLot("shopping", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-01T17:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(22);
});

test("should park the car at the airport for 3 days and when leaving the value must be 150 reais, 50 reais per day", function () {
	const parkingLot = new ParkingLot("airport", 500);
	parkingLot.checkin("AAA-1111", new Date("2021-10-01T10:00"));
	parkingLot.checkout("AAA-1111", new Date("2021-10-04T10:00"));
	const ticket = parkingLot.getTicket("AAA-1111");
	expect(ticket.price).toBe(150);
});