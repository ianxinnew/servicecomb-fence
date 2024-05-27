#
## ---------------------------------------------------------------------------
## Licensed to the Apache Software Foundation (ASF) under one or more
## contributor license agreements.  See the NOTICE file distributed with
## this work for additional information regarding copyright ownership.
## The ASF licenses this file to You under the Apache License, Version 2.0
## (the "License"); you may not use this file except in compliance with
## the License.  You may obtain a copy of the License at
##
##      http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
## ---------------------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS authentication_server_db;

USE authentication_server_db;

DROP TABLE IF EXISTS T_USERS;

CREATE TABLE `T_USERS` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `USER_NAME` VARCHAR(64) NOT NULL,
  `PASSWORD` VARCHAR(256) NOT NULL,
  `ACCOUNT_NON_EXPIRED` TINYINT(1) NOT NULL,
  `ACCOUNT_NON_LOCKED` TINYINT(1) NOT NULL,
  `CREDENTIALS_NON_EXPIRED` TINYINT(1) NOT NULL,
  `ENABLED` TINYINT(1) NOT NULL,
  PRIMARY KEY (`ID`)
);

/* PBKDF encrypted password for changeMyPassword , please note to change it */
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("admin", "f09cada680f3d25b1069f495de2465ceb09afbe45980c8f1ef0202f9d8934efb1a144d87faf1fd70a60da183d9399069", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("guest", "f09cada680f3d25b1069f495de2465ceb09afbe45980c8f1ef0202f9d8934efb1a144d87faf1fd70a60da183d9399069", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("guestExpiresQuickly", "f09cada680f3d25b1069f495de2465ceb09afbe45980c8f1ef0202f9d8934efb1a144d87faf1fd70a60da183d9399069", true, true, true, true);

/* empty password user can not login directly */
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("github:anonymous", "", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("github:liubao68", "", true, true, true, true);

DROP TABLE IF EXISTS T_ROLES;

CREATE TABLE `T_ROLES` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `ROLE_NAME` VARCHAR(64) NOT NULL,
  `USER_NAME` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("ADMIN", "admin");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "guest");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "guestExpiresQuickly");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "github:anonymous");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("ADMIN", "github:liubao68");

DROP TABLE IF EXISTS T_TOKENS;

CREATE TABLE `T_TOKENS` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `ACCESS_TOKEN_VALUE` VARCHAR(256) NOT NULL,
  `REFRESH_TOKEN_VALUE` VARCHAR(256) NOT NULL,
  `TOKEN` TEXT NOT NULL,
  PRIMARY KEY (`ID`)
);
