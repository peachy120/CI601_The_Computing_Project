-- tTier --
INSERT INTO tTier (tier, bookingDiscount, onlineShopDiscount, eventTicketDiscount, minimunSpendRequire)
VALUES
    ("PLATINUM", "15% OFF", "15% OFF", "30% OFF", "5000"),
    ("DIAMOND", "10% OFF", "10% OFF", "15% OFF", "2500"),
    ("GOLD", "5% OFF", "5% OFF", "10% OFF", "1000"),
    ("SILVER", "0% OFF", "0% OFF", "5% OFF", "250"),
    ("BRONZE", "0% OFF", "0% OFF", "0% OFF", "0");

-- tMember --
INSERT INTO tMember (memberID, title, firstname, lastname, dateOfBirth, email, tel, tier, username, password, joinedDate)
VALUES
    (memberID, "title", "firstname", "lastname", "dateOfBirth", "email", "tel", "tier", "username", "password", "joinedDate"),
    (memberID, "title", "firstname", "lastname", "dateOfBirth", "email", "tel", "tier", "username", "password", "joinedDate"),

-- tFloor --
INSERT INTO tFloor (floor, for, capacity, accessibility, price)
VALUES
    (0, "DOG", 64, "WHEEL-ELDERLY-FRIENDLY", 400),
    (1, "DOG", 56, "WHEEL-ELDERLY-FRIENDLY", 350),
    (2, "DOG", 84, "WHEEL-ELDERLY-FRIENDLY", 525),
    (3, "CAT", 64, "WHEEL-ELDERLY-FRIENDLY", 400),
    (4, "CAT", 56, "WHEEL-ELDERLY-FRIENDLY", 350),
    (5, "CAT", 84, "WHEEL-ELDERLY-FRIENDLY", 525);

-- tRoom --
INSERT INTO tRoom (roomID, floor, capacity, accessibility, price)
VALUES
    (1, 1, 16, "WHEEL-ELDERLY-FRIENDLY", 88),
    (2, 2, 20, "WHEEL-ELDERLY-FRIENDLY", 110),
    (3, 2, 12, "WHEEL-ELDERLY-FRIENDLY", 66),
    (4, 3, 20, "WHEEL-ELDERLY-FRIENDLY", 110),
    (5, 4, 28, "WHEEL-ELDERLY-FRIENDLY", 154),
    (6, 4, 10, "ELDERLY-FRIENDLY", 55);

