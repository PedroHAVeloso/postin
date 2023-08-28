CREATE TABLE USERS (
  US_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  US_USERNAME VARCHAR(50),
  US_PASSWORD VARCHAR(255),
  US_EMAIL VARCHAR(255) UNIQUE
);

CREATE TABLE SESSIONS (
  SE_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  SE_TOKEN VARCHAR(60),

  SE_US_ID INTEGER,
  FOREIGN KEY (SE_US_ID) REFERENCES USERS (US_ID)
);
      
CREATE TABLE POSTS (
  PO_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  PO_TEXT VARCHAR(255),
  PO_FAVORITES INTEGER DEFAULT 0,
  PO_COLOR VARCHAR(10),
  
  PO_US_ID INTEGER,
  FOREIGN KEY (PO_US_ID) REFERENCES USERS (US_ID)
);