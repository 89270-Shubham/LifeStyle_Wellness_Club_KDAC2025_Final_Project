package com.sunbeam.globalexceptionhandler;

public class InvalidInputException extends RuntimeException {
	public InvalidInputException(String mesg) {
		super(mesg);
	}
}