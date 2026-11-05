-- tTier --
CREATE TABLE tTier (
    tier                VARCHAR(255) PRIMARY KEY,
    bookingDiscount     ENUM("15% OFF", "10% OFF", "5% OFF", "0% OFF") DEFAULT "0% OFF" NOT NULL,
    onlineShopDiscount  ENUM("15% OFF", "10% OFF", "5% OFF", "0% OFF") DEFAULT "0% OFF" NOT NULL,
    eventTicketDiscount ENUM("30% OFF", "15% OFF", "10% OFF", "5% OFF", "0% OFF") DEFAULT "0% OFF" NOT NULL,
    minimunSpendRequire ENUM("5000", "2500", "1000", "250", "0") DEFAULT "0" NOT NULL
);

-- tMember --
CREATE TABLE tMember (
    memberID            INT PRIMARY KEY AUTO_INCREMENT,
    title         ENUM("MR", "MRS", "MISS", "MS", "OTHER") DEFAULT "OTHER" NOT NULL,
    tirstname     VARCHAR(255) NOT NULL,
    lastname      VARCHAR(255) NOT NULL,
    dateOfBirth   DATE NOT NULL,
    email         VARCHAR(255) NOT NULL,
    tel           VARCHAR(20) NOT NULL,
    tier          ENUM("PLATINUM", "DIAMOND", "GOLD", "SILVER", "BRONZE") DEFAULT "BRONZE" NOT NULL,
    username      VARCHAR(20) NOT NULL,
    password      VARCHAR(255) NOT NULL,
    joinedDate    DATE NOT NULL
);

-- Making memberTier as Foreign Key --
ALTER TABLE tMember
ADD CONSTRAINT FK_memberTier_tMember FOREIGN KEY (memberTier) REFERENCES tTier (tier);

-- tFloor --
CREATE TABLE tFloor (
    floor          INT PRIMARY KEY,
    for            ENUM("CAT", "DOG") DEFAULT "CAT" NOT NULL,
    capacity       INT NOT NULL,
    accessibility  ENUM("WHEEL-CHAIR-FRIENDLY", "ELDERLY-FRIENDLY", "WHEEL-ELDERLY-FRIENDLY", "NONE") DEFAULT "NONE" NOT NULL,
    price          DECIMAL(10,2) NOT NULL
);

-- tRoom --
CREATE TABLE tRoom (
    roomID          INT PRIMARY KEY,
    floor           INT NOT NULL,
    capacity        INT NOT NULL,
    accessibility   ENUM("WHEEL-CHAIR-FRIENDLY", "ELDERLY-FRIENDLY", "WHEEL-ELDERLY-FRIENDLY", "NONE") DEFAULT "NONE" NOT NULL,
    price           DECIMAL(10,2) NOT NULL
);

-- Making floor as Foreign Key
ALTER TABLE tRoom
ADD CONSTRAINT FK_floor_tRoom FOREIGN KEY (floor) REFERENCES tFloor (floor);

-- tTable --
CREATE TABLE tTable (
    tableID        INT PRIMARY KEY,
    roomID         INT,
    floor          INT NOT NULL,
    type           ENUM("FLOOR", "TABLE", "HIGH-TOP") DEFAULT "TABLE" NOT NULL,
    capacity       INT NOT NULL,
    accessibility  ENUM("WHEEL-CHAIR-FRIENDLY", "ELDERLY-FRIENDLY", "WHEEL-ELDERLY-FRIENDLY", "NONE") DEFAULT "NONE" NOT NULL
);

-- Making roomID as Foreign Key --
ALTER TABLE tTable
ADD CONSTRAINT FK_roomID_tTable FOREIGN KEY (roomID) REFERENCES tRoom (roomID);

-- Making floor as Foreign Key --
ALTER TABLE tFloor
ADD CONSTRAINT FK_floor_tTable FOREIGN KEY (floor) REFERENCES tFloor (floor);