-- tTable --
INSERT INTO tTable (tableID, roomID, floor, type, capacity, accessibility)
VALUES
    (1, 1, 1, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (2, 1, 1, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (3, 1, 1, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (4, 1, 1, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (5, 1, 1, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (6, NULL, 1, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (7, NULL, 1, "FLOOR", 4, "NONE"),
    (8, NULL, 1, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (9, NULL, 1, "FLOOR", 4, "NONE"),
    (10, NULL, 1, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (11, NULL, 1, "FLOOR", 4, "NONE"),
    (12, NULL, 1, "FLOOR", 4, "NONE"),
    (13, NULL, 1, "FLOOR", 4, "NONE"),
    (14, NULL, 1, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (15, NULL, 1, "FLOOR", 4, "NONE"),
    (16, NULL, 1, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (17, NULL, 1, "FLOOR", 2, "NONE"),
    (18, NULL, 2, "FLOOR", 4, "NONE"),
    (19, NULL, 2, "FLOOR", 4, "NONE"),
    (20, NULL, 2, "FLOOR", 4, "NONE"),
    (21, NULL, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (22, NULL, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (23, NULL, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (24, NULL, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (25, NULL, 2, "FLOOR", 4, "NONE"),
    (26, NULL, 2, "FLOOR", 4, "NONE"),
    (27, NULL, 2, "FLOOR", 4, "NONE"),
    (28, NULL, 2, "FLOOR", 2, "NONE"),
    (29, NULL, 2, "FLOOR", 2, "NONE"),
    (30, NULL, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (31, NULL, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (32, NULL, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (33, 3, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (34, 3, 2, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (35, 3, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (36, 3, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (37, 2, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (38, 2, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (39, 2, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (40, 2, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (41, 2, 2, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (42, 4, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (43, 4, 3, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (44, 4, 3, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (45, 4, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (46, 4, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (47, 4, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (48, NULL, 3, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (49, NULL, 3, "FLOOR", 4, "NONE"),
    (50, NULL, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (51, NULL, 3, "FLOOR", 4, "NONE"),
    (52, NULL, 3, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (53, NULL, 3, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (54, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (55, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (56, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (57, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (58, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (59, NULL, 3, "HIGH-TOP", 1, "NONE"),
    (60, NULL, 3, "FLOOR", 2, "NONE"),
    (61, NULL, 3, "FLOOR", 2, "NONE"),
    (62, NULL, 3, "FLOOR", 2, "NONE"),
    (63, NULL, 3, "FLOOR", 2, "NONE"),
    (64, NULL, 3, "FLOOR", 2, "NONE"),
    (65, NULL, 4, "FLOOR", 4, "NONE"),
    (66, NULL, 4, "FLOOR", 4, "NONE"),
    (67, NULL, 4, "FLOOR", 4, "NONE"),
    (68, NULL, 4, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (69, NULL, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (70, NULL, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (71, NULL, 4, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (72, NULL, 4, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (73, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (74, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (75, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (76, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (77, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (78, NULL, 4, "HIGH-TOP", 1, "NONE"),
    (79, NULL, 4, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (80, NULL, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (81, NULL, 4, "FLOOR", 4, "NONE"),
    (82, NULL, 4, "FLOOR", 2, "NONE"),
    (83, NULL, 4, "FLOOR", 4, "NONE"),
    (84, 6, 4, "TABLE", 2, "ELDERLY-FRIENDLY"),
    (85, 6, 4, "TABLE", 4, "ELDERLY-FRIENDLY"),
    (86, 6, 4, "TABLE", 4, "ELDERLY-FRIENDLY"),
    (87, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (88, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (89, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (90, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (91, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (92, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (93, 5, 4, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (94, NULL, 0, "FLOOR", 2, "NONE"),
    (95, NULL, 0, "FLOOR", 4, "NONE"),
    (96, NULL, 0, "FLOOR", 4, "NONE"),
    (97, NULL, 0, "FLOOR", 2, "NONE"),
    (98, NULL, 0, "FLOOR", 4, "NONE"),
    (99, NULL, 0, "FLOOR", 4, "NONE"),
    (100, NULL, 0, "FLOOR", 2, "NONE"),
    (101, NULL, 0, "FLOOR", 2, "NONE"),
    (102, NULL, 0, "FLOOR", 4, "NONE"),
    (103, NULL, 0, "FLOOR", 4, "NONE"),
    (104, NULL, 0, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (105, NULL, 0, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (106, NULL, 0, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (107, NULL, 0, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (108, NULL, 0, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (109, NULL, 0, "TABLE", 4, "WHEEL-ELDERLY-FRIENDLY"),
    (110, NULL, 0, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (111, NULL, 0, "TABLE", 2, "WHEEL-ELDERLY-FRIENDLY"),
    (112, NULL, 0, "FLOOR", 2, "NONE"),
    (113, NULL, 0, "FLOOR", 4, "NONE"),
    (114, NULL, 0, "FLOOR", 2, "NONE");

-- tBooking --
INSERT INTO tBooking ()
VALUES
    (),

-- tProduct --
INSERT INTO tProduct ()
VALUES
    (),

-- tWishlist --
INSERT INTO tWishlist ()
VALUES
    (),

-- tProductWishlist --
INSERT INTO tProductWishlist ()
VALUES
    (),

-- tShoppingCart --
INSERT INTO tShoppingCart ()
VALUES
    (),

-- tProductShoppingCart --
INSERT INTO tProductShoppingCart ()
VALUES
    (),

-- tOnlineOrder --
INSERT INTO tOnlineOrder ()
VALUES
    (),

-- tEventType --
INSERT INTO tEventType (eventType, floor, capacity, ageLimit, price)
VALUES
    ("CAT-BIRTHDAY", floor, capacity, ageLimit, price),
    ("DOG-BIRTHDAY", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),
    ("eventType", floor, capacity, ageLimit, price),

-- tEvent --
INSERT INTO tEvent ()
VALUES
    (),

-- tTicket --
INSERT INTO tTicket ()
VALUES
    (),

-- tTicketBasket --
INSERT INTO tTicketBasket ()
VALUES
    (),

-- tTicketOrder --
INSERT INTO tTicketOrder ()
VALUES
    (),

-- tDonation --
INSERT INTO tDonation ()
VALUES
    (),

-- tPayment --
INSERT INTO tPayment ()
VALUES
    (),

-- tEnquiry --
INSERT INTO tEnquiry ()
VALUES
    (),

-- tFeedback --
INSERT INTO tFeedback ()
VALUES
    (),

-- tComment --
INSERT INTO tComment ()
VALUES
    (),

-- tWork --
INSERT INTO tWork (workCode, name, access, description)
VALUES
    ("STOC", "STOCKER", "PRODUCT, WORK-RECORD", "Keep track on products sells. Order low-stock product to prevent product sold out fully."),
    ("RECE", "RECEPTIONIST", "BOOKING, CONTACT, PAYMENT, EVENT, WORK-RECORD ", "Manages Booking and Events. Reply Enquiries and check on payments."),
    ("SECU", "SECURITY", "CCTV, WORK-RECORD", "Keep an eye on CCTVs in each pet area to keep all pets and human safe."),
    ("DRIV", "DRIVER", "ONLINE-ORDER, WORK-RECORD", "Deliver order to customers' door. Only able to access orderID and delivery address."),
    ("CLEA", "CLEANER", "PET-AREA, WORK-RECORD", "Keep pet area always clean"),
    ("PACK", "ORDER PACKER", "ONLINE-ORDER, WORK-RECORD", "Pack online orders."),
    ("CREA", "CONTENT-CREATOR", "BLOG, CONTACT-FEEDBACK, WORK-RECORD", "Check comments on blogs from customers. Think of new and intresting ideas"),
    ("CHEF", "CHEF", "MENU, WORK-RECORD", "Make meals for humans and pets. Think of new / seasonal menu ideas."),
    ("WAIT", "WAITER", "PET-AREA, PET, DIARY, WORK-RECORD", "Serve customers within the pet area. Keep eye on pets behaviour. Make sure customers and pets are safe within visible area."),
    ("CARE", "PET-CARER", "PET, PET-DIARY, SHOWER, CHECK-UP, WORK-RECORD", "Monitor pets' daily. Follow up on pets' shower and check up schedule. Need to stay in shop at night sometimes.");

-- tPosition --
INSERT INTO tPosition (positionCode, name, access)
VALUES
    ("MAN", "MANAGER", "access"),
    ("SEN", "SENIOR-STAFF", "access"),
    ("PLA", "PLAIN-STAFF", "access"),
    ("JUN", "JUNIOR-STAFF", "access"),
    ("INT", "INTER", "access"),

-- tStaff --
INSERT INTO tStaff ()
VALUES
    (),

INSERT INTO tWorkRecord ()
VALUES
    (),

-- tPet --
INSERT INTO tPet ()
VALUES
    (),

-- tDiary --
INSERT INTO tDiary ()
VALUES
    (),

-- tCheckUp --
INSERT INTO tCheckUp ()
VALUES
    (),

-- tShower --
INSERT INTO tShower ()
VALUES
    (),

INSERT INTO t ()
VALUES
    (),