-- tBooking --
CREATE TABLE tBooking (
    bookingID        INT PRIMARY KEY AUTO_INCREMENT,
    memberID         INT NOT NULL,
    tableID          INT,
    roomID           INT,
    Floor            INT,
    confirmStaffID   INT,
    date             DATE NOT NULL,
    startTime        TIME NOT NULL,
    endTime          TIME,
    with             ENUM("CAT", "DOG") DEFAULT "CAT" NOT NULL,
    guestNo_minor    INT NOT NULL,
    guestNo_adult    INT NOT NULL,
    guestNo_elderly  INT NOT NULL,
    guestNo_total    INT NOT NULL,
    hasWheelchair    ENUM("YES", "NO") DEFAULT "NO" NOT NULL,
    description      LONGTEXT NOT NULL,
    theme            ENUM("BIRTHDAY", "GRADUATE", "FAREWELL", "REUNION", "OTHER") DEFAULT "BIRTHDAY" NOT NULL,
    status           ENUM("PENDING", "CONFIRM", "COMPLETE", "CANCELLED", "ON-REQUEST") DEFAULT "PENDING" NOT NULL,
    madeDate         DATE NOT NULL,
    madetime         TIME NOT NULL,
    confirmDate      DATE,
    confirmTime      TIME
);

-- Making memberID as Foreign Key --
ALTER TABLE tBooking
ADD CONSTRAINT FK_memberID_tBooking FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- Making tableID as Foreign Key --
ALTER TABLE tBooking
ADD CONSTRAINT FK_tableID_tBooking FOREIGN KEY (tableID) REFERENCES tTable (tableID);

-- Making roomID as Foreign Key --
ALTER TABLE tBooking
ADD CONSTRAINT FK_roomID_tBooking FOREIGN KEY (roomID) REFERENCES tRoom (roomID);

-- Making floor as Foreign Key --
ALTER TABLE tBooking
ADD CONSTRAINT FK_floor_tBooking FOREIGN KEY (floor) REFERENCES tFloor (floor);

-- Making confirmStaffID as Foreign Key --
ALTER TABLE tBooking
ADD CONSTRAINT FK_confirmStaffID_tBooking FOREIGN KEY (confirmStaffID) REFERENCES tStaff (staffID);

-- tProduct --
CREATE TABLE tProduct (
    productID        INT PRIMARY KEY AUTO_INCREMENT,
    name             VARCHAR(255) NOT NULL,
    imageURL         VARCHAR(255) NOT NULL,
    category         ENUM("FOOD", "TREAT", "TOY", "TREE-SCRATCHERS", "LITTER", "BOWL-FEEDER", "GROMMING", "VITAMINS-SUPPLEMENTS", "LEAD-COLLAR-HARNESSES") DEFAULT "FOOD" NOT NULL,
    for              ENUM("CAT", "DOG") DEFAULT "CAT" NOT NULL,
    origin           VARCHAR(255) NOT NULL,
    stock            INT NOT NULL,
    sellingPrice     DECIMAL(10,2) NOT NULL,
    manufactureCost  DECIMAL(10,2) NOT NULL,
    description      LONGTEXT NOT NULL
);

-- tWishlist --
CREATE TABLE tWishlist (
    wishlistID       INT PRIMARY KEY AUTO_INCREMENT,
    memberID         INT NOT NULL
);

-- Making memberID as Foreign Key --
ALTER TABLE tWishlist
ADD CONSTRAINT FK_memberID_tWishlist FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- tProductWishlist --
CREATE TABLE tProductWishlist (
    productWishlistID   INT PRIMARY KEY AUTO_INCREMENT,
    wishlistID          INT NOT NULL,
    productID           INT NOT NULL
);

-- Making wishlistID as Foreign Key --
ALTER TABLE tProductWishlist
ADD CONSTRAINT FK_wishlistID_tProductWishlist FOREIGN KEY (wishlistID) REFERENCES tWishlist (wishlistID);

-- Making productID as Foreign Key --
ALTER TABLE tProductWishlist
ADD CONSTRAINT FK_productID_tProductWishlist FOREIGN KEY (productID) REFERENCES tProduct (productID);

-- tShoppingCart --
CREATE TABLE tShoppingCart (
    shoppingCartID      INT PRIMARY KEY AUTO_INCREMENT,
    memberID            INT NOT NULL,
    noOfProduct         INT NOT NULL,
    total               DECIMAL(10,2)
);

-- Making memberID as Foreign Key --
ALTER TABLE tShoppingCart
ADD CONSTRAINT FK_memberID_tShoppingCart FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- tProductShoppingCart --
CREATE TABLE tProductShoppingCart (
    productShoppingCartID   INT PRIMARY KEY AUTO_INCREMENT,
    shoppingCartID          INT NOT NULL,
    productID               INT NOT NULL,
    quantity                INT NOT NULL,
    subTotal                DECIMAL(10,2)
);

-- Making shoppingCartID as Foreign Key --
ALTER TABLE tProductShoppingCart
ADD CONSTRAINT FK_shoppingCartID_tProductShoppingCart FOREIGN KEY (shoppingCartID) REFERENCES tShoppingCart (shoppingCartID);

-- Making productID as Foreign Key --
ALTER TABLE tProductShoppingCart
ADD CONSTRAINT FK_productID_tProductShoppingCart FOREIGN KEY (productID) REFERENCES tProduct (productID);

-- tOnlineOrder --
CREATE TABLE tOnlineOrder (
    onlineOrderID   INT PRIMARY KEY AUTO_INCREMENT,
    shoppingCartID  INT NOT NULL,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    total           DECIMAL(10,2) NOT NULL,
    status          ENUM("PENDING", "PAID", "PACKING", "READY-TO-BE-COLLECT", "OUT-FOR-DELIVERY", "DELIVERED") DEFAULT "PENDING" NOT NULL
);

-- Making shoppingCartID as Foreign Key --
ALTER TABLE tOnlineOrder
ADD CONSTRAINT FK_shoppingCartID_tOnlineOrder FOREIGN KEY (shoppingCartID) REFERENCES tShoppingCart (shoppingCartID);

-- tEventType --
CREATE TABLE tEventType (
    eventType       
    floor
    capacity
    ageLimit
    price
);

-- tEvent --
CREATE TABLE tEvent (
    eventID             INT PRIMARY KEY AUTO_INCREMENT,
    name                VARCHAR(255) NOT NULL,
    type                ENUM("BIRTHDAY", "DIY-WORKSHOP", "FESTIVE-PARTY") DEFAULT "BIRTHDAY" NOT NULL,
    date                DATE NOT NULL,
    startTime           TIME NOT NULL,
    endTime             TIME NOT NULL,
    decription          LONGTEXT NOT NULL,
    latestUpdateDate    DATE NOT NULL
);

-- Making type as Foreign Key --
ALTER TABLE tEvent
ADD CONSTRAINT FK_type_tEvent FOREIGN KEY (type) REFERENCES tEventType (eventType);

-- tTicket --
CREATE TABLE tTicket (
    ticketID
    eventID
    quantity
    subTotal
);

-- Making eventID as Foriegn Key --

-- tTicketBasket --
CREATE TABLE tTicketBasket (
    ticketBasketID
    memberID
    ticketID
    noOfEvent
    noOfTicket
    total
);

-- Making memberID as Foriegn Key --

-- Making ticketID as Foriegn Key

-- tTicketOrder --
CREATE TABLE tTicketOrder (

);

-- Making tTicketBasket as Foriegn Key --

-- tDontaion --
CREATE TABLE tDonation (
    donationID      INT PRIMARY KEY AUTO_INCREMENT,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    amount          DECIMAL(10,2) NOT NULL,
    message         LONGTEXT NOT NULL
);

-- tPayment --
CREATE TABLE tPayment (
    paymentID       INT PRIMARY KEY AUTO_INCREMENT,
    for             ENUM("BOOKING", "ONLINE-ORDER", "TICKET-ORDER", "DONATION") DEFAULT "BOOKING" NOT NULL,
    bookingID       INT,
    onlineOrderID   INT,
    ticketOrderID   INT,
    donationID      INT,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    total           DECIMAL(10,2) NOT NULL,
    type            ENUM("BANK-TRANSFER", "CARD") DEFAULT "BANK-TRANSFER" NOT NULL,
    status          ENUM("PENDING", "AUTHORISED", "PAID", "REFUNDED") DEFAULT "PENDING" NOT NULL
);

-- Making bookingID as Foreign Key --
ALTER TABLE tPayment
ADD CONSTRAINT FK_bookingID_tPayment FOREIGN KEY (bookingID) REFERENCES tBooking (bookingID);

-- Making onlineOrderID as Foreign Key --
ALTER TABLE tPayment
ADD CONSTRAINT FK_onlineOrderID_tPayment FOREIGN KEY (onlineOrderID) REFERENCES tOnlineOrder (onlineOrderID);

-- Making ticketOrderID as Foreign Key --
ALTER TABLE tPayment
ADD CONSTRAINT FK_ticketOrderID_tPayment FOREIGN KEY (ticketOrderID) REFERENCES tTicketOrder (ticketOrderID);

-- Making donationID as Foreign Key --
ALTER TABLE tPayment
ADD CONSTRAINT FK_donationID_tPayment FOREIGN KEY (donationID) REFERENCES tDonation (donationID);

-- tEnquiry --
CREATE TABLE tEnquiry (
    enquiryID           INT PRIMARY KEY AUTO_INCREMENT,
    memberID            INT,
    date                DATE NOT NULL,
    time                TIME NOT NULL,
    email               VARCHAR(255),
    category            ENUM("BOOKING", "EVENT", "PET", "ONLINE-SHOP", "OTHER") DEFAULT "PET" NOT NULL,
    message             LONGTEXT NOT NULL,
    replied             ENUM("YES", "NO") DEFAULT "NO" NOT NULL,
    repliedDate         DATE,
    repliedByStaffID    INT
);

-- Making memberID as Foreign Key --
ALTER TABLE tEnquiry
ADD CONSTRAINT FK_memberID_tEnquiry FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- tFeedback --
CREATE TABLE tFeedback (
    feedbackID      INT PRIMARY KEY AUTO_INCREMENT,
    memberID        INT NOT NULL,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    category        ENUM("SHOP", "WORKER", "PET", "ONLINE-SHOP", "FOOD", "TREAT", "SERVICE", "OTHER") DEFAULT "PET" NOT NULL,
    message         LONGTEXT NOT NULL
);

-- Making memberID as Foreign Key --
ALTER TABLE tFeedback
ADD CONSTRAINT FK_memberID_tFeedback FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- tComment --
CREATE TABLE tComment (
    commentID       INT PRIMARY KEY AUTO_INCREMENT,
    memberID        INT NOT NULL,
    date            DATE NOT NULL,
    time            TIME NOT NULL,
    category        ENUM() DEFAULT "PET" NOT NULL,
    with            ENUM("CAT", "DOG") DEFAULT "CAT" NOT NULL,
    imageURL        VARCHAR(255),
    message         LONGTEXT NOT NULL,
    rating          INT
);

-- Making memberID as Foreign Key --
ALTER TABLE tComment
ADD CONSTRAINT FK_memberID_tComment FOREIGN KEY (memberID) REFERENCES tMember (memberID);

-- tWork --
CREATE TABLE twork (
    workCode        VARCHAR(4) PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    access          VARCHAR(255) NOT NULL,
    description     VARCHAR(255) NOT NULL
);

-- tPosition --
CREATE TABLE tPosition (
    positionCode    VARCHAR(3) PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    access          VARCHAR(255) NOT NULL
);

-- tStaff --
CREATE TABLE tStaff (
    staffID         INT PRIMARY KEY AUTO_INCREMENT,
    firstname       VARCHAR(255) NOT NULL,
    lastname        VARCHAR(255) NOT NULL,
    dateOfBirth     DATE NOT NULL,
    personalEmail   VARCHAR(255) NOT NULL,
    workEmail       VARCHAR(255) NOT NULL,
    tel             VARCHAR(13) NOT NULL,
    joinedDate      DATE NOT NULL,
    username        VARCHAR(20) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    positionCode    ENUM() DEFAULT "INT" NOT NULL
);

-- Making positionCode as Foreign Key --
ALTER TABLE tStaff
ADD CONSTRAINT FK_positionCode_tStaff FOREIGN KEY (positionCode) REFERENCES tPosition (positionCode);

-- tWorkRecord --
CREATE TABLE tWorkRecord (
    workRecord
    staffID
    workCode
    date
    startTime
    endTime
    description
);

-- Making staffID as Foreign Key --
ALTER TABLE tWorkRecord
ADD CONSTRAINT FK_staffID_tWorkRecord FOREIGN KEY (staffID) REFERENCES tStaff (staffID);

-- Making workCode as Foreign Key --
ALTER TABLE tWorkRecord
ADD CONSTRAINT FK_workCode_tWorkRecord FOREIGN KEY (workCode) REFERENCES tWork (workCode);

-- tPet --
CREATE TABLE tPet (

);


-- tDiary --
CREATE TABLE tDiary (

);

-- Making petID as Foreign Key --

-- tCheckUp --
CREATE TABLE tCheckUp (

);

-- Making petID as Foreign Key --

-- tShower --
CREATE TABLE tShower (

);

-- Making petID as Foreign Key --

CREATE TABLE t (

);